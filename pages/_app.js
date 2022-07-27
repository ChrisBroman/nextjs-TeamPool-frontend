import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Image from "next/image"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <div className="page-container-welcome">
            <Head>
                <title>TeamPool</title>
                <meta name="description" content="TeamPool Sports Pools" />
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
