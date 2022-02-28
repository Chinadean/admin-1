import { gql } from 'graphql-request'

import { api } from '@store'

export type GetTranslatedHashtagPostsQueryVariables = {
  locale: string
  first: string
  second: string
}

export type GetTranslatedHashtagPostsQuery = {
  translated?: { meta: { pagination: { total: number } } }
  all?: { meta: { pagination: { total: number } } }
}

export const GetTranslatedHashtagPostsDocument = gql`
  query getTranslatedHashtagPosts($locale: I18NLocaleCode!, $first: String!, $second: String!) {
    translated: hashtagPosts(
      locale: $locale
      filters: {
        and: [
          { not: { localizations: { locale: { eq: $first } } } }
          { not: { localizations: { locale: { eq: $second } } } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    all: hashtagPosts(locale: $locale) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getTranslatedHashtagPosts: build.query<
      { translated: number | undefined; total: number | undefined },
      GetTranslatedHashtagPostsQueryVariables | void
    >({
      query: variables => ({ document: GetTranslatedHashtagPostsDocument, variables }),
      transformResponse: (response: GetTranslatedHashtagPostsQuery) => {
        const translatedCount = response.translated?.meta.pagination.total
        const totalCount = response.all?.meta.pagination.total

        return {
          translated: translatedCount,
          total: totalCount,
        }
      },
    }),
  }),
})

export const { useGetTranslatedHashtagPostsQuery, useLazyGetTranslatedHashtagPostsQuery } = injectedRtkApi
