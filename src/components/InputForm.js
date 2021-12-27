import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
/* eslint-enable no-template-curly-in-string */
const InputForm = ({ form, onFinish, column }) => {
  return (
    <Form
      form={form}
      {...layout}
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {column.map((col) => {
        return (
          <Form.Item name={col.dataIndex} label={col.title}>
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
export default InputForm
