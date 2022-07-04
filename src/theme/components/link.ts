import { mode, type StyleFunctionProps } from '@chakra-ui/theme-tools'

export const link = {
  baseStyle: (props: StyleFunctionProps) => ({
    _active: {
      borderColor: mode('light.600', 'dark.600')(props)
    },

    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.4,
      textDecoration: 'none'
    },
    _focus: {
      borderColor: mode('light.600', 'dark.600')(props),
      borderWidth: '0.15rem',
      boxShadow: 'none',
      px: 1
    },
    _hover: {
      color: mode('light.600', 'dark.600')(props),
      textDecoration: 'none'
    },
    color: mode('light.300', 'dark.300')(props)
  })
}
