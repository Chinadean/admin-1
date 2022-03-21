import { Stack } from '@chakra-ui/react'

import { CodeBlock } from '../../components'
import { useRequest } from '../../hooks'

export const UseRequest = () => {
  const { data, isLoading, isError } = useRequest('projects', 'api/projects')

  const code = `const { data, isLoading, isError } = useRequest('projects', 'api/projects')`

  return (
    <Stack>
      <CodeBlock code={code} result={data?.data} isLoading={isLoading} isError={isError} />
    </Stack>
  )
}
