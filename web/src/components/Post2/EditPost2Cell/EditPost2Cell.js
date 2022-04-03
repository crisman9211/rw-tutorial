import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import Post2Form from 'src/components/Post2/Post2Form'

export const QUERY = gql`
  query EditPost2ById($id: Int!) {
    post2: post2(id: $id) {
      id
      title
      body
      cratedAt
    }
  }
`
const UPDATE_POST2_MUTATION = gql`
  mutation UpdatePost2Mutation($id: Int!, $input: UpdatePost2Input!) {
    updatePost2(id: $id, input: $input) {
      id
      title
      body
      cratedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post2 }) => {
  const [updatePost2, { loading, error }] = useMutation(UPDATE_POST2_MUTATION, {
    onCompleted: () => {
      toast.success('Post2 updated')
      navigate(routes.post2S())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePost2({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Post2 {post2.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Post2Form
          post2={post2}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
