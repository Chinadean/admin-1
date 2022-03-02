import { gql } from 'graphql-request'

import { api } from '@store'

export type LoginMutationVariables = {
  identifier: string
  password: string
}

export type LoginMutation = { login: { jwt?: string; user: { id: string; username: string; email?: string } } }

export const LoginDocument = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: variables => ({ document: LoginDocument, variables }),
    }),
  }),
})

export const { useLoginMutation } = injectedRtkApi
