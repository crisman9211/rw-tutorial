import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Post2/Post2sCell'

const DELETE_POST2_MUTATION = gql`
  mutation DeletePost2Mutation($id: Int!) {
    deletePost2(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Post2sList = ({ post2S }) => {
  const [deletePost2] = useMutation(DELETE_POST2_MUTATION, {
    onCompleted: () => {
      toast.success('Post2 deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post2 ' + id + '?')) {
      deletePost2({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Crated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {post2S.map((post2) => (
            <tr key={post2.id}>
              <td>{truncate(post2.id)}</td>
              <td>{truncate(post2.title)}</td>
              <td>{truncate(post2.body)}</td>
              <td>{timeTag(post2.cratedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.post2({ id: post2.id })}
                    title={'Show post2 ' + post2.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPost2({ id: post2.id })}
                    title={'Edit post2 ' + post2.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete post2 ' + post2.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(post2.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Post2sList
