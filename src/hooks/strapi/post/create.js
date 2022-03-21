import { useMutation, useQueryClient } from 'react-query'

import { mutation } from '../../../lib'

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: 'create-post',
    mutationFn: data => mutation.post('api/posts', data),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })
}
