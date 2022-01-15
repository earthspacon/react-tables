import { useState } from 'react'
import { dataAPI } from '../services/DataService'
import { Form } from 'antd'

export function useCrud(url) {
  const [row, setRow] = useState(null)
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const [addData] = dataAPI.useAddDataMutation()
  const [editData] = dataAPI.useEditDataMutation()
  const [deleteData] = dataAPI.useDeleteDataMutation()

  const toggleModal = () => setVisible(!visible)

  const handleDelete = async (id) => await deleteData({ url, id })

  const handleEditButton = (payload) => {
    toggleModal()
    setRow(payload)
    form.setFieldsValue(payload)
  }

  const onCancel = () => {
    toggleModal()
    form.resetFields()
    setRow(null)
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
    toggleModal,
    visible,
    form,
  }
}
