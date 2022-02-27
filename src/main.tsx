import { StrictMode } from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from '@store'

import { App } from './App'

import '@fontsource/rubik/400.css'
import '@fontsource/rubik/700.css'

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
)
