import { useEffect, useMemo } from 'react'
import { TableForm } from '../components/Main/TableForm'
import { usePageParams } from '../hooks/Context/usePageParams'

export const Products = () => {
  const { setParams } = usePageParams()
  
  const params = useMemo(
    () => ({
      url: '/products',
      columns: [
        { title: 'Name', dataIndex: 'name', width: 250 },
        { title: 'Description', dataIndex: 'description', width: 250 },
        { title: 'Amount', dataIndex: 'amount', width: 70 },
        { title: 'Price', dataIndex: 'price', width: 70 },
        { title: 'Categories', dataIndex: 'categories', width: 250 },
        { title: 'Store', dataIndex: 'store', width: 200 },
      ],
    }),
    []
  )
  
  useEffect(() => setParams(params), [setParams, params])

  return <TableForm />
}
