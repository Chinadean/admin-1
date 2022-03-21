import { Box, Spinner, Stack } from '@chakra-ui/react'
// import { JSONTree } from 'react-json-tree'

import { CodeBlock } from '../../components'
import { useRequest } from '../../hooks'

export const UseRequest = () => {
  const { data, isLoading, isError } = useRequest('projects', 'api/projects')

  const code = `const { data, isLoading, isError } = useRequest('projects', 'api/projects')`

  if (isLoading) return <Spinner />

  if (isError) return <Box>Error! Check console!</Box>

  return (
    <Stack>
      <CodeBlock code={code} result={data.data} />
    </Stack>
  )
}
