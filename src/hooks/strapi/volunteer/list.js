import { useQuery } from 'react-query'

import { request } from '../../../lib'

export const useGetVolunteers = ({ enabled = true, page = 1, pageSize = 25 }) => {
  // return useQuery('posts', () => request({ ... }))
  return useQuery({
    queryKey: ['volunteers', page, pageSize],
    queryFn: () =>
      request({ url: 'api/volunteers', publicationState: 'preview', sort: ['createdAt:desc'], page, pageSize }),
    enabled,
  })
}
