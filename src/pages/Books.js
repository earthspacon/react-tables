import { useEffect, useMemo } from 'react'
import { TableForm } from '../components/Main/TableForm'
import { usePageParams } from '../hooks/Context/usePageParams'

export const Books = () => {
  const { setParams } = usePageParams()
  
  const params = useMemo(
    () => ({
      url: '/books',
      columns: [
        { title: 'Title', dataIndex: 'title', width: 250 },
        { title: 'Type of literature', dataIndex: 'type', width: 250 },
        { title: 'The year of publishing', dataIndex: 'year', width: 50 },
        { title: 'Author', dataIndex: 'author', width: 250 },
        { title: 'Publishing house', dataIndex: 'house', width: 250 },
      ],
    }),
    []
  )

  useEffect(() => setParams(params), [setParams, params])

  return <TableForm />
}
