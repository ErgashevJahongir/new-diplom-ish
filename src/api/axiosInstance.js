import axios from 'axios'

const REACT_APP_BASE_URL = 'https://diplom-ishi-production.up.railway.app/api'

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
})

export default axiosInstance

export const newsGetAll = async () => {
  const res = await axiosInstance.get('/news/all')
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

export const getSudlanganlikHaqida = async (userName) => {
  const res = await axiosInstance.get(`/sudlanganlikAbout/${userName}`)
  return res.data
}

export const getTulovHaqida = async (userName) => {
  const res = await axiosInstance.get(`/tolov/${userName}`)
  return res.data
}

export const getNewSudHaqida = async (userName) => {
  const res = await axiosInstance.get(`/sudDate/${userName}`)
  return res.data
}

export const getNewMessage = async (userName) => {
  const res = await axiosInstance.get(`/xabarnoma/${userName}`)
  return res.data
}

export const postNewMessage = async (data) => {
  const res = await axiosInstance.post('/xabarnoma/save', data)
  return res.data
}
