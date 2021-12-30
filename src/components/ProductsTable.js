import { TableForm } from './TableForm'

export const ProductsTable = () => {
  const column = [
    { title: 'Name', dataIndex: 'name', width: 250 },
    { title: 'Description', dataIndex: 'description', width: 250 },
    { title: 'Amount', dataIndex: 'amount', width: 70 },
    { title: 'Price', dataIndex: 'price', width: 70 },
    { title: 'Categories', dataIndex: 'categories', width: 250 },
    { title: 'Store', dataIndex: 'store', width: 200 },
  ]
  return <TableForm url='products' column={column} />
}
