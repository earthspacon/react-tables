import { useMemo } from 'react'

export const usePosts = (data, filter) => {
  const posts = data?.posts
  const { sort, search } = filter

  const sortedPosts = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      : posts
  }, [sort, posts])

  const filteredPosts = useMemo(() => {
    return sortedPosts?.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, sortedPosts])

  return filteredPosts
}
