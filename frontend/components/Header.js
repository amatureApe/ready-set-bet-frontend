import { ConnectButton } from "web3uikit";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
      <h1 className="py-4 px-4 font-bold text-3xl text-emerald-400">Ready Set Bet</h1>
      <div className="flex flex-row items-center">
        <Link href="/">
          <a className="mr-4 p-6 text-slate-200">Home</a>
        </Link>

        <Link href="/set-bet">
          <a className="mr-4 p-6 text-slate-200">Set Bet</a>
        </Link>

        <Link href="/open-bets">
          <a className="mr-4 p-6 text-slate-200">Open Bets</a>
        </Link>

        <Link href="/your-bets">
          <a className="mr-4 p-6 text-slate-200">Your Bets</a>
        </Link>

        <Link href="/about">
          <a className="mr-4 p-6 text-slate-200">About</a>
        </Link>
      </div>

      <ConnectButton moralisAuth={false} />
    </nav>
  )
}