import { Modal } from 'antd'
import { useModal } from '../hooks/Context/useModal'
import { useCrud } from '../hooks/useCrud'
import { InputForm } from './InputForm'

export const ModalInput = () => {
  const { onCancel, onFinish } = useCrud()
  const { visible } = useModal()

  return (
    <Modal visible={visible} onCancel={onCancel} footer={false} mask={false}>
      <InputForm onFinish={onFinish} />
    </Modal>
  )
}
