import { useMutation, useQueryClient } from 'react-query'

import { mutation } from '../../lib'

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: 'create-post',
    mutationFn: async data => await mutation.create('api/posts', data),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })
}
