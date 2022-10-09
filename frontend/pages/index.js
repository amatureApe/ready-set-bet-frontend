import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ready Set Bet</title>
        <meta name="description" content="Ready Set Bet " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hi
    </div>
  )
}
