import { useEffect } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RequireAuth } from './components'
import {
  Examples,
  HomePage,
  LoginPage,
  NotFoundPage,
  Pagination,
  PostsPage,
  UseGetVoluntters,
  UseRequest,
} from './pages'
import { checkAuth } from './store'
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
            {/* Homepage */}
            <Route
              path='/'
              element={
                <RequireAuth>
                  <HomePage />
                </RequireAuth>
              }
            />

            {/* Examples */}
            <Route
              path='/examples'
              element={
                <RequireAuth>
                  <Examples />
                </RequireAuth>
              }
            >
              <Route path='/examples/use-request' element={<UseRequest />} />
              <Route path='/examples/use-get-volunteers' element={<UseGetVoluntters />} />
              <Route path='/examples/pagination' element={<Pagination />} />
            </Route>

            {/* Hashtag Posts */}
            <Route
              path='/hashtag-posts'
              element={
                <RequireAuth>
                  <PostsPage />
                </RequireAuth>
              }
            />

            {/* Login */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
