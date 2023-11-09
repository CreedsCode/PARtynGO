import Image from "next/image";
import Link from "next/link";

import {
  DocsCard,
  HelloComponentsCard,
  HelloNearCard,
} from "@/components/cards";

import { Orbitron } from "next/font/google";
import Header from "@/components/Header";
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-obitron" });

export default function Home() {
  return (
    <main>
      <Header />

      <h1 className={`${orbitron.variable}`}>PARTYNGO</h1>

      <div className="w-full flex flex-col items-center justify-center  ">
        <Link
          href="/game"
          className="mt-10 w-2/3 p-2 text-2xl bg-white/10 rounded-full text-orange-400"
        >
          start new game
        </Link>
        <Link
          href="/game/join"
          className="mt-10 w-2/3 p-2 text-2xl bg-white/10 rounded-full text-purple-400"
        >
          join existing game
        </Link>
      </div>
    </main>
  );
}
