import React from 'react'
import { Layout, Menu, theme } from 'antd'
import { Link, Outlet } from 'react-router-dom'
const { Header, Content, Sider } = Layout
import logo from '../assets/logo.png'

const items2 = [
  {
    key: '/dashboard',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
        />
      </svg>
    ),
    label: 'Dashboard',
  },
]

const LayoutComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className='relative'>
      <Header className='header flex justify-between items-center sticky top-0 h-20 z-10 w-full'>
        <div>
          <img className='w-24' src={logo} alt='logo' />
        </div>
        <div className='flex items-center justify-center gap-5'>
          {/* <Link
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
          </Link> */}
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
        <Sider
          width={300}
          className='h-screen left-0 top-0 bottom-0 overflow-auto'
          style={{ position: 'fixed', background: colorBgContainer, paddingTop: 85 }}
        >
          <Menu
            mode='inline'
            defaultSelectedKeys={['/dashboard']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', marginLeft: 300 }}>
          <Content className='min-h-screen p-5 m-0 mt-5 rounded-lg' style={{ background: colorBgContainer }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
