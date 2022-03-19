import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { checkAuth } from '../../store'

let parsedItem
const item = sessionStorage.getItem('auth')
if (item) {
  parsedItem = JSON.parse(item)
}

export const RequireAuth = ({ children }) => {
  const { token } = useSelector(state => state.auth)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [token])

  if (!parsedItem?.token && !token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}
