import { Box, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '@store'

export const Sidebar = () => {
  const { user } = useAppSelector(state => state.auth)
  return (
    <Stack bg='gray.700' color='white' p={4} h='full' w={200}>
      <Heading size='lg'>Menu</Heading>
      <Box>{user?.username}</Box>

      <Link to='/translations'>Translations</Link>
    </Stack>
  )
}
