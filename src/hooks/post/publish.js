import { useMutation, useQueryClient } from 'react-query'

import { mutation } from '../../lib'

export const usePublishPostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: 'publish-post',
    mutationFn: async id => mutation.edit('api/posts', id, { data: { publishedAt: new Date() } }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })
}
