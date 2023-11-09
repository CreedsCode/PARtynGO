"use client";
import Image from "next/image";

import {
  DocsCard,
  HelloComponentsCard,
  HelloNearCard,
} from "@/components/cards";
import react, {useState, useEffect } from "react";
import { Orbitron } from "next/font/google";
import Header from "@/components/Header";
import { useWallet } from "@/wallets/wallet-selector";
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-obitron" });

export default function Home() {
  const { signedAccountId, viewMethod, callMethod } = useWallet()
  const [loggedIn, setLoggedIn] = useState(false);
  
  
  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);
 
  if(!loggedIn){
    window.location.href="/login";
  }

  return (
    <main>
      <Header />

      <h1 className={`${orbitron.variable}`}>PARTYNGO</h1>

      <div className="mt-10">
        <a href="/game">
          <h2>start new game</h2>
        </a>
        <a href="/game/join">
          <h2 className="mt-10">join existing game</h2>
        </a>
      </div>
    </main>
  );
}
