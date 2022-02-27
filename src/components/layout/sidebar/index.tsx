import { Box, Heading, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import { MdLogout, MdTranslate } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import { logout, useAppDispatch } from '@store'

const sidebarRoutes = [
  {
    path: '/translations',
    label: 'Translations',
    icon: MdTranslate,
  },
]

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    return navigate('/login', { replace: true })
  }

  return (
    <Stack bg='gray.700' color='white' p={4} h='full' role='group'>
      <Heading size='lg'>Menu</Heading>

      {sidebarRoutes.map(route => (
        <HStack key={route.path} py={2} as={Link} to={route.path} cursor='pointer'>
          <Box as={route.icon} />
          <Text>{route.label}</Text>
        </HStack>
      ))}
      <Spacer />
      <HStack py={2} onClick={onLogout} cursor='pointer'>
        <Box as={MdLogout} />
        <Text>Logout</Text>
      </HStack>
    </Stack>
  )
}
