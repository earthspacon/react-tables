import { useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { dataAPI } from '../../services/DataService'
import { CrudActions } from '../CrudActions'
import { Pagination } from '../Pagination'
import { FilterForm } from '../FilterForm'

export const PostsForm = ({ url, columns }) => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const { data, error, isLoading } = dataAPI.useGetPostsQuery({
    url,
    _limit: limit,
    _page: page,
  })
  const posts = data?.posts
  const totalPages = Math.ceil(data?.totalCount / limit)
  const {
    filteredPosts,
    selectedSort,
    searchQuery,
    options,
    sortPosts,
    setSearchQuery,
  } = useFilter(posts)

  const pagination = (
    <Pagination page={page} totalPages={totalPages} setPage={setPage} />
  )

  return (
    <>
      {error && <h1>Error in fetching data: {error?.message}</h1>}
      <FilterForm
        value={selectedSort}
        options={options}
        onChange={sortPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        limit={limit}
        setLimit={setLimit}
      />
      {isLoading ? (
        <p className='no-posts'>Loading...</p>
      ) : filteredPosts?.length ? (
        <div>
          {filteredPosts.map((post) => (
            <div className='posts' key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <CrudActions payload={post} url={url} columns={columns} />
            </div>
          ))}
          {pagination}
        </div>
      ) : (
        <>
          <p className='no-posts'>NO POSTS!</p>
          {pagination}
        </>
      )}
    </>
  )
}
