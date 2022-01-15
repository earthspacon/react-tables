import { useEffect, useMemo } from 'react'
import { PostsForm } from '../components/Main/PostsForm'
import { usePageParams } from '../hooks/Context/usePageParams'

export const Posts = () => {
  const { setParams } = usePageParams()
  
  const params = useMemo(
    () => ({
      url: '/posts',
      columns: [
        { title: 'Title', dataIndex: 'title' },
        { title: 'Body', dataIndex: 'body' },
      ],
    }),
    []
  )

  useEffect(() => setParams(params), [setParams, params])

  return <PostsForm />
}
