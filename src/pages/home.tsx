import { useState } from 'react'

import { Spinner, Stack, Heading, HStack, Select, FormControl, FormLabel } from '@chakra-ui/react'

import { Layout } from '@components'
import { useGetTranslatedPostsQuery } from '@store'

export const HomePage = () => {
  const [locale, setLocale] = useState<string>('en')

  const [first, second] = ['en', 'nl', 'tr'].filter(l => l !== locale)

  const { data, isLoading } = useGetTranslatedPostsQuery({ locale, first, second })
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <Stack>
          <HStack>
            <FormControl>
              <FormLabel>Language</FormLabel>
              <Select defaultValue={locale} onChange={e => setLocale(e.target.value)}>
                {['en', 'nl', 'tr'].map(lang => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </Select>
            </FormControl>
          </HStack>
          <HStack w='full' spacing={8}>
            <Stack p={8} shadow='lg' rounded='lg' flex={1} textAlign='center'>
              <Heading>Translated</Heading>
              <Heading>{data?.translated?.meta.pagination.total}</Heading>
            </Stack>
            <Stack p={8} shadow='lg' rounded='lg' flex={1} textAlign='center'>
              <Heading>All</Heading>
              <Heading>{data?.all?.meta.pagination.total}</Heading>
            </Stack>
          </HStack>
        </Stack>
      )}
    </Layout>
  )
}
