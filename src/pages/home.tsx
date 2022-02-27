import { Box, Spinner } from '@chakra-ui/react'

import { Layout } from '@components'
import { useGetHashtagPostsQuery } from '@lib'

export const Home = () => {
  const { data, isLoading } = useGetHashtagPostsQuery()
  return (
    <Layout>
      {isLoading ? <Spinner /> : data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'No data'}
      <Box>Home</Box>
    </Layout>
  )
}
