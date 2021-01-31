import { Global, css } from '@emotion/react'

export const MyApp = ({ Component, pageProps }) => (
  <>
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    />
    <Component {...pageProps} />
  </>
)

export default MyApp
