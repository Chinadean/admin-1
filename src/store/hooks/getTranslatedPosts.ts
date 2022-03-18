import { gql } from 'graphql-request'

import { api } from '@store'

export type GetTranslatedPostsQueryVariables = Exact<{
  locale: Scalars['I18NLocaleCode']
  first: Scalars['String']
  second: Scalars['String']
}>

export type GetTranslatedPostsQuery = {
  translated?: { meta: { pagination: { total: number } } }
  all?: { meta: { pagination: { total: number } } }
}

export const GetTranslatedPostsDocument = gql`
  query getTranslatedPosts($locale: I18NLocaleCode!, $first: String!, $second: String!) {
    translated: posts(
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
    all: posts(locale: $locale) {
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
    getTranslatedPosts: build.query<GetTranslatedPostsQuery, GetTranslatedPostsQueryVariables>({
      query: variables => ({ document: GetTranslatedPostsDocument, variables }),
    }),
  }),
})

export const { useGetTranslatedPostsQuery, useLazyGetTranslatedPostsQuery } = injectedRtkApi
