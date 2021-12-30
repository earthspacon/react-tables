import { TableForm } from './TableForm'

export const BooksTable = () => {
  const column = [
    { title: 'Title', dataIndex: 'title', width: 250 },
    { title: 'Type of literature', dataIndex: 'type', width: 250 },
    { title: 'The year of publishing', dataIndex: 'year', width: 50 },
    { title: 'Author', dataIndex: 'author', width: 250 },
    { title: 'Publishing house', dataIndex: 'house', width: 250 },
  ]
  return <TableForm url='books' column={column} />
}
