import { Table } from 'antd'
import { dataAPI } from '../../services/DataService'
import { AddButtom } from '../AddButton'
import { CrudActions } from '../CrudActions'

export const TableForm = ({ url, columns }) => {
  const { data, error } = dataAPI.useGetDataQuery({ url })

  const tableColumns = [
    ...columns,
    {
      render: (record) =>
        data && <CrudActions payload={record} url={url} columns={columns} />,
    },
  ]
  console.log(data)

  return (
    <>
      {error && <h1>Error in fetching data: {error.message}</h1>}
      <AddButtom url={url} columns={columns} />
      {data && (
      <Table
        columns={tableColumns}
          dataSource={data.map((item) => ({ ...item, key: item.id }))}
        />
      )}
    </>
  )
}
