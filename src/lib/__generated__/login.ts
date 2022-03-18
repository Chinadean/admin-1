import * as Types from '../../..';

import { api } from '@store';
export type LoginMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type LoginMutation = { login: { jwt?: string, user: { id: string, username: string, email?: string } } };


export const LoginDocument = `
    mutation login($identifier: String!, $password: String!) {
  login(input: {identifier: $identifier, password: $password}) {
    jwt
    user {
      id
      username
      email
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLoginMutation } = injectedRtkApi;

