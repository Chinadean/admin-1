import { Box, Button, Divider, HStack, SimpleGrid, Spinner, useDisclosure } from '@chakra-ui/react'

import { CreatePostModal, Layout, PostItem } from '../components'
import { useGetPosts } from '../hooks'

export const PostsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data, isLoading, isFetching } = useGetPosts({})

  return (
    <Layout>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
      <HStack>
        <Button colorScheme='green' onClick={onOpen}>
          Create
        </Button>
        {isFetching && <Box>Fetching...</Box>}
      </HStack>
      <Divider my={4} />
      {isLoading ? (
        <Spinner />
      ) : (
        data?.data && (
          <SimpleGrid columns={{ base: 1, lg: 2 }} h='full' gap={8} my={8}>
            {data.data.map((post, i) => (
              <PostItem key={i} post={post} />
            ))}
          </SimpleGrid>
        )
      )}
    </Layout>
  )
}
