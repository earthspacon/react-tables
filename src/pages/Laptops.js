import { useEffect, useMemo } from 'react'
import { TableForm } from '../components/Main/TableForm'
import { usePageParams } from '../hooks/Context/usePageParams'

export const Laptops = () => {
  const { setParams } = usePageParams()
  
  const params = useMemo(
    () => ({
      url: '/laptops',
      columns: [
        { title: 'Full Name', dataIndex: 'fullname', width: 250 },
        { title: 'Proceccor', dataIndex: 'proceccor', width: 250 },
        { title: 'RAM', dataIndex: 'ram', width: 70 },
        { title: 'ROM', dataIndex: 'rom', width: 70 },
        { title: 'Display', dataIndex: 'display', width: 250 },
        { title: 'Keyboard', dataIndex: 'keyboard', width: 200 },
      ],
    }),
    []
  )

  useEffect(() => setParams(params), [setParams, params])

  return <TableForm />
}
