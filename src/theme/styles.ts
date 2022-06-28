import { mode, type Styles } from '@chakra-ui/theme-tools'

export const styles: Styles = {
  global: (props) => ({
    '*, *::before, &::after': {
      borderColor: mode('light.200', 'dark.200')(props),
      wordWrap: 'break-word'
    },
    '*::placeholder': {
      color: mode('black', 'white')(props)
    },
    body: {
      bg: mode('white', 'black')(props),
      color: mode('black', 'white')(props),
      fontFamily: 'body',
      lineHeight: 'base',
      transition: 'all 0.2s'
    },
    'html, body, #__next': {
      height: 'auto'
    }
  })
}
