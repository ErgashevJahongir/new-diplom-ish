import React from 'react'
import { Dropdown, Layout, Menu, Space, theme } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
const { Header, Content, Sider } = Layout
import logo from '../assets/logo.png'
import { useUser } from '../hooks/UseUser'

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
    label: "Sudlanganlik haqida ma'lumot",
  },
  {
    key: '/dashboard/payment',
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
          d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
        />
      </svg>
    ),
    label: "To'lovlarni ko'rish",
  },
  {
    key: '/dashboard/new-court-about',
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
          d='M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
        />
      </svg>
    ),
    label: "Yangi sud haqida ma'lumot",
  },
  {
    key: '/dashboard/messages',
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
          d='M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3'
        />
      </svg>
    ),
    label: "Xabarnomalarni ko'rish",
  },
]

const LayoutComponent = () => {
  const { setUserName, userName } = useUser()
  const navigate = useNavigate()
  const location = useLocation()
  const {
    token: { colorBgContainer },
  } = theme.useToken()

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

  const menuChange = (key) => {
    navigate(key.key)
  }

  return (
    <Layout className='relative'>
      <Header className='header flex justify-between items-center sticky top-0 h-20 z-10 w-full'>
        <div className='flex items-center text-white gap-3'>
          <img className='w-24' src={logo} alt='logo' />
          <p className=' w-32 text-md font-bold leading-6'>SUD-EKSPERTIZA AXBOROT PORTALI</p>
        </div>
        <div className='flex items-center justify-center gap-5'>
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
        </div>
      </Header>
      <Layout>
        <Sider
          width={300}
          className='h-screen left-0 top-0 bottom-0 overflow-auto'
          style={{ position: 'fixed', background: colorBgContainer, paddingTop: 80 }}
        >
          <Menu
            mode='inline'
            theme='dark'
            defaultSelectedKeys={location.pathname}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={menuChange}
            className='pt-3'
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', marginLeft: 300 }}>
          <Content className='m-0 mt-5 rounded-lg' style={{ background: colorBgContainer }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
