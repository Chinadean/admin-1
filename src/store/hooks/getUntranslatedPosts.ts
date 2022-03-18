import { gql } from 'graphql-request'

import { api } from '@store'

export type GetUntranslatedPostsQueryVariables = Exact<{
  from?: InputMaybe<Scalars['I18NLocaleCode']>
  to?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}>

export type GetUntranslatedPostsQuery = {
  posts?: {
    data: Array<{
      attributes?: {
        locale?: string
        text: string
        image: {
          data: {
            attributes?: {
              url: string
            }
          }
        }
        localizations?: { data: Array<{ attributes?: { locale?: string; text: string } }> }
      }
    }>
  }
}

export const GetUntranslatedPostsDocument = gql`
  query getUntranslatedPosts($from: I18NLocaleCode, $to: String, $page: Int, $pageSize: Int) {
    posts(
      locale: $from
      filters: { or: [{ localizations: { locale: { ne: $to } } }, { localizations: { locale: { null: true } } }] }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        attributes {
          locale
          text
          image {
            data {
              attributes {
                url
              }
            }
          }
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
    getUntranslatedPosts: build.query<GetUntranslatedPostsQuery, GetUntranslatedPostsQueryVariables | void>({
      query: variables => ({ document: GetUntranslatedPostsDocument, variables }),
    }),
  }),
})

export const { useGetUntranslatedPostsQuery, useLazyGetUntranslatedPostsQuery } = injectedRtkApi
