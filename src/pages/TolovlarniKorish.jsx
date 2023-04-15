import { useState } from 'react'
import CustomTable from '../components/Table'
import { useQuery } from '@tanstack/react-query'
import { getTulovHaqida } from '../api/axiosInstance'
import { useUser } from '../hooks/UseUser'

const TolovlarniKorish = () => {
  const [pageData, setPageData] = useState({
    current: 1,
    pageSize: 10,
  })
  const { userName } = useUser()
  const { data, isLoading, refetch, isError } = useQuery(['exams', pageData], () => getTulovHaqida(userName.username))

  const columns = [
    {
      title: "To'lov miqdori",
      dataIndex: 'price',
      key: 'price',
      width: '29%',
      search: true,
      sorter: (a, b) => {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      },
    },
    {
      title: 'Qaror',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
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
        To'lovlar haqida ma'lumot
      </h2>
      <CustomTable
        tableData={data?.data?.map((item) => {
          return {
            id: item?.id,
            price: item?.price,
            date: item?.sudlanganlikHaqidaMalumot?.date,
            region: item?.sudlanganlikHaqidaMalumot?.region,
            title: item?.sudlanganlikHaqidaMalumot?.qarorlar?.title,
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

export default TolovlarniKorish
