import React from 'react'
import { Dropdown, Layout, theme } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const { Header, Content } = Layout
import logo from '../assets/logo.png'
import { useUser } from '../hooks/UseUser'

const LayoutComponent2 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const { userName } = useUser()
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
            localStorage.clear()
          }}
        >
          Chiqish
        </div>
      ),
    },
  ]

  return (
    <Layout>
      <Header className='header flex justify-between items-center w-full h-20'>
        <div className='flex items-center text-white gap-3'>
          <img className='w-24' src={logo} alt='logo' />
          <p className=' w-32 text-md font-bold leading-6'>SUD-EKSPERTIZA AXBOROT PORTALI</p>
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
        <Content className='min-h-screen'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent2
