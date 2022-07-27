import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-serif text-6xl">TeamPool</h1>
            <div className="flex flex-row text-2xl items-center font-serif">
                <Link href="/">
                    <a className="mr-4 p-6 ">Home</a>
                </Link>
                <Link href="/">
                    <a className="mr-4 p-6 ">About</a>
                </Link>
                <Link href="/">
                    <a className="mr-4 p-6 ">Contact</a>
                </Link>
                <Link href="/">
                    <a className="mr-4 p-6 ">Leagues</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
