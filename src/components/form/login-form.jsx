import { useState } from 'react'

import { Alert, AlertDescription, AlertIcon, Button, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { MdEmail, MdPassword } from 'react-icons/md'
import * as yup from 'yup'

import { FormItem } from './form-item'

import { useLoginMutation } from '../../hooks'

const schema = yup.object({
  identifier: yup.string().required('Username or email is required'),
  password: yup.string().required('Pasword is required '),
})

export const LoginForm = () => {
  const { mutate: login, isLoading, isError } = useLoginMutation()

  const [error, setError] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const onSubmit = async credentials => {
    try {
      login(credentials)
      navigate(from, { replace: true })
    } catch (error) {
      const message = error.response?.errors[0].message
      if (message) setError(message)
    }
  }

  return (
    <VStack spacing={5} as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormItem
        id='identifier'
        label='Username or Email'
        leftElement={<MdEmail color='gray.800' />}
        errors={errors}
        register={register}
      />
      <FormItem
        id='password'
        label='Password'
        type='password'
        leftElement={<MdPassword color='gray.200' />}
        errors={errors}
        register={register}
      />

      <Button colorScheme='blue' type='submit' isDisabled={!isValid} isLoading={isLoading} isFullWidth>
        Login
      </Button>

      {isError && (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </VStack>
  )
}
