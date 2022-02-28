import { useState } from 'react'

import { Text, Spinner, Stack, Heading, HStack, Select, FormControl, FormLabel, Wrap, Divider } from '@chakra-ui/react'

import { Layout } from '@components'
import { useGetHashtagPostsQuery } from '@lib'

export const TranslationsPage = () => {
  const [from, setFrom] = useState<string>('en')
  const [to, setTo] = useState<string>('tr')

  const { data, isLoading } = useGetHashtagPostsQuery({ page: 1, pageSize: 4, from, to })
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : data?.hashtagPosts?.data ? (
        <Stack p={4}>
          <Heading>Posts</Heading>
          <Wrap spacing={4}>
            {data.hashtagPosts.data.map((post, i) => (
              <Stack key={i} p={8} shadow='lg' rounded='lg'>
                <Text>
                  {post.attributes?.text} ({post.attributes?.locale})
                </Text>
                <Divider />
                {post.attributes?.localizations?.data?.map((locale, j) => (
                  <Text key={j}>
                    {locale.attributes?.text} ({locale.attributes?.locale})
                  </Text>
                )) || <Text>No Translation</Text>}
              </Stack>
            ))}
          </Wrap>
        </Stack>
      ) : (
        'No data'
      )}
      <HStack>
        <FormControl>
          <FormLabel>From</FormLabel>
          <Select defaultValue={from} onChange={e => setFrom(e.target.value)}>
            {['en', 'nl', 'tr'].map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Untranslated</FormLabel>
          <Select defaultValue={to} onChange={e => setTo(e.target.value)}>
            {['en', 'nl', 'tr']
              .filter(lang => lang !== from)
              .map(lang => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
          </Select>
        </FormControl>
      </HStack>
    </Layout>
  )
}
