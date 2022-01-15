import { Button } from 'antd'
import { useModal } from '../hooks/Context/useModal'
import { ModalInput } from './ModalInput'

export const OpenModal = () => {
  const { toggleModal } = useModal()

  return (
    <>
      <Button id='post-button' type='primary' onClick={toggleModal}>
        +
      </Button>
      <ModalInput />
    </>
  )
}
