import { Input, InputNumber, Select } from 'antd'

export const FilterForm = ({
  value,
  options,
  onChange,
  searchQuery,
  setSearchQuery,
  limit,
  setLimit,
}) => {
  const { Option } = Select

  return (
    <div className='posts'>
      <Select value={value} onChange={onChange}>
        <Option disabled value=''>
          Sort
        </Option>
        {options.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
      <Input
        className='search'
        placeholder='Search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <InputNumber
        placeholder='Posts limit'
        value={limit}
        onChange={(value) => setLimit(value)}
      />
    </div>
  )
}
