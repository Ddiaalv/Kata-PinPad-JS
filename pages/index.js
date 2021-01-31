import Head from 'next/head'
import { Title } from './_app.styles'

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Kata - PinPad | DDIAALV</title>
        <meta name="description" content="Kata - PinPad | DDIAALV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>PINPAD</Title>
      </main>
    </div>
  )
}

export default Home
