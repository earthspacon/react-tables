import { PostsForm } from '../components/PostsForm'

export const Posts = () => {
  const columns = [
    { title: 'Title', dataIndex: 'title' },
    { title: 'Body', dataIndex: 'body' },
  ]
  return <PostsForm url='/posts' columns={columns} />
}
