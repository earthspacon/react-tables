import { Table } from 'antd'
import { usePageParams } from '../../hooks/Context/usePageParams'
import { dataAPI } from '../../services/DataService'
import { CrudActions } from '../CrudActions'
import { OpenModal } from '../OpenModal'

export const TableForm = () => {
  const { url, columns } = usePageParams()
  const { data, error, isLoading } = dataAPI.useGetDataQuery(url)

  const tableColumns = [
    ...columns,
    {
      render: (record) => data?.length && <CrudActions payload={record} />,
    },
  ]

  return error ? (
    <p className='no-posts'>{error?.error}</p>
  ) : isLoading ? (
    <p className='no-posts'>Loading...</p>
  ) : (
    <>
      <Table
        columns={tableColumns}
        dataSource={data?.map((item) => ({ ...item, key: item.id }))}
      />
      <OpenModal />
    </>
  )
}
