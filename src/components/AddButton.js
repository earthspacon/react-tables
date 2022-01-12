import { Button, Modal } from 'antd'
import { useCrud } from '../hooks/useCrud'
import { InputForm } from './InputForm'

export const AddButtom = ({ url, columns }) => {
  const { onCancel, onFinish, toggleModal, visible, form } = useCrud(url)
  return (
    <>
      <Button id='post-button' type='primary' onClick={toggleModal}>
        +
      </Button>
      <Modal visible={visible} onCancel={onCancel} footer={false}>
        <InputForm onFinish={onFinish} form={form} columns={columns} />
      </Modal>
    </>
  )
}
