import axios from 'axios'

export const fetcher = (url, body, method = 'get') => {
  // Create instance
  let instance = axios.create({
    baseURL: import.meta.env.VITE_API,
  })

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = JSON.parse(sessionStorage.getItem('samen-auth'))?.token
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  return instance[method](url, body)
}
