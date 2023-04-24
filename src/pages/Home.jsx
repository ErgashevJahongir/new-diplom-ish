import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import mygov from '../assets/my-gov.png'
import hukumat from '../assets/hukumat.png'
import ochiq from '../assets/ochiq.png'
import inson from '../assets/inson.png'
import oliyMajlis from '../assets/oliyMajlis.png'
import prezident from '../assets/prezident.png'
import senat from '../assets/senat.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { newsGetAll } from '../api/axiosInstance'
import { message } from 'antd'
import moment from 'moment/moment'
import { Link, useNavigate } from 'react-router-dom'

const link = [
  {
    id: 1,
    name: "O'zbekiston Respublikasi Prezidenti huzuridagi Davlat boshqaruvi akademiyasi",
    link: 'www.dba.uz',
    image: hukumat,
  },
  {
    id: 2,
    name: "O'zbekiston Respublikasi ochiq ma'lumotlar portali",
    link: 'www.data.gov.uz',
    image: ochiq,
  },
  {
    id: 3,
    name: 'Inson huquqlari bo‘yicha O‘zbekiston Respublikasi Milliy markazi',
    link: 'www.insonhuquqlari.uz',
    image: inson,
  },
  {
    id: 4,
    name: 'Yagona interaktiv davlat xizmatlari portali',
    link: 'www.my.gov.uz',
    image: mygov,
  },
  {
    id: 5,
    name: "O'zbekiston Respublikasi Oliy Majlisining Inson huquqlari bo'yicha vakili",
    link: 'www.ombudsman.uz',
    image: oliyMajlis,
  },
  {
    id: 6,
    name: "O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti",
    link: 'www.president.uz',
    image: prezident,
  },
  {
    id: 7,
    name: 'Oʼzbekiston Respublikasi Oliy Majlisi Senati',
    link: 'www.senat.uz',
    image: senat,
  },
  {
    id: 8,
    name: "O'zbekiston Respublikasi hukumat portali",
    link: 'www.gov.uz',
    image: hukumat,
  },
]

const Home = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const [messageApi, contextHolder] = message.useMessage()
  const [news, setNews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    newsGetAll()
      .then((data) => {
        setNews(data)
      })
      .catch((error) => {
        console.error(error)
        messageApi.open({
          type: 'error',
          content: "Yangiliklarni yuklashda muammo bo'ldi",
        })
      })
  }, [])

  const navigateLogin = () => {
    navigate('/sign-in')
  }

  return (
    <div>
      {contextHolder}
      <section id='hero' className='w-full bg-center bg-cover h-screen'>
        <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
          <div className='text-center'>
            <h1 className='text-3xl px-5 md:px-20 font-semibold text-white lg:text-4xl'>
              Axoliga sud-ekspertlik faoliyatiga doir ma'lumotlarni yetkazishga qaratilgan sud-ekspertiza axborot
              portaliga xush kelibsz !
            </h1>
            <button
              onClick={navigateLogin}
              className='px-10 py-3 mx-5 mt-4 text-lg font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'
            >
              Sahifangizga kiring
            </button>
          </div>
        </div>
      </section>
      {news[0] && (
        <section className='container m-auto py-10 sm:py-16 lg:py-24 px-3'>
          <div className='mx-auto'>
            <div className='flex items-end justify-between'>
              <div className='flex-1 text-center lg:text-left'>
                <h2 className='text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl'>Yangiliklar</h2>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:max-w-full'>
              {news?.map((item) => {
                return (
                  <div key={item?.id} className='overflow-hidden bg-white rounded shadow'>
                    <div className='p-5'>
                      <div className='relative'>
                        <a href='#' title='' className='block aspect-w-4 aspect-h-3'>
                          <img
                            className='object-cover w-full h-full'
                            src={
                              item?.imgUrl
                                ? item.imgUrl
                                : 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg'
                            }
                            alt={item?.title}
                          />
                        </a>
                      </div>
                      <span className='block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase'>
                        {moment(item?.date).format('LL')}
                      </span>
                      <h3 className='mt-5 text-2xl font-semibold'>
                        <a href='#' title='' className='text-black'>
                          {item.title}
                        </a>
                      </h3>
                      <Link
                        to={`/new/${item.id}`}
                        title=''
                        className='inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600'
                      >
                        Ko'proq ma'lumot
                        <svg
                          className='w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}
      <section className='container m-auto py-10 sm:py-16 lg:py-24 px-3'>
        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1040: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          className='mySwiper flex-col-reverse'
          style={{ display: 'flex' }}
          wrapperclassname='justify-stretch'
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
        >
          <div className='flex items-end justify-between mb-10 w-full  '>
            <div className='flex-1 lg:text-left'>
              <h2 className='text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl'>Foydali havolalar</h2>
            </div>
            <div className='flex items-center space-x-3'>
              <button
                type='button'
                ref={navigationPrevRef}
                className='flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
                </svg>
              </button>

              <button
                type='button'
                ref={navigationNextRef}
                className='flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>
          </div>
          {link.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className='bg-white border text-center border-gray-200 rounded-lg self-stretch shadow p-6 flex flex-col'
                style={{ minHeight: 330, maxHeight: 331 }}
              >
                <a
                  href={`http://${item.link}`}
                  rel='noopener noreferrer'
                  className='text-center w-24 h-24 block m-auto'
                >
                  <img className='w-24 h-24 m-0' src={item.image} alt={item.name} />
                </a>
                <div className='pt-6'>
                  <a href={`http://${item.link}`} rel='noopener noreferrer'>
                    <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-900'>{item.name}</h5>
                  </a>
                  <a
                    href={`http://${item.link}`}
                    rel='noopener noreferrer'
                    className='inline-flex items-center mt-10 text-md font-medium text-center hover:underline text-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300'
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default Home
