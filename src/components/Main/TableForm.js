import { Table } from 'antd'
import { dataAPI } from '../../services/DataService'
import { CrudActions } from '../CrudActions'

export const TableForm = ({ params }) => {
  const { data, error, isLoading } = dataAPI.useGetDataQuery(params.url)

  const tableColumns = [
    ...params.columns,
    {
      render: (record) => (
        <CrudActions payload={record} data={data} params={params} />
      ),
    },
  ]

  return error ? (
    <p className='no-posts'>{error?.error}</p>
  ) : isLoading ? (
    <p className='no-posts'>Loading...</p>
  ) : (
    <Table
      columns={tableColumns}
      dataSource={data?.map((item) => ({ ...item, key: item.id }))}
    />
  )
}
