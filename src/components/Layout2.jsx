import React from 'react'
import { Dropdown, Layout } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const { Header, Content } = Layout
import logo from '../assets/logo.png'
import { useUser } from '../hooks/UseUser'

const LayoutComponent2 = () => {
  const { userName, setUserName } = useUser()
  const navigate = useNavigate()

  const items = [
    {
      key: '3',
      label: (
        <div className='cursor-pointer' onClick={() => navigate('/dashboard')}>
          Dashboard
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      danger: true,
      label: (
        <div
          onClick={() => {
            navigate('/')
            setUserName(null)
            sessionStorage.clear()
          }}
        >
          Chiqish
        </div>
      ),
    },
  ]

  return (
    <Layout className=' bg-white'>
      <Header className='header flex justify-between items-center w-full h-20'>
        <div>
          <Link to='/' className='flex items-center text-white gap-3'>
            <img className='w-24' src={logo} alt='logo' />
            <p className=' w-32 text-md font-bold leading-6'>SUD-EKSPERTIZA AXBOROT PORTALI</p>
          </Link>
        </div>
        <div className='flex items-center justify-center gap-5'>
          <a
            href='https://cabinet.sud.uz/sign-in'
            rel='noreferrer'
            target='_blank'
            className='hidden sm:flex items-center justify-center gap-1 font-medium text-sm text-white hover:text-gray-400'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
              />
            </svg>

            <p>Virtual qabulxona</p>
          </a>
          {userName ? (
            <Dropdown
              trigger={['click', 'hover']}
              menu={{
                items,
              }}
              placement='bottom'
              arrow={{
                pointAtCenter: true,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <div className=' text-white flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 20'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                  </svg>

                  <p className='flex items-center gap-2'>
                    <span>{userName?.fullName}</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      shapeRendering='geometricPrecision'
                      textRendering='geometricPrecision'
                      imageRendering='optimizeQuality'
                      fill='#fff'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      viewBox='0 0 512 336.36'
                      className='w-2 h-2 text-white'
                    >
                      <path
                        fillRule='nonzero'
                        d='M42.47.01 469.5 0C492.96 0 512 19.04 512 42.5c0 11.07-4.23 21.15-11.17 28.72L294.18 320.97c-14.93 18.06-41.7 20.58-59.76 5.65-1.8-1.49-3.46-3.12-4.97-4.83L10.43 70.39C-4.97 52.71-3.1 25.86 14.58 10.47 22.63 3.46 32.57.02 42.47.01z'
                      />
                    </svg>
                  </p>
                </div>
              </a>
            </Dropdown>
          ) : (
            <Link
              to='/sign-in'
              className='flex items-center justify-center gap-1 text-sm pr-6 pl-5 py-2 rounded-lg border-blue-500 hover:bg-blue-500 font-semibold border'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-white'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
              <p className='text-white'>Kirish</p>
            </Link>
          )}
        </div>
      </Header>
      <Layout>
        <Content className='min-h-screen bg-white'>
          <Outlet />
        </Content>
      </Layout>
      <footer aria-label='Site Footer' id='contact' className='bg-white'>
        <div className='mx-auto container px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-4'>
            <div>
              <div className='flex justify-center text-teal-600 sm:justify-start'>
                <h3 className=' font-bold text-lg'>SUD-EKSPERTIZA AXBOROT PORTALI</h3>
              </div>

              <p className='mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left'>
                Ўзбекистон Республикаси, Тошкент ш., А.Қодирий кўч., 1. 100186
              </p>

              <ul className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8'>
                <li>
                  <a
                    href='https://www.facebook.com/oliysud'
                    rel='noreferrer'
                    target='_blank'
                    className='text-teal-700 transition hover:text-teal-700/75'
                  >
                    <span className='sr-only'>Facebook</span>
                    <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.instagram.com/odilsud.uz/'
                    rel='noreferrer'
                    target='_blank'
                    className='text-teal-700 transition hover:text-teal-700/75'
                  >
                    <span className='sr-only'>Instagram</span>
                    <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path
                        fillRule='evenodd'
                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href='https://t.me/oliysuduz'
                    rel='noreferrer'
                    target='_blank'
                    className='text-teal-700 transition hover:text-teal-700/75'
                  >
                    <span className='sr-only'>Telegram</span>
                    <svg
                      className='h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      version='1.1'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: '1.41421',
                      }}
                    >
                      <path
                        id='telegram-1'
                        d='M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-3'>
              <div className='col-span-3 bg-gray-300 rounded-lg overflow-hidden pt-28 px-5 pb-3 flex items-end justify-start relative'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1507.2189539559345!2d69.26626460983319!3d41.322553175607354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b739b249a77%3A0x23e71bd4c6bb4f2c!2sVerkhovnyy%20Sud%20Respubliki%20Uzbekistan!5e0!3m2!1suz!2s!4v1681815296542!5m2!1suz!2s'
                  width='100%'
                  height='100%'
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  style={{}}
                  className='absolute inset-0'
                ></iframe>
                <div className='bg-white relative flex flex-wrap py-3 rounded shadow-md w-full'>
                  <div className='lg:w-1/2 px-6'>
                    <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>Manzil</h2>
                    <a href='https://goo.gl/maps/i7Zv8H8c4NmHZMNU7' className='mt-1'>
                      Ўзбекистон Республикаси, Тошкент ш., А.Қодирий кўч., 1. 100186.
                    </a>
                  </div>
                  <div className='w-full lg:w-1/2 px-6 mt-4 lg:mt-0 flex justify-between items-center lg:flex-col lg:items-start'>
                    <div>
                      <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                        Elektron pochta manzil
                      </h2>
                      <a href='mailto:info@supcourt.uz' className='text-blue-500 leading-relaxed'>
                        info@supcourt.uz
                      </a>
                    </div>
                    <div>
                      <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                        Fuqarolar qabulxonasi
                      </h2>
                      <a href='tel:(71) 239-02-74' className='leading-relaxed'>
                        (71) 239-02-74
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-1 text-center sm:text-left'>
                <p className='text-lg font-medium text-gray-900'>Foydali havolalar</p>

                <nav aria-label='Footer Helpful Nav' className='mt-8'>
                  <ul className='space-y-4 text-sm'>
                    <li>
                      <a className='text-gray-700 transition hover:text-gray-700/75' href='/'>
                        Bosh sahifa
                      </a>
                    </li>

                    <li>
                      <a className='text-gray-700 transition hover:text-gray-700/75' href='https://sud.uz/  '>
                        Oliy sud sayti
                      </a>
                    </li>

                    <li>
                      <a className='text-gray-700 transition group-hover:text-gray-700/75' href='/#contact'>
                        Aloqa
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className='mt-12 border-t border-gray-100 pt-6'>
            <div className='text-center sm:flex sm:justify-between sm:text-left'>
              <p className='text-sm text-gray-500'>
                <span className='block sm:inline'>Developed by</span>

                <a
                  className='inline-block ml-2 text-teal-600 underline transition hover:text-teal-600/75'
                  href='https://t.me/ergashevbaxtiyor0705'
                >
                  Bakhtiyor
                </a>
              </p>

              <p className='mt-4 text-sm text-gray-500 sm:order-first sm:mt-0'>
                &copy; 2023 SUD-EKSPERTIZA AXBOROT PORTALI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default LayoutComponent2
