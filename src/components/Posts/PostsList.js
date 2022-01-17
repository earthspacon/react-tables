import { CrudActions } from '../CrudActions'

export const PostsList = ({ filteredPosts, params }) => {
  return (
    <>
      {filteredPosts?.map((post) => (
        <div className='posts' key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <CrudActions payload={post} data={filteredPosts} params={params} />
        </div>
      ))}
      {!filteredPosts?.length ? <p className='no-posts'>NO POSTS!</p> : null}
    </>
  )
}
