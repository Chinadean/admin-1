import { extendTheme } from '@chakra-ui/react'

import { styles } from './styles'

const overrides = {
  config: {
    cssVarPrefix: 'samen',
  },
  styles,
  fonts: {
    heading: 'Rubik',
    body: 'Rubik',
  },
  shadows: {
    outline: 'none',
  },
}

export const theme = extendTheme(overrides)
