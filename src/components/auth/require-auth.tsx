import { useEffect } from 'react'

import { Navigate, useLocation } from 'react-router-dom'

import { checkAuth, useAppDispatch, useAppSelector } from '@store'

let parsedItem: any
const item = localStorage.getItem('auth')
if (item) {
  parsedItem = JSON.parse(item)
}

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { token } = useAppSelector(state => state.auth)
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  if (!parsedItem?.token && !token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}
