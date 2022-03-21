import { useEffect } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { RequireAuth } from './components'
import { checkAuth } from './store'
import { HomePage, LoginPage, NotFoundPage, PostsPage } from './pages'
import { theme } from './theme'

const queryClient = new QueryClient()

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  return (
    <QueryClientProvider client={queryClient}>
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
            <Route
              path='/hashtag-posts'
              element={
                <RequireAuth>
                  <PostsPage />
                </RequireAuth>
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
