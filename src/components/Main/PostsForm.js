import { useState } from 'react'
import { usePosts } from '../../hooks/usePosts'
import { dataAPI } from '../../services/DataService'
import { Pagination } from '../Posts/Pagination'
import { FilterForm } from '../Posts/FilterForm'
import { PostsList } from '../Posts/PostsList'
import { useTotalPages } from '../../hooks/useTotalPages'

export const PostsForm = ({ params }) => {
  const [_page, setPage] = useState(1)
  const [filter, setFilter] = useState({ sort: '', search: '' })

  const _limit = 10
  const { data, error, isLoading } = dataAPI.useGetPostsQuery({
    url: params.url,
    _limit,
    _page,
  })
  const totalPages = useTotalPages(data, _limit)
  const filteredPosts = usePosts(data, filter)

  return error ? (
    <p className='no-posts'>{error?.error}</p>
  ) : (
    <>
      <FilterForm filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <p className='no-posts'>Loading...</p>
      ) : (
        <div>
          <PostsList filteredPosts={filteredPosts} params={params} />
          <Pagination page={_page} totalPages={totalPages} setPage={setPage} />
        </div>
      )}
    </>
  )
}
