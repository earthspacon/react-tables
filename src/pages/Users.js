import { useEffect, useMemo } from 'react'
import { TableForm } from '../components/Main/TableForm'
import { usePageParams } from '../hooks/Context/usePageParams'

export const Users = () => {
  const { setParams } = usePageParams()

  const params = useMemo(
    () => ({
      url: '/users',
      columns: [
        { title: 'Full Name', dataIndex: 'fullname', width: 250 },
        { title: 'Username', dataIndex: 'username', width: 250 },
        { title: 'Age', dataIndex: 'age', width: 50 },
        { title: 'Email', dataIndex: 'email', width: 250 },
        { title: 'Password', dataIndex: 'password', width: 250 },
      ],
    }),
    []
  )

  useEffect(() => setParams(params), [setParams, params])

  return <TableForm />
}
