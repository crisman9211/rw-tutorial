import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Post2Form from 'src/components/Post2/Post2Form'

const CREATE_POST2_MUTATION = gql`
  mutation CreatePost2Mutation($input: CreatePost2Input!) {
    createPost2(input: $input) {
      id
    }
  }
`

const NewPost2 = () => {
  const [createPost2, { loading, error }] = useMutation(CREATE_POST2_MUTATION, {
    onCompleted: () => {
      toast.success('Post2 created')
      navigate(routes.post2S())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createPost2({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Post2</h2>
      </header>
      <div className="rw-segment-main">
        <Post2Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPost2
