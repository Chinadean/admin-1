import { Box, Center, Container, Heading } from '@chakra-ui/react'

import { LoginForm } from '../components'

export const LoginPage = () => {
  return (
    <Center h='100vh'>
      <Container maxW='container.sm'>
        <Box borderWidth={2} borderColor='blue.600' p={8} w='full' shadow='lg' rounded='lg'>
          <Heading color='blue.600' mb={8} textAlign='center'>
            Login
          </Heading>
          <LoginForm />
        </Box>
      </Container>
    </Center>
  )
}
