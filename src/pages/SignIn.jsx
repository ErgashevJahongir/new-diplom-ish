import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div>
            <img
              src='https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png'
              className='w-32 mx-auto'
            />
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>Kirish</h1>
            <div className='w-full flex-1 mt-8'>
              <div className='mx-auto max-w-xs'>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Usernameingizni kiriting'
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Parolingizni kiriting'
                />
                <button className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                  <span>Kirish</span>
                </button>
                <p className='text-sm font-light text-gray-700 mt-4'>
                  Hali akkauntingiz yo'qmi?{' '}
                  <Link to='/sign-up' className='font-medium hover:underline text-indigo-500'>
                    Ro'yxatdan o'tish
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url('src/assets/Login.svg')]"></div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
