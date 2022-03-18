import * as Types from '../../..';

import { api } from '@store';
export type GetTranslatedPostsQueryVariables = Types.Exact<{
  locale: Types.Scalars['I18NLocaleCode'];
  first: Types.Scalars['String'];
  second: Types.Scalars['String'];
}>;


export type GetTranslatedPostsQuery = { translated?: { meta: { pagination: { total: number } } }, all?: { meta: { pagination: { total: number } } } };


export const GetTranslatedPostsDocument = `
    query getTranslatedPosts($locale: I18NLocaleCode!, $first: String!, $second: String!) {
  translated: posts(
    locale: $locale
    filters: {and: [{not: {localizations: {locale: {eq: $first}}}}, {not: {localizations: {locale: {eq: $second}}}}]}
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
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTranslatedPosts: build.query<GetTranslatedPostsQuery, GetTranslatedPostsQueryVariables>({
      query: (variables) => ({ document: GetTranslatedPostsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetTranslatedPostsQuery, useLazyGetTranslatedPostsQuery } = injectedRtkApi;

