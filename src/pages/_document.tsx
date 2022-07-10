import { ColorModeScript } from '@chakra-ui/color-mode'
import { Global } from '@emotion/react'
import { Head, Html, Main, NextScript } from 'next/document'
import { config, fontFace } from 'theme'

import HeadContent from './_partials/HeadContent'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeadContent />
      </Head>

      <body>
        <Global styles={fontFace} />
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
