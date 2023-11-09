"use client";

import React from "react";

import Header from "@/components/Header";

import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Lobby() {
  const { id } = useParams();

  const playerNames = ["Seppe", "Olivier", "Owen", "Darcio", "Daniel"];

  return (
    <>
      <Header />
      <div className="container mx-auto px-3">
        <h1 className="mt-3">GAME NAME</h1>
        <div className="max-w-4xl w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-4">
          <h2 className="my-5">Send this link to your friends:</h2>

          <div className="flex flex-row items-center justify-start mt-2 bg-black/50 text-purple-500 rounded px-4 py-3 font-bold">
            <div className="flex-1 text-left">http://party.ngo/game/{id}</div>
            <Image src="/copy.svg" width={20} height={20} />
          </div>

          <br />
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Who's playing:</h3>
            <br />
            <ul className="grid grid-cols-2 gap-2">
              {playerNames.map((player, index) => (
                <li
                  key={index}
                  className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                  {player}
                </li>
              ))}
            </ul>
            <br />
            <a href={`/game/${id}/play`}>
              <button>Let's go!</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
