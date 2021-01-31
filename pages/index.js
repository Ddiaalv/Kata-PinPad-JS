import Head from 'next/head'
import { Title } from './_app.styles'
import { Pad } from '../src/components/Pad/Pad'

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
        <Pad />
      </main>
    </div>
  )
}

export default Home
