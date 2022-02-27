import { gql } from 'graphql-request'

import { api } from '@store'

export type GetHashtagPostsQuery = {
  __typename?: 'Query'
  hashtagPosts?: {
    __typename?: 'HashtagPostEntityResponseCollection'
    data: Array<{ __typename?: 'HashtagPostEntity'; attributes?: { __typename?: 'HashtagPost'; text: string } }>
  }
}

export const GetHashtagPostsDocument = gql`
  query getHashtagPosts {
    hashtagPosts {
      data {
        attributes {
          text
        }
      }
    }
  }
`

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getHashtagPosts: build.query<GetHashtagPostsQuery, null | void>({
      query: variables => ({ document: GetHashtagPostsDocument, variables }),
    }),
  }),
})

export const { useGetHashtagPostsQuery, useLazyGetHashtagPostsQuery } = injectedRtkApi
