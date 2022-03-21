import axios from 'axios'

const token = JSON.parse(sessionStorage.getItem('auth'))?.token

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  ...(token && {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
})
