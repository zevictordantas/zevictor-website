import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from 'common/components/Navbar/Navbar'
import type { AppProps } from 'next/app'
import { theme } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
