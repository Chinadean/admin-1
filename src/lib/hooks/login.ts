import { gql } from 'graphql-request'

import { api, client } from '@store'

export type LoginMutationVariables = Exact<{
  identifier: string
  password: string
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'UsersPermissionsLoginPayload'
    jwt?: string
    user: { __typename?: 'UsersPermissionsMe'; username: string; email?: string }
  }
}

export const LoginDocument = gql`
  mutation login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
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
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled
        client.setHeader('Authorization', `Bearer ${data.login.jwt}`)
      },
    }),
  }),
})

export const { useLoginMutation } = injectedRtkApi
