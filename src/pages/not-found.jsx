import { Button, Center, Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <Center h='100vh'>
      <Stack>
        <Heading>Page not found</Heading>

        <Button as={Link} to='/' colorScheme='blue'>
          Go to homepage
        </Button>
      </Stack>
    </Center>
  )
}
