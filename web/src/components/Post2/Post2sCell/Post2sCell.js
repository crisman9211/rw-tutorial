import { Link, routes } from '@redwoodjs/router'

import Post2s from 'src/components/Post2/Post2s'

export const QUERY = gql`
  query FindPost2s {
    post2S {
      id
      title
      body
      cratedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No post2S yet. '}
      <Link to={routes.newPost2()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post2S }) => {
  return <Post2s post2S={post2S} />
}
