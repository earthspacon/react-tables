import { TableForm } from './TableForm'

export const UsersTable = () => {
  const column = [
    { title: 'Full Name', dataIndex: 'fullname', width: 250 },
    { title: 'Username', dataIndex: 'username', width: 250 },
    { title: 'Age', dataIndex: 'age', width: 50 },
    { title: 'Email', dataIndex: 'email', width: 250 },
    { title: 'Password', dataIndex: 'password', width: 250 },
  ]
  return <TableForm url='users' column={column} />
}
