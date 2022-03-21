import { Button, ButtonGroup, Heading, Stack, Wrap } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

import { Layout } from '../../components'

export const Examples = () => {
  return (
    <Layout>
      <Stack spacing={6}>
        <Heading textAlign='center'>Examples</Heading>
        <ButtonGroup as={Wrap} colorScheme='blue'>
          <Button as={Link} to='/examples/use-request'>
            UseRequest
          </Button>
          <Button as={Link} to='/examples/use-get-volunteers'>
            UseGetVolunteers
          </Button>
          <Button as={Link} to='/examples/pagination'>
            Pagination
          </Button>
        </ButtonGroup>
        <Outlet />
      </Stack>
    </Layout>
  )
}
