import { Form } from 'antd'
import { createContext, useContext, useMemo, useState } from 'react'

export const PageParamsContext = createContext({})

export const usePageParamsProvider = () => {
  const [params, setParams] = useState({ url: '', columns: [] })
  const [form] = Form.useForm()

  const pageValue = useMemo(
    () => ({ ...params, setParams, form }),
    [params, form]
  )

  return pageValue
}

export const usePageParams = () => useContext(PageParamsContext)
