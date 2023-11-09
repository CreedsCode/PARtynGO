"use client";
import React, { useState } from "react";
import Header from "@/components/Header";

import Link from "next/link";

function CreateGameForm({ handleChange, gameName, generateLobbyCode }) {
  return (
    <>
      <h2>Give your game a name to begin!</h2>
      <br />

      <div className="flex flex-row">
        <input
          type="text"
          placeholder="Big night out!"
          value={gameName}
          onChange={handleChange}
          className="bg-white/30 font-bold rounded-xl p-2 w-full mr-3 px-3"
        />
        <button onClick={generateLobbyCode} className="text-white">
          Create
        </button>
      </div>
    </>
  );
}

function GameCreated({ lobbyCode, gameName }) {
  console.log("lobbyCode", lobbyCode);
  return (
    <>
      <h2>New game created!</h2>
      <br />
      <Link href={`/game/${lobbyCode}/lobby?name=${gameName}`}>
        <button>Join the lobby!</button>
      </Link>
    </>
  );
}

export default function CreateGame() {
  const [gameName, setGameName] = useState("");
  const [lobbyCode, setLobbyCode] = useState(""); // Add lobbyCode state

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  const generateLobbyCode = () => {
    console.log("Creating game...");
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setLobbyCode(code);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-3 text-center max-w-4xl ">
        <h1 className="mt-3">CREATE GAME</h1>

        <div className="w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-4">
          {lobbyCode ? (
            <GameCreated lobbyCode={lobbyCode} gameName={gameName} />
          ) : (
            <CreateGameForm
              handleChange={handleChange}
              gameName={gameName}
              generateLobbyCode={generateLobbyCode}
            />
          )}
        </div>
      </div>
    </>
  );
}
