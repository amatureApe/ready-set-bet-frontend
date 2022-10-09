import styles from '../styles/Home.module.css';
import BetBox from '../components/BetBox';
import Image from "next/image";
import EthereumLogo from "../components/EthereumLogo"

export default function Home() {
  return (
    <div className={styles.container}>
      <EthereumLogo />
    </div>
  )
}
