import { Button, Popconfirm, Modal } from 'antd'
import { useCrud } from '../hooks/useCrud'
import { InputForm } from './InputForm'

export const CrudActions = ({ payload, data, params }) => {
  const {
    handleEditButton,
    handleDelete,
    onCancel,
    onFinish,
    toggleModal,
    visible,
    form,
  } = useCrud(params.url)

  return (
    <>
      <Button id='post-button' type='primary' onClick={toggleModal}>
        +
      </Button>
      <Modal visible={visible} onCancel={onCancel} footer={false} mask={false}>
        <InputForm onFinish={onFinish} form={form} columns={params.columns} />
      </Modal>

      {data?.length ? (
        <div>
          <Button onClick={() => handleEditButton(payload)}>Edit</Button>
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => handleDelete(payload.id)}
          >
            <Button>Delete</Button>
          </Popconfirm>
        </div>
      ) : null}
    </>
  )
}
