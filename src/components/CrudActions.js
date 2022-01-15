import { Button, Popconfirm } from 'antd'
import { useCrud } from '../hooks/useCrud'
import { ModalInput } from './ModalInput'

export const CrudActions = ({ payload }) => {
  const { handleEditButton, handleDelete } = useCrud()

  return (
    <div>
      <Button onClick={() => handleEditButton(payload)}>Edit</Button>
      <ModalInput />
      <Popconfirm
        title='Sure to delete?'
        onConfirm={() => handleDelete(payload.id)}
      >
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  )
}
