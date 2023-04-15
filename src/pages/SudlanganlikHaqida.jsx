import { useState } from 'react'
import CustomTable from '../components/Table'
import { useQuery } from '@tanstack/react-query'
import { getSudlanganlikHaqida } from '../api/axiosInstance'
import { useUser } from '../hooks/UseUser'

const SudlanganlikHaqida = () => {
  const [pageData, setPageData] = useState({
    current: 1,
    pageSize: 10,
  })
  const { userName } = useUser()
  const { data, isLoading, refetch, isError } = useQuery(['exams', pageData], () =>
    getSudlanganlikHaqida(userName.username),
  )

  const columns = [
    {
      title: 'Qaror',
      dataIndex: 'title',
      key: 'title',
      width: '20%',
      search: true,
      sorter: (a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      },
    },
    {
      title: 'Qaror matni',
      dataIndex: 'body',
      key: 'body',
      width: '39%',
      search: true,
    },
    {
      title: 'Manzil',
      dataIndex: 'region',
      key: 'region',
      width: '20%',
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
      title: 'Vaqt',
      dataIndex: 'date',
      key: 'date',
      width: '20%',
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
  ]

  return (
    <div className='p-5 min-h-screen'>
      <h2 className='text-lg font-bold leading-tight text-black sm:text-xl lg:text-2xl mb-5'>
        Sudlanganlik haqida ma'lumot
      </h2>
      <CustomTable
        tableData={data?.data.map((item) => {
          return {
            id: item?.id,
            date: item?.date,
            region: item?.region,
            title: item?.qarorlar?.title,
            body: item?.qarorlar?.body,
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

export default SudlanganlikHaqida
