import { useQuery } from 'react-query'

import { request } from '../../lib'

// For general use cases
// Instead of predefined queries, like `useGetPosts`, `useCreateProject` etc
// We can fetch from any api url, with custom options
// example:
// const { data } = useRequest('projects', 'api/projects', { sort: ["name:desc"] })
export const useRequest = (key, url, args) => useQuery(key, () => request({ url, ...args }))
