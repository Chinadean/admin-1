import { StrictMode } from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import { store } from './store'

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
