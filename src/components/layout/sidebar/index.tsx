import { Box, Heading, Spacer, Stack } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import { logout, useAppDispatch } from '@store'

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    return navigate('/login', { replace: true })
  }

  return (
    <Stack bg='gray.700' color='white' p={4} h='full' minW={200}>
      <Heading size='lg'>Menu</Heading>

      <Box py={2} as={Link} to='/translations' cursor='pointer'>
        Translations
      </Box>
      <Spacer />
      <Box py={2} onClick={onLogout} cursor='pointer'>
        Logout
      </Box>
    </Stack>
  )
}
