import { Input, Select } from 'antd'

export const FilterForm = ({ filter, setFilter }) => {
  const { Option } = Select

  const options = [
    { value: 'title', label: 'Title' },
    { value: 'body', label: 'Body' },
  ]

  return (
    <div className='posts'>
      <Select
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
      >
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
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
    </div>
  )
}
