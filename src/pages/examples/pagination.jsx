import { useState } from 'react'

import { Button, ButtonGroup, HStack, Stack } from '@chakra-ui/react'

import { CodeBlock } from '../../components'
import { useGetPosts } from '../../hooks'

export const Pagination = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useGetPosts({ page, pageSize: 10 })

  const code = `
const [page, setPage] = useState(1)
const { data, isLoading, isError } = useGetPosts({ page, pageSize: 10 })
`.trim()

  return (
    <Stack>
      <HStack>
        <ButtonGroup isAttached colorScheme='blue'>
          {Array.from({ length: data?.pagination.pageCount }, (n, i) => i + 1).map(n => (
            <Button variant={n === page ? 'solid' : 'outline'} key={n} onClick={() => setPage(n)}>
              {n}
            </Button>
          ))}
        </ButtonGroup>
      </HStack>
      <CodeBlock code={code} result={data?.data} isLoading={isLoading} isError={isError} />
    </Stack>
  )
}
