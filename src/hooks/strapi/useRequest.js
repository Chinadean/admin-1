import { useQuery } from 'react-query'

import { request } from '../../lib'

// For general use cases
// Instead of predefined hooks, like `useGetPosts`, `useCreateProject` etc
// we can fetch data from any api url with some custom options
// example:
// const { data } = useRequest('projects', 'api/projects', { sort: ["name:desc"] })
export const useRequest = (key, url, args) => useQuery(key, () => request({ url, ...args }))
