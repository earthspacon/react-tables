import { Table } from 'antd'
import { dataAPI } from '../../services/DataService'
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

  return (
    <>
      {error && <h1>Error in fetching data: {error.message}</h1>}
      {data && (
        <Table
          columns={tableColumns}
          dataSource={data.map((item) => ({ ...item, key: item.id }))}
        />
      )}
    </>
  )
}
