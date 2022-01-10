import { Button, Modal, Popconfirm } from 'antd'
import { useCrud } from '../hooks/useCrud'
import { InputForm } from './InputForm'

export const CrudActions = ({ payload, url, columns }) => {
  const {
    handleEditButton,
    handleDelete,
    onCancel,
    onFinish,
    toggleModal,
    form,
    visible,
  } = useCrud(url)

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
      <Button id='post-button' type='primary' onClick={toggleModal}>
        +
      </Button>
    </>
  )
}
