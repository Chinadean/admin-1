import * as Types from '../../..';

import { api } from '@store';
export type GetUntranslatedPostsQueryVariables = Types.Exact<{
  from?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']>;
  to?: Types.InputMaybe<Types.Scalars['String']>;
  page?: Types.InputMaybe<Types.Scalars['Int']>;
  pageSize?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetUntranslatedPostsQuery = { posts?: { data: Array<{ attributes?: { locale?: string, text: string, image?: { data?: { attributes?: { url: string } } }, localizations?: { data: Array<{ attributes?: { locale?: string, text: string } }> } } }> } };


export const GetUntranslatedPostsDocument = `
    query getUntranslatedPosts($from: I18NLocaleCode, $to: String, $page: Int, $pageSize: Int) {
  posts(
    locale: $from
    filters: {or: [{localizations: {locale: {ne: $to}}}, {localizations: {locale: {null: true}}}]}
    pagination: {page: $page, pageSize: $pageSize}
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
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUntranslatedPosts: build.query<GetUntranslatedPostsQuery, GetUntranslatedPostsQueryVariables | void>({
      query: (variables) => ({ document: GetUntranslatedPostsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetUntranslatedPostsQuery, useLazyGetUntranslatedPostsQuery } = injectedRtkApi;

