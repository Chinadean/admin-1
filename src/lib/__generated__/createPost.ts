import * as Types from '../../..';

import { api } from '@store';
export type CreatePostMutationVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['I18NLocaleCode']>;
  text: Types.Scalars['String'];
  image: Types.Scalars['ID'];
  tags?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['ID']>> | Types.InputMaybe<Types.Scalars['ID']>>;
  hashtag?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type CreatePostMutation = { createPost?: { data?: { attributes?: { text: string, image?: { data?: { attributes?: { url: string } } } } } } };


export const CreatePostDocument = `
    mutation createPost($locale: I18NLocaleCode, $text: String!, $image: ID!, $tags: [ID], $hashtag: ID) {
  createPost(
    locale: $locale
    data: {text: $text, image: $image, tags: $tags, hashtag: $hashtag}
  ) {
    data {
      attributes {
        text
        image {
          data {
            attributes {
              url
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
    createPost: build.mutation<CreatePostMutation, CreatePostMutationVariables>({
      query: (variables) => ({ document: CreatePostDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useCreatePostMutation } = injectedRtkApi;

