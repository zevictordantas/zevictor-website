import { mode, type StyleFunctionProps } from '@chakra-ui/theme-tools'

export const link = {
  baseStyle: (props: StyleFunctionProps) => ({
    _active: {
      borderColor: mode('light.200', 'dark.200')(props)
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.4,
      textDecoration: 'none'
    },
    _focus: {
      borderColor: mode('light.200', 'dark.200')(props),
      borderWidth: '0.15rem',
      boxShadow: 'none',
      px: 1
    },
    _hover: {
      color: mode('light.600', 'dark.600')(props),
      textDecoration: 'none'
    }
  })
}
