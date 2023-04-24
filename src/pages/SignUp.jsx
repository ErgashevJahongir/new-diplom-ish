import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { loginRequest, registerRequest } from '../api/axiosInstance'
import { notification } from 'antd'
import { useUser } from '../hooks/UseUser'
import logo from '../assets/logo.png'
import { useEffect } from 'react'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const { setUserName, userName } = useUser()

  const onSubmit = (data) => {
    registerRequest({ password: data.password, username: data.username, fullName: data.fullName })
      .then((qism) => {
        if (qism.success) {
          notification.success({
            message: "Ro'yxatdan muvofaqiyatli o'tdingiz",
          })
          loginRequest({ username: data.username, password: data.password })
            .then((son) => {
              son.success && sessionStorage.setItem('diplom-ish', JSON.stringify(son.data))
              son.success && setUserName(son.data)
              son.success && navigate('/dashboard')
            })
            .catch((error) => {
              console.error(error)
              navigate('/sign-in')
            })
        } else {
          notification.error({
            message: "Ro'yxatdan o'tishda xatolik",
            description: qism.message,
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    userName && navigate('/')
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 pt-12 md:pt-24 lg:pt-16'>
          <div className=' flex items-center justify-center'>
            <img className='w-32 mx-auto' src={logo} alt='logo' />
          </div>
          <div className='mt-10 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>Ro'yxatdan o'tish</h1>
            <div className='w-full flex-1 mt-8'>
              <div className='mx-auto max-w-xs'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${
                      errors.fullName ? 'border-red-500' : ''
                    }`}
                    type='text'
                    placeholder="Ismingizni to'liq kiriting"
                    {...register('fullName', { required: true })}
                  />
                  {errors.fullName && (
                    <span className={`${errors.fullName ? 'text-red-400' : ''}`}>Ismingizni to'liq kiritish shart</span>
                  )}
                  <input
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${
                      errors.username ? 'border-red-500' : ''
                    }`}
                    type='text'
                    placeholder='Username kiriting'
                    {...register('username', { required: true })}
                  />
                  {errors.username && (
                    <span className={`${errors.username ? 'text-red-400' : ''}`}>Username kiritish shart</span>
                  )}
                  <input
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    type='password'
                    placeholder='Parol kiriting'
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <span className={`${errors.password ? 'text-red-400' : ''}`}>Parol kiritish shart</span>
                  )}
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                    type='password'
                    placeholder='Parolni takrorlang'
                    {...register('passwordConifirm', { required: true })}
                  />
                  <button
                    type='submit'
                    disabled={watch('password') !== watch('passwordConifirm')}
                    className='mt-5 tracking-wide font-semibold bg-indigo-500 disabled:bg-indigo-300 disabled:hover:bg-indigo-400 disabled:cursor-not-allowed text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                  >
                    <span>Ro'yxatdan o'tish</span>
                  </button>
                  <p className='text-sm font-light text-gray-700 mt-4'>
                    Sizning akkauntingiz bormi?{' '}
                    <Link to='/sign-in' className='font-medium hover:underline text-indigo-500'>
                      Kirish
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div id='sign-up' className='m-12 xl:m-16 w-full'></div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
