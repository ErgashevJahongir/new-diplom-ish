import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { loginRequest } from '../api/axiosInstance'
import { notification } from 'antd'
import { useUser } from '../hooks/UseUser'
import logo from '../assets/logo.png'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const { setUserName } = useUser()

  const onSubmit = (data) => {
    loginRequest(data).then((qism) => {
      if (qism.success) {
        sessionStorage.setItem('diplom-ish', JSON.stringify(qism.data))
        setUserName(qism.data)
        navigate('/dashboard')
      } else {
        notification.error({
          message: 'Kirishda xatolik',
          description: qism.message,
        })
      }
    })
  }

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 pt-28 md:pt-0'>
        <div className='lg:w-1/2 xl:w-5/12 p-3 sm:p-12 md:pt-24'>
          <div>
            <img className='w-32 mx-auto' src={logo} alt='logo' />
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>Kirish</h1>
            <div className='w-full flex-1 mt-8'>
              <div className='mx-auto max-w-xs'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${
                      errors.username ? 'border-red-500' : ''
                    }`}
                    type='text'
                    {...register('username', { required: true })}
                    placeholder='Usernameingizni kiriting'
                  />
                  {errors.username && (
                    <span className={`${errors.username ? 'text-red-400' : ''}`}>
                      Usernameingizni kiritishingiz shart
                    </span>
                  )}
                  <input
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    type='password'
                    {...register('password', { required: true })}
                    placeholder='Parolingizni kiriting'
                  />
                  {errors.password && (
                    <span className={`${errors.password ? 'text-red-400' : ''}`}>Parolingizni kiritishingiz shart</span>
                  )}
                  <button className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                    <span>Kirish</span>
                  </button>
                  <p className='text-sm font-light text-gray-700 mt-4'>
                    Hali akkauntingiz yo'qmi?{' '}
                    <Link to='/sign-up' className='font-medium hover:underline text-indigo-500'>
                      Ro'yxatdan o'tish
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div id='sign-in' className='m-12 xl:m-16 w-full'></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
