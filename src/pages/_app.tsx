import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from 'common/components/Footer'
import { Navbar } from 'common/components/Navbar'
import type { AppProps } from 'next/app'
import { theme } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
