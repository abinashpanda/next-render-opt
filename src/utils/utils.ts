import axios from 'axios'

export const apiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://nextjs-render-opt',
})
