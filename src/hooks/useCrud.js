import { Form } from 'antd'
import { useState } from 'react'
import { dataAPI } from '../api/DataService'

export function useCrud(url) {
  const [visible, setVisible] = useState(false)
  const [row, setRow] = useState(null)
  const [form] = Form.useForm()

  const [addData] = dataAPI.useAddDataMutation()
  const [editData] = dataAPI.useEditDataMutation()
  const [deleteData] = dataAPI.useDeleteDataMutation()

  const toggleModal = () => setVisible(!visible)

  const handleDelete = async (id) => await deleteData({ url, id })

  const handleEditButton = (payload) => {
    form.setFieldsValue(payload)
    setRow(payload)
    toggleModal()
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
    toggleModal,
    onCancel,
    onFinish,
    form,
    visible,
  }
}
