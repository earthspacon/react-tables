import { Popconfirm, Table, Button, Modal } from 'antd'
import { useEffect } from 'react'
import { InputForm } from './InputForm'
import { useCrud } from '../hooks/useCrud'

export const TableForm = ({ url, column }) => {
  const {
    getData,
    toggleModal,
    handleDelete,
    handleEdit,
    onCancel,
    onFinish,
    data,
    form,
    visible,
  } = useCrud(url)

  useEffect(() => {
    getData()
  }, [getData])

  const columns = [
    ...column,
    {
      render: (record) => {
        return data.length >= 1 ? (
          <>
            <Button
              onClick={() => {
                handleEdit(record)
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title='Sure to delete?'
              onConfirm={() => {
                handleDelete(record.id)
              }}
            >
              <Button>Delete</Button>
            </Popconfirm>
          </>
        ) : null
      },
    },
  ]

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal visible={visible} onCancel={onCancel} footer={false}>
        <InputForm onFinish={onFinish} form={form} columns={column} />
      </Modal>
      <div className='plus'>
        <Button type='primary' onClick={toggleModal}>
          +
        </Button>
      </div>
    </>
  )
}
