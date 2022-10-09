import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import EthereumLogo from "../components/EthereumLogo";
import Head from 'next/head';
import { NotificationProvider } from "web3uikit";


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-pink-400">
      <Head>
        <title>Ready Set Bet</title>
        <meta name="description" content="Ready Set Bet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Header />
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>
    </div>
  )
}

export default MyApp
