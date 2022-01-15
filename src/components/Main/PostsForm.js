import { useState } from 'react'
import { usePosts } from '../../hooks/Posts/usePosts'
import { dataAPI } from '../../services/DataService'
import { Pagination } from '../Posts/Pagination'
import { FilterForm } from '../Posts/FilterForm'
import { OpenModal } from '../OpenModal'
import { PostsList } from '../Posts/PostsList'
import { useTotalPages } from '../../hooks/Posts/useTotalPages'
import { usePageParams } from '../../hooks/Context/usePageParams'

export const PostsForm = () => {
  const [_page, setPage] = useState(1)
  const [filter, setFilter] = useState({ sort: '', search: '' })

  const { url } = usePageParams()
  const _limit = 10
  const { data, error, isLoading } = dataAPI.useGetPostsQuery({
    url,
    _limit,
    _page,
  })
  const totalPages = useTotalPages(data, _limit)
  const filteredPosts = usePosts(data, filter)

  return error ? (
    <p className='no-posts'>{error?.error}</p>
  ) : (
    <>
      <OpenModal />
      <FilterForm filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <p className='no-posts'>Loading...</p>
      ) : (
        <div>
          <PostsList filteredPosts={filteredPosts} />
          <Pagination page={_page} totalPages={totalPages} setPage={setPage} />
        </div>
      )}
    </>
  )
}
