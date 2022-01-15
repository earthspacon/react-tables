import { useState } from 'react'
import { dataAPI } from '../services/DataService'
import { useModal } from './Context/useModal'
import { usePageParams } from './Context/usePageParams'

export function useCrud() {
  const [row, setRow] = useState(null)
  const [addData] = dataAPI.useAddDataMutation()
  const [editData] = dataAPI.useEditDataMutation()
  const [deleteData] = dataAPI.useDeleteDataMutation()
  const { toggleModal } = useModal()
  const { url, form } = usePageParams()

  const handleDelete = async (id) => await deleteData({ url, id })

  const handleEditButton = (payload) => {
    toggleModal()
    setRow(payload)
    form.setFieldsValue(payload)
  }
  console.log(row)

  const onCancel = () => {
    toggleModal()
    form.resetFields()
  }

  const onFinish = async (payload) => {
    !row
      ? await addData({ url, payload })
      : await editData({ url, id: row.id, payload })
    onCancel()
  }

  return {
    handleEditButton,
    handleDelete,
    onCancel,
    onFinish,
  }
}
