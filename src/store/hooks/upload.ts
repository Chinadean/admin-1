import { gql } from 'graphql-request'

import { api } from '@store'

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']
}>

export type UploadFileMutation = {
  upload: { data?: { id?: string; attributes?: { url: string; width?: number; height?: number } } }
}

export const UploadFileDocument = gql`
  mutation uploadFile($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes {
          url
          width
          height
        }
      }
    }
  }
`

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    uploadFile: build.mutation<UploadFileMutation, UploadFileMutationVariables>({
      query: variables => ({ document: UploadFileDocument, variables }),
    }),
  }),
})

export const { useUploadFileMutation } = injectedRtkApi
