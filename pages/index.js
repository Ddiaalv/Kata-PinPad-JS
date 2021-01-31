import Head from 'next/head'
import { Title } from './_app.styles'

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Next boilerplate</title>
        <meta name="description" content="Next boilerplate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
      </main>
    </div>
  )
}

export default Home
