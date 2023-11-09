"use client";

import React from "react";

import Header from "@/components/Header";

import { useRouter } from "next/router";
import { useParams } from "next/navigation";

export default function Lobby() {
  const { id } = useParams();

  const playerNames = ["Seppe", "Olivier", "Owen", "Darcio", "Daniel"];

  return (
    <>
      <Header />
      <div className="container mx-auto px-3">
        <h1 className="mt-3">LOBBY</h1>
        <div className="max-w-4xl w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-4">
          <h2>Lobby code: {id}</h2>
          <h2>Lobby name: 'we'</h2>
          <br />
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2">Player List:</h3>
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
            <a href={`/game/${id}`}>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
                Start Game
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
