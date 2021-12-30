import { Form } from 'antd'
import { useState, useCallback } from 'react'
import * as api from '../api/api'

export function useCrud(url) {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const [row, setRow] = useState(null)
  const [form] = Form.useForm()

  const getData = useCallback(() => {
    api
      .getData(url)
      .then((res) =>
        setData(res.data.map((item) => ({ ...item, key: item.id })))
      )
  }, [url])

  const toggleModal = () => {
    setVisible(!visible)
  }

  const handleDelete = async (id) => {
    await api.deleteData(url, id)
    getData()
  }

  const handleEdit = (record) => {
    form.setFieldsValue(record)
    setRow(record)
    toggleModal()
  }

  const onCancel = () => {
    getData()
    toggleModal()
    form.resetFields()
    setRow(null)
  }

  const onFinish = async (values) => {
    if (!row) {
      await api.addData(url, { ...values, id: Date.now() })
    } else {
      await api.editData(url, row.id, values)
    }
    onCancel()
  }

  return {
    getData,
    toggleModal,
    handleDelete,
    handleEdit,
    onCancel,
    onFinish,
    data,
    form,
    visible,
  }
}
