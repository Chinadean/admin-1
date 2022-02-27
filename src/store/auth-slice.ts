import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@store'

type AuthState = {
  user: UsersPermissionsMe | null
  token: string | null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: UsersPermissionsMe; token: string }>,
    ) => {
      state.user = user
      state.token = token
      localStorage.setItem('auth', JSON.stringify(state))
    },
    logout: state => {
      state.token = null
      state.user = null
      localStorage.removeItem('auth')
    },
    checkAuth: state => {
      const item = localStorage.getItem('auth')
      if (item) {
        const parsedItem = JSON.parse(item)
        state.user = parsedItem.user
        state.token = parsedItem.token
      }
    },
  },
})

export const { setCredentials, checkAuth, logout } = authSlice.actions

export const { reducer: authReducer } = authSlice

export const selectCurrentUser = (state: RootState) => state.auth.user
