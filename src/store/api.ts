import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react'
import { DocumentNode } from 'graphql'
import { ClientError, GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(`${import.meta.env.VITE_API}/graphql`)

let auth: { user: UsersPermissionsMe; token: string }
const authStorage = localStorage.getItem('auth')

if (authStorage) {
  auth = JSON.parse(authStorage)
}

export const baseQuery: BaseQueryFn<
  { document: string | DocumentNode; variables?: any },
  unknown,
  ClientError
> = async ({ document, variables }) => {
  try {
    const headers = auth && { Authorization: `Bearer ${auth.token}` }
    return { data: await client.request(document, variables, headers) }
  } catch (error) {
    if (error instanceof ClientError) {
      return { error }
    }
    throw error
  }
}

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
})
