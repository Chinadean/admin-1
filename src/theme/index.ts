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

const theme = extendTheme(overrides)

export default theme
