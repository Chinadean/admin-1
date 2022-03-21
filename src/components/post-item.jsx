import { Badge, Box, Button, HStack, Stack, Text } from '@chakra-ui/react'

import { usePublishPostMutation } from '../hooks'

export const PostItem = ({ post }) => {
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
