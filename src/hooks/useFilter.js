import { useMemo, useState } from 'react'

export const useFilter = (posts) => {
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortPosts = (value) => setSelectedSort(value)

  const sortedPosts = useMemo(
    () =>
      selectedSort
        ? [...posts].sort((a, b) =>
            a[selectedSort].localeCompare(b[selectedSort])
          )
        : posts,
    [selectedSort, posts]
  )

  const filteredPosts = useMemo(
    () =>
      sortedPosts?.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, sortedPosts]
  )

  const options = [
    { value: 'title', label: 'Title' },
    { value: 'body', label: 'Body' },
  ]

  return {
    filteredPosts,
    selectedSort,
    searchQuery,
    options,
    sortPosts,
    setSearchQuery,
  }
}
