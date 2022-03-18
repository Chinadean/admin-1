import { useState } from 'react'

import {
  Avatar,
  Badge,
  Button,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'

import { CreatePostModal, Layout } from '@components'
import { useGetUntranslatedPostsQuery } from '@store'

export const PostsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [from, setFrom] = useState<string>('en')
  const [to, setTo] = useState<string>('tr')

  const { data, isLoading } = useGetUntranslatedPostsQuery({ page: 1, pageSize: 4, from, to })

  return (
    <Layout>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
      <Stack spacing={4}>
        <Button alignSelf='end' onClick={onOpen}>
          Create
        </Button>
        <HStack justify='space-evenly'>
          <HStack>
            <FormLabel htmlFor='from'>From</FormLabel>
            <RadioGroup id='from' value={from} onChange={setFrom}>
              <HStack>
                <Radio value='en'>EN</Radio>
                <Radio value='nl'>NL</Radio>
                <Radio value='tr'>TR</Radio>
              </HStack>
            </RadioGroup>
          </HStack>
          <HStack>
            <FormLabel htmlFor='to'>To</FormLabel>
            <RadioGroup id='to' value={to} onChange={setTo}>
              <HStack>
                <Radio value='en'>EN</Radio>
                <Radio value='nl'>NL</Radio>
                <Radio value='tr'>TR</Radio>
              </HStack>
            </RadioGroup>
          </HStack>
        </HStack>
        {isLoading ? (
          <Spinner />
        ) : data?.posts?.data ? (
          <Table>
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Text</Th>
                <Th>Locale</Th>
                <Th>Translations</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.posts.data.map((postData, i) => {
                const post = postData.attributes
                if (!post) return null
                return (
                  <Tr key={i}>
                    <Td>
                      <Avatar name={post.text} src={'http://localhost:1337' + post.image.data?.attributes?.url} />
                    </Td>
                    <Td maxW={200} isTruncated>
                      {post.text}
                    </Td>
                    <Td>{post.locale}</Td>
                    <Td>
                      {post.localizations?.data?.map((locale, j) => (
                        <Badge key={j}>({locale.attributes?.locale})</Badge>
                      )) || <Badge>No Translation</Badge>}
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        ) : (
          'No data'
        )}
      </Stack>
    </Layout>
  )
}
