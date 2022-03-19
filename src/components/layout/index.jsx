import { Box, Flex, Stack } from '@chakra-ui/react'

import { Header } from './header'
import { Sidebar } from './sidebar'

export const Layout = ({ children }) => {
  return (
    <Flex h='100vh' w='full'>
      <Sidebar />
      <Stack w='full'>
        <Header />
        <Box flex={1} flexDir='column' w='full' p={4} overflowY='auto'>
          {children}
        </Box>
      </Stack>
    </Flex>
  )
}
