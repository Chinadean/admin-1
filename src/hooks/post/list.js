import { useQuery } from 'react-query'

import { request } from '../../lib'

export const useGetPosts = () => {
  return useQuery({
    queryKey: 'posts',
    queryFn: async () => request({ url: 'api/posts', publicationState: 'preview', sort: ['createdAt:desc'] }),
  })
}
