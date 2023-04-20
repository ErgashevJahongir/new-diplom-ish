import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import { newGetSingle } from '../api/axiosInstance'

const SingleNews = () => {
  const [newsData, setNewsData] = useState()
  const { newId } = useParams()

  useEffect(() => {
    newGetSingle(newId)
      .then((data) => {
        setNewsData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='pt-10 bg-white'>
      <div className='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative' style={{ height: '24em' }}>
        <div
          className='absolute left-0 bottom-0 w-full h-full z-10'
          style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}
        ></div>
        <img
          src={
            newsData?.imgUrl
              ? newsData.imgUrl
              : 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg'
          }
          className='absolute left-0 top-0 w-full h-full z-0 object-cover'
        />
        <div className='p-4 absolute bottom-0 left-0 z-20'>
          <h2 className='text-4xl font-semibold text-gray-100 leading-tight'>{newsData?.title}</h2>
          <div className='flex mt-3'>
            <div>
              <p className='font-semibold text-gray-200 text-sm'> Baxtiyor Ergashev </p>
              <p className='font-semibold text-gray-400 text-xs'>
                {' '}
                {newsData?.date && moment(newsData?.date).format('LL')}{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='px-4 lg:px-0 mt-12 text-gray- w-full max-w-screen-md mx-auto text-lg leading-relaxed'>
        {ReactHtmlParser(newsData?.body)}
      </div>
    </div>
  )
}

export default SingleNews
