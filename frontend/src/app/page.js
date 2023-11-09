"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import react, { useState, useEffect } from "react";
import { Orbitron } from "next/font/google";
import Header from "@/components/Header";
import { useWallet } from "@/wallets/wallet-selector";
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-obitron" });

export default function Home() {
  const { signedAccountId, viewMethod, callMethod } = useWallet();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
  }, [signedAccountId]);

  if (!loggedIn) {
    //redirect("/login");
  }

  return (
    <main>
      <Header />

      <h1 className={`${orbitron.variable}`}>PARTYNGO</h1>

      <div className="w-full flex flex-col items-center justify-center px-10 ">
        <h3 className="text-3xl text-white mt-20 font-bold">
          Play, Predict, Party!
        </h3>
        <h3 className=" text-white/80 mt-5">
          Going on an night out, roadtrip, or other event with friends? Predict
          what will happen to win points, and a hilarious recap at the end!
        </h3>

        <Link
          href="/game"
          className="mt-12 w-[280px] p-2 text-2xl bg-white/10 rounded-full text-orange-400"
        >
          start new game
        </Link>
        <Link
          href="/game/join"
          className="mt-8 w-[280px] p-2 text-2xl bg-white/10 rounded-full text-purple-400"
        >
          join existing game
        </Link>
      </div>
    </main>
  );
}
