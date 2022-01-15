import { CrudActions } from '../CrudActions'

export const PostsList = ({ filteredPosts, params }) =>
  filteredPosts?.length ? (
    filteredPosts.map((post) => (
      <div className='posts' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <CrudActions payload={post} data={filteredPosts} params={params} />
      </div>
    ))
  ) : (
    <>
      <p className='no-posts'>NO POSTS!</p>
      <CrudActions data={filteredPosts} params={params} />
    </>
  )
