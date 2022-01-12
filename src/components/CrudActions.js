import { Button, Modal, Popconfirm } from 'antd'
import { useContext } from 'react'
import { useCrud } from '../hooks/useCrud'
import { InputForm } from './InputForm'
import { Context } from './ModalContext'

export const CrudActions = ({ payload, url, columns }) => {
  const { handleEditButton, handleDelete, onCancel, onFinish, form } =
    useCrud(url)
  const { visible } = useContext(Context)

  return (
    <>
      <Button onClick={() => handleEditButton(payload)}>Edit</Button>
      <Modal visible={visible} onCancel={onCancel} footer={false}>
        <InputForm onFinish={onFinish} form={form} columns={columns} />
      </Modal>
      <Popconfirm
        title='Sure to delete?'
        onConfirm={() => handleDelete(payload.id)}
      >
        <Button>Delete</Button>
      </Popconfirm>
      
    </>
  )
}
