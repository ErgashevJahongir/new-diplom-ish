import { useState } from 'react'
import CustomTable from '../components/Table'
import { useQuery } from '@tanstack/react-query'
import { getNewSudHaqida } from '../api/axiosInstance'
import { useUser } from '../hooks/UseUser'

const YangiSudHaqida = () => {
  const [pageData, setPageData] = useState({
    current: 1,
    pageSize: 10,
  })
  const { userName } = useUser()
  const { data, isLoading, refetch, isError } = useQuery(['exams', pageData], () => getNewSudHaqida(userName.username))

  const columns = [
    {
      title: 'Yangi sud sanasi',
      dataIndex: 'date',
      key: 'date',
      width: '25%',
      search: true,
      sorter: (a, b) => {
        if (a.date < b.date) {
          return -1
        }
        if (a.date > b.date) {
          return 1
        }
        return 0
      },
    },
    {
      title: 'Sud faolligi',
      dataIndex: 'dateActive',
      key: 'dateActive',
      width: '15%',
      search: false,
      sorter: (a, b) => {
        if (a.dateActive < b.dateActive) {
          return -1
        }
        if (a.dateActive > b.dateActive) {
          return 1
        }
        return 0
      },
      render: (record) => {
        return record ? "O'tgan" : 'Faol'
      },
    },
    {
      title: 'Manzil',
      dataIndex: 'region',
      key: 'region',
      width: '29%',
      search: true,
      sorter: (a, b) => {
        if (a.region < b.region) {
          return -1
        }
        if (a.region > b.region) {
          return 1
        }
        return 0
      },
    },
    {
      title: 'Xabar',
      dataIndex: 'body',
      key: 'body',
      width: '30%',
      search: true,
      sorter: (a, b) => {
        if (a.body < b.body) {
          return -1
        }
        if (a.body > b.body) {
          return 1
        }
        return 0
      },
    },
  ]

  return (
    <div className='p-5 min-h-screen'>
      <h2 className='text-lg font-bold leading-tight text-black sm:text-xl lg:text-2xl mb-5'>
        Yangi sud sanasi haqida
      </h2>
      <CustomTable
        tableData={data?.data?.map((item, index) => {
          return {
            id: index,
            region: item?.region,
            body: item?.body,
            date: item?.date,
            dateActive: item?.dateActive,
          }
        })}
        getData={refetch}
        columns={columns}
        loading={isLoading}
        pageSizeOptions={[10, 20]}
        current={pageData.current}
        pageSize={pageData.pageSize}
        setCurrent={(newProp) => setPageData((prev) => ({ ...prev, current: newProp }))}
        setPageSize={(newProp) => setPageData((prev) => ({ ...prev, pageSize: newProp }))}
      />
    </div>
  )
}

export default YangiSudHaqida
