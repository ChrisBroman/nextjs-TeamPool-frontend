import Image from "next/image"
import styles from "../styles/Home.module.css"
import { Card, useNotification } from "web3uikit"
import { useMoralisQuery, useMoralis } from "react-moralis"

export default function Home() {
    const { isWeb3Enabled } = useMoralis()

    return (
        <div>
            <div></div>
        </div>
    )
}
