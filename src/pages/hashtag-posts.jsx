import React from 'react'

import { Badge, Box, Button, HStack, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react'

import { CreatePostModal, Layout } from '../components'
import { useGetPosts, usePublishPostMutation } from '../hooks'

const PostItem = ({ post }) => {
  const { mutate: publish, isLoading } = usePublishPostMutation()
  return (
    <Box p={2} shadow='sm' rounded='md' borderWidth={1} borderColor='gray.500'>
      <Text fontWeight='bold'>{post.hashtag?.hashtag}</Text>
      <Text>{post.text}</Text>
      <HStack>
        <Badge colorScheme='blue' variant='outline'>
          {post.locale}
        </Badge>
        <Badge variant='outline' colorScheme={post.publishedAt ? 'green' : 'orange'}>
          {post.publishedAt ? 'Published' : 'Draft'}
        </Badge>
        {!post.publishedAt && (
          <Button size='xs' isLoading={isLoading} colorScheme='blue' onClick={() => publish(post.id)}>
            Publish
          </Button>
        )}
      </HStack>
      {post.localizations?.length > 0 && (
        <Stack mt={4} fontSize='sm' color='gray.500'>
          {post.localizations.map((l, j) => (
            <PostItem key={j} post={l} />
          ))}
        </Stack>
      )}
    </Box>
  )
}

export const PostsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data } = useGetPosts()

  return (
    <Layout>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
      <Button colorScheme='green' onClick={onOpen}>
        Create
      </Button>
      {data && (
        <SimpleGrid columns={{ base: 1, lg: 2 }} h='full' gap={8} my={8}>
          {data.map((post, i) => (
            <PostItem key={i} post={post} />
          ))}
        </SimpleGrid>
      )}
    </Layout>
  )
}
