import { useMemo } from 'react'

export const useTotalPages = (data, limit) => {
  const totalCount = data?.totalCount
  
  const totalPages = useMemo(() => {
    return Math.ceil(totalCount / limit)
  }, [totalCount, limit])

  return totalPages
}
