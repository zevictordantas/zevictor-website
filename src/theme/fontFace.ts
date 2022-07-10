import { css } from '@emotion/react'

export const fontFace = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
      url('fonts/Roboto/Roboto-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto'), local('Roboto-Bold'),
      url('fonts/Roboto/Roboto-Bold.woff2') format('woff2');
  }
`
