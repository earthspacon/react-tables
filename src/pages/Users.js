import { TableForm } from '../components/Main/TableForm'

export const Users = () => {
  const params = {
    url: '/users',
    columns: [
      { title: 'Full Name', dataIndex: 'fullname', width: 250 },
      { title: 'Username', dataIndex: 'username', width: 250 },
      { title: 'Age', dataIndex: 'age', width: 50 },
      { title: 'Email', dataIndex: 'email', width: 250 },
      { title: 'Password', dataIndex: 'password', width: 250 },
    ],
  }

  return <TableForm params={params} />
}
