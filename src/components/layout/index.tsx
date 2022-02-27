import { FC } from 'react'

import { Flex, Stack } from '@chakra-ui/react'

import { Header } from './header'
import { Sidebar } from './sidebar'

export const Layout: FC = ({ children }) => {
  return (
    <Flex h='100vh' w='full'>
      <Sidebar />
      <Stack w='full'>
        <Header />
        <Flex flex={1} flexDir='column' w='full' p={4}>
          {children}
        </Flex>
      </Stack>
    </Flex>
  )
}
