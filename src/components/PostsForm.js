import { Button } from 'antd'
import { useState } from 'react'
import { dataAPI } from '../api/DataService'
import { CrudActions } from './CrudActions'

export const PostsForm = ({ url, columns }) => {
  const [page, setPage] = useState(1)
  const { data, error } = dataAPI.useGetPostsQuery({
    url,
    _limit: 10,
    _page: page,
  })

  const posts = data?.posts
  const totalPages = Math.ceil(data?.totalCount / 10)

  return (
    <>
      {error && <h1>Error in fetching data: {error?.message}</h1>}
      {posts?.map((post) => (
        <div className='posts' key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <CrudActions payload={post} url='posts' columns={columns} />
        </div>
      ))}

      {totalPages && (
        <div className='pagination'>
          <Button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
            Prev
          </Button>
          <Button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
          {page} / {totalPages}
        </div>
      )}
    </>
  )
}
