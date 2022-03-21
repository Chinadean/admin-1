import { useQuery } from 'react-query'

import { request } from '../../../lib'

export const useGetPosts = ({ enabled = true, page = 1, pageSize = 25 }) => {
  // return useQuery('posts', () => request({ ... }))
  return useQuery({
    queryKey: ['posts', page, pageSize],
    queryFn: () =>
      request({
        url: 'api/posts',
        publicationState: 'preview',
        // TODO Test for performance
        populate: ['image', 'translator', 'localizations', 'localizations.image', 'localizations.translator'],
        sort: ['createdAt:desc'],
        page,
        pageSize,
      }),
    enabled,
  })
}
