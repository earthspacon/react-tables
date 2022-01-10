import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

export const InputForm = ({ form, onFinish, columns }) => {
  return (
    <Form form={form} {...layout} onFinish={onFinish}>
      {columns.map((col) => {
        return (
          <Form.Item name={col.dataIndex} label={col.title} key={col.dataIndex}>
            <Input />
          </Form.Item>
        )
      })}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
