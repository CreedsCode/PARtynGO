import Image from "next/image";

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

      <div className="mt-10">
        <a href="/createGame">
          <h2>start new game</h2>
        </a>
        <a href="/JoinGame">
          <h2 className="mt-10">join existing game</h2>
        </a>
      </div>

      <div className="mt-20">
        <HelloComponentsCard />
        <HelloNearCard />
        <DocsCard />
      </div>
    </main>
  );
}
