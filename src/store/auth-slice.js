import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user
      state.token = token
      sessionStorage.setItem('auth', JSON.stringify(state))
    },
    logout: state => {
      state.token = null
      state.user = null
      sessionStorage.removeItem('auth')
    },
    checkAuth: state => {
      const item = sessionStorage.getItem('auth')
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

export const selectCurrentUser = state => state.auth.user
