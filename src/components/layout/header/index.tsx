import { Avatar, HStack, Spacer, Text } from '@chakra-ui/react'

import { useAppSelector } from '@store'

export const Header = () => {
  const { user } = useAppSelector(state => state.auth)

  return (
    <HStack p={4} bg='gray.700' color='white'>
      <Spacer />
      <HStack>
        <Avatar size='xs' name={user?.username} />
        <Text>{user?.username}</Text>
      </HStack>
    </HStack>
  )
}
