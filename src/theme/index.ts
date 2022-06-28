import { extendTheme } from '@chakra-ui/react'
import type { ThemeConfig } from '@chakra-ui/theme'

import { components } from './components'
import { foundations } from './foundations'
import { styles } from './styles'

export const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  components,
  config,
  styles,
  ...foundations
})
