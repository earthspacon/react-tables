import { Form } from 'antd'
import { useState, useCallback } from 'react'
import * as api from '../api/api'
import { v4 as uuidv4 } from 'uuid'
import { useLocation } from 'react-router-dom'

export function useCrud() {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const [row, setRow] = useState(null)
  const [form] = Form.useForm()

  let { pathname } = useLocation()

  const getData = useCallback(() => {
    api
      .getData(pathname)
      .then((res) =>
        setData(res.data.map((item) => ({ ...item, key: item.id })))
      )
  }, [pathname])

  const toggleModal = () => {
    setVisible(!visible)
  }

  const handleDelete = async (id) => {
    await api.deleteData(pathname, id)
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
      await api.addData(pathname, { ...values, id: uuidv4() })
      onCancel()
    } else {
      await api.editData(pathname, row.id, values)
      onCancel()
    }
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
