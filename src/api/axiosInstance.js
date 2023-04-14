import axios from 'axios'

const REACT_APP_BASE_URL = 'https://diplom-ishi-production.up.railway.app/api'

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
})

export default axiosInstance

export const newsGetAll = async () => {
  const res = await axiosInstance.get('/api/news/all')
  return res.data
}

export const loginRequest = async (body) => {
  const res = await axiosInstance.post('/user/login', body)
  return res.data
}

export const registerRequest = async (body) => {
  const res = await axiosInstance.post('/user/save', body)
  return res.data
}
