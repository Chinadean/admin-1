import { Stack } from '@chakra-ui/react'

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

  return (
    <Stack>
      <CodeBlock code={code} result={data?.data} isLoading={isLoading} isError={isError} />
    </Stack>
  )
}
