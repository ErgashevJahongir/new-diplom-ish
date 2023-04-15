import { Fragment, useEffect } from 'react'
import { useUser } from '../hooks/UseUser'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getNewMessage, postNewMessage } from '../api/axiosInstance'
import moment from 'moment/moment'
import { Avatar } from 'antd'
import { useForm } from 'react-hook-form'

const XabarnomalarniKorish = () => {
  const { userName } = useUser()
  const { data, refetch } = useQuery(['exams'], () => getNewMessage(userName.username))
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    refetch()
  }, [])

  const createMutation = useMutation((body) => postNewMessage(body), {
    onSuccess: (data) => {
      data?.code === 200 && message.success("Yo'nalish muvaffaqiyatli qo'shildi")
      refetch()
      reset()
    },
    onError: (error) => {
      message.error("Xabarni yuborishda muammo bo'ldi")
      console.error(error)
    },
  })

  const handlePost = (data) => {
    createMutation.mutate({ ...data, userName: userName.username })
  }

  return (
    <div className='flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg relative' style={{ height: 590 }}>
      <div className='flex flex-col flex-grow h-0 p-4 overflow-auto'>
        {data?.data?.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                <div>
                  <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                    <p className='text-sm'>{item?.body}</p>
                  </div>
                  <span className='text-xs text-gray-500 leading-none'>{moment(item.createdAt).format('lll')}</span>
                </div>
                <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'>
                  <Avatar size='large'>{userName.username?.charAt(0).toUpperCase()}</Avatar>
                </div>
              </div>
              {item.answer && (
                <div className='flex w-full mt-2 space-x-3 max-w-xs'>
                  <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'>
                    <Avatar size='large'>A</Avatar>
                  </div>
                  <div>
                    <div className='bg-gray-300 p-3 rounded-r-lg rounded-bl-lg'>
                      <p className='text-sm'>{item?.answer}</p>
                    </div>
                    <span className='text-xs text-gray-500 leading-none'>{moment(item.updatedAt).format('lll')}</span>
                  </div>
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
      <form onSubmit={handleSubmit(handlePost)} className='bg-gray-300 p-4 rounded-b-lg flex items-center'>
        <input
          className='flex items-center h-10 w-full rounded px-3 text-sm'
          type='text'
          {...register('body', { required: true })}
          placeholder='Xabaringizni yozing…'
        />
        <div className='ml-2'>
          <button
            type='submit'
            className='flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-lg text-white px-4 py-2 flex-shrink-0'
          >
            <span>Send</span>
            <span className='ml-2'>
              <svg
                className='w-4 h-4 transform rotate-45 -mt-px'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default XabarnomalarniKorish
