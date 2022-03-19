import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { mutation } from '../../lib'
import { setCredentials } from '../../store'

export const useLoginMutation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  return useMutation({
    mutationKey: 'login',
    mutationFn: async data => mutation.create('api/auth/local', data),
    onSuccess: data => {
      dispatch(setCredentials({ token: data.data.jwt, user: data.data.user }))
      navigate(from, { replace: true })
    },
  })
}
