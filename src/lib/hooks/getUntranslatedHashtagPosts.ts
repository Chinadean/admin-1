import { gql } from 'graphql-request'

import { api } from '@store'

export type GetUntranslatedHashtagPostsQueryVariables = {
  from?: string
  to?: string
  page?: number
  pageSize?: number
}

export type GetUntranslatedHashtagPostsQuery = {
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

export const GetUntranslatedHashtagPostsDocument = gql`
  query getUntranslatedHashtagPosts($from: I18NLocaleCode, $to: String, $page: Int, $pageSize: Int) {
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
    getUntranslatedHashtagPosts: build.query<
      GetUntranslatedHashtagPostsQuery,
      GetUntranslatedHashtagPostsQueryVariables | void
    >({
      query: variables => ({ document: GetUntranslatedHashtagPostsDocument, variables }),
      transformResponse: async (
        response: GetUntranslatedHashtagPostsQuery,
        meta,
        args: GetUntranslatedHashtagPostsQueryVariables,
      ) => {
        const result = response.hashtagPosts?.data.filter(post => {
          return !post.attributes?.localizations?.data.some(l => l.attributes?.locale === args.to)
        }) as HashtagPostEntity[]

        return { hashtagPosts: { data: result } }
      },
    }),
  }),
})

export const { useGetUntranslatedHashtagPostsQuery, useLazyGetUntranslatedHashtagPostsQuery } = injectedRtkApi
