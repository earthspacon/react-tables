import { CrudActions } from '../CrudActions'

export const PostsList = ({ filteredPosts }) =>
  filteredPosts?.length ? (
    filteredPosts.map((post) => (
      <div className='posts' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <CrudActions payload={post} />
      </div>
    ))
  ) : (
    <p className='no-posts'>NO POSTS!</p>
  )
