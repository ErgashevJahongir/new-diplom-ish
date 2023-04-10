import React from 'react'
import { Layout, theme } from 'antd'
import { Link, Outlet } from 'react-router-dom'
const { Header, Content } = Layout
import logo from '../assets/logo.png'

const LayoutComponent2 = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Header className='header flex justify-between items-center w-full h-20'>
        <div>
          <img className='w-24' src={logo} alt='logo' />
        </div>
        <div className='flex items-center justify-center gap-5'>
          <Link
            to=''
            className='flex items-center justify-center gap-1 font-medium text-sm text-white hover:text-gray-400'
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
          </Link>
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
