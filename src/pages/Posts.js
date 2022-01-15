import { PostsForm } from '../components/Main/PostsForm'

export const Posts = () => {
  const params = {
    url: '/posts',
    columns: [
      { title: 'Title', dataIndex: 'title' },
      { title: 'Body', dataIndex: 'body' },
    ],
  }

  return <PostsForm params={params} />
}
