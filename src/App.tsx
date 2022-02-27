import { useEffect } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RequireAuth } from '@components'
import { HomePage, LoginPage, NotFoundPage } from '@pages'
import { useAppDispatch, checkAuth } from '@store'
import theme from '@theme'

export const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
