import { gql } from 'graphql-request'

import { api } from '@store'

export type CreatePostMutationVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  text: Scalars['String']
  image: Scalars['ID']
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>
  hashtag?: InputMaybe<Scalars['ID']>
}>

export type CreatePostMutation = {
  createPost?: {
    data?: {
      attributes?: {
        text: string
        image?: { data?: { attributes?: { url: string } } }
      }
    }
  }
}

export const CreatePostDocument = gql`
  mutation createPost($locale: I18NLocaleCode, $text: String!, $image: ID!, $tags: [ID], $hashtag: ID) {
    createPost(locale: $locale, data: { text: $text, image: $image, tags: $tags, hashtag: $hashtag }) {
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
`

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    createPost: build.mutation<CreatePostMutation, CreatePostMutationVariables>({
      query: variables => ({ document: CreatePostDocument, variables }),
    }),
  }),
})

export const { useCreatePostMutation } = injectedRtkApi
