import * as Types from '../../..';

import { api } from '@store';
export type UploadFileMutationVariables = Types.Exact<{
  file: Types.Scalars['Upload'];
}>;


export type UploadFileMutation = { upload: { data?: { id?: string, attributes?: { url: string, width?: number, height?: number } } } };


export const UploadFileDocument = `
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
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<UploadFileMutation, UploadFileMutationVariables>({
      query: (variables) => ({ document: UploadFileDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUploadFileMutation } = injectedRtkApi;

