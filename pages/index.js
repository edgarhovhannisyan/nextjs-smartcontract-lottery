import Head from "next/head"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract lottery</title>
                <meta
                    name="description"
                    content="Smart contract lottery based on Chainlink VRF and Keepers"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <LotteryEntrance />
        </div>
    )
}
