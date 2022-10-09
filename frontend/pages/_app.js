import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Ready Set Bet</title>
        <meta name="description" content="Ready Set Bet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <Header />
        <Component {...pageProps} />
      </MoralisProvider>
    </div>
  )
}

export default MyApp
