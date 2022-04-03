import Post2 from 'src/components/Post2/Post2'

export const QUERY = gql`
  query FindPost2ById($id: Int!) {
    post2: post2(id: $id) {
      id
      title
      body
      cratedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post2 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post2 }) => {
  return <Post2 post2={post2} />
}
