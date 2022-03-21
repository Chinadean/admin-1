import { Box, Spinner, Stack } from '@chakra-ui/react'
// import { JSONTree } from 'react-json-tree'

import { CodeBlock } from '../../components'
import { useGetVolunteers } from '../../hooks'

export const UseGetVoluntters = () => {
  const { data, isLoading, isError } = useGetVolunteers({})

  const code = `
const { data, isLoading, isError } = useGetVolunteers({})
  
export const useGetVolunteers = () => {
  return useQuery({
    queryKey: 'volunteers',
    queryFn: async () => request({ url: 'api/volunteers' }),
})
`.trim()

  if (isLoading) return <Spinner />

  if (isError) return <Box>Error! Check console!</Box>

  return (
    <Stack>
      <CodeBlock code={code} result={data.data} />
    </Stack>
  )
}
