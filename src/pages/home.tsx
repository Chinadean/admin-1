import { Box, Text, Spinner, Stack, Heading } from '@chakra-ui/react'

import { Layout } from '@components'
import { useGetHashtagPostsQuery } from '@lib'

export const HomePage = () => {
  const { data, isLoading } = useGetHashtagPostsQuery()
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : data?.hashtagPosts?.data ? (
        <Stack p={4}>
          <Heading>Posts</Heading>
          {data.hashtagPosts.data.map((post, i) => (
            <Text key={i}>
              {i + 1}. {post.attributes?.text}
            </Text>
          ))}
        </Stack>
      ) : (
        'No data'
      )}
      <Box>Home</Box>
    </Layout>
  )
}
