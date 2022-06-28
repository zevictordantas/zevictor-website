import { ColorModeScript } from '@chakra-ui/color-mode'
import { Head, Html, Main, NextScript } from 'next/document'
import { config } from 'theme'

import HeadContent from './_partials/HeadContent'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeadContent />
      </Head>

      <body>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
