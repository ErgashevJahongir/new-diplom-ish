import { useEffect, useState, useRef } from 'react'
import { Table, Button, Input, Space } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'

const CustomTable = (props) => {
  const { getData, tableData, columns, current, pageSize, setCurrent, setPageSize, loading, pageSizeOptions } = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([[], []])
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)

  const onChange = (pageNumber, page) => {
    setPageSize(page)
    setCurrent(pageNumber)
    getData(pageNumber - 1, page)
  }

  useEffect(() => {
    getData(current - 1, pageSize)
  }, [])

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Qidirish ${title}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90,
            }}
          >
            Qidirish
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90,
            }}
          >
            Tozalash
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false,
              })
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const onSelectChange = (selectedRowKeys, record) => {
    setSelectedRowKeys([[...selectedRowKeys], [...record]])
  }

  const handleSelect = (record) => {
    if (!selectedRowKeys[0].includes(record.id)) {
      setSelectedRowKeys((prev) => [
        [...prev[0], record.id],
        [...prev[1], record],
      ])
    } else {
      setSelectedRowKeys((prev) => {
        const arr = prev[0].filter((key) => key !== record.id)
        const arr1 = prev[1].filter((key) => key.id !== record.id)
        return [[...arr], [...arr1]]
      })
    }
  }

  const rowSelection = {
    selectedRowKeys: selectedRowKeys[0],
    onChange: onSelectChange,
  }

  const arr = columns?.map((item) =>
    item.search === true ? { ...item, ...getColumnSearchProps(item.dataIndex, item.title) } : { ...item },
  )
  arr.map((item) => delete item.search)

  const dataTableColumns = [...arr]

  return (
    <>
      <Table
        rowSelection={rowSelection}
        loading={loading}
        columns={dataTableColumns}
        dataSource={tableData}
        bordered
        rowKey={'id'}
        scroll={{ x: 900 }}
        onRow={(record) => ({
          onClick: () => {
            handleSelect(record)
          },
        })}
        pagination={{
          showSizeChanger: true,
          pageSize: pageSize,
          current: current,
          pageSizeOptions: pageSizeOptions,
          onChange: onChange,
        }}
      />
    </>
  )
}

export default CustomTable
