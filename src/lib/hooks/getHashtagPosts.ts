import { gql } from 'graphql-request'

import { api } from '@store'

export type GetHashtagPostsQueryVariables = {
  page?: number
  pageSize?: number
  from?: string
  to?: string
}

export type GetHashtagPostsQuery = {
  hashtagPosts?: {
    data: Array<{
      attributes?: {
        locale?: string
        text: string
        localizations?: { data: Array<{ attributes?: { locale?: string; text: string } }> }
      }
    }>
  }
}

export const GetHashtagPostsDocument = gql`
  query getHashtagPosts($from: I18NLocaleCode, $to: String, $page: Int, $pageSize: Int) {
    hashtagPosts(
      locale: $from
      filters: { or: [{ localizations: { locale: { ne: $to } } }, { localizations: { locale: { null: true } } }] }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        attributes {
          locale
          text
          localizations {
            data {
              attributes {
                locale
                text
              }
            }
          }
        }
      }
    }
  }
`

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getHashtagPosts: build.query<GetHashtagPostsQuery, GetHashtagPostsQueryVariables | void>({
      query: variables => ({ document: GetHashtagPostsDocument, variables }),
      transformResponse: async (response: GetHashtagPostsQuery, meta, args: GetHashtagPostsQueryVariables) => {
        const result = response.hashtagPosts?.data.filter(post => {
          const localizations = post.attributes?.localizations as GetHashtagPostsQuery['hashtagPosts']

          return !localizations?.data.some(l => l.attributes?.locale === args.to)
        }) as HashtagPostEntity[]

        return { hashtagPosts: { data: result } }
      },
    }),
  }),
})

export const { useGetHashtagPostsQuery, useLazyGetHashtagPostsQuery } = injectedRtkApi
