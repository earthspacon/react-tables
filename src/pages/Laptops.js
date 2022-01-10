import { TableForm } from '../components/TableForm'

export const Laptops = () => {
  const columns = [
    { title: 'Full Name', dataIndex: 'fullname', width: 250 },
    { title: 'Proceccor', dataIndex: 'proceccor', width: 250 },
    { title: 'RAM', dataIndex: 'ram', width: 70 },
    { title: 'ROM', dataIndex: 'rom', width: 70 },
    { title: 'Display', dataIndex: 'display', width: 250 },
    { title: 'Keyboard', dataIndex: 'keyboard', width: 200 },
  ]
  return <TableForm url='/laptops' columns={columns} />
}
