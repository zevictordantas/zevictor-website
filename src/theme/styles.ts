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
      maxWidth: 'container.sm',
      mx: 'auto',
      pb: { base: '20', sm: '10' },
      px: { base: '2', sm: '4' },
      transition: 'all 0.2s'
    },
    'html, body, #__next': {
      height: 'auto'
    }
  })
}
