"use client";
import React, { useState } from "react";

import Header from "@/components/Header";

export default function CreateGame() {
  const [gameName, setGameName] = useState("big night out");
  const [lobbyCode, setLobbyCode] = useState(""); // Add lobbyCode state

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  const generateLobbyCode = () => {
    const code = Math.random().toString(36).substr(2, 6).toUpperCase();
    setLobbyCode(code);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-3">
        <h1 className="mt-3">CREATE GAME</h1>

        <div className="max-w-4xl w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-4">
          <h2>Give your game a name to begin!</h2>
          <br />

          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Name"
              value={gameName}
              onChange={handleChange}
              className="bg-white/30 font-bold rounded-xl p-2 w-full mr-3 px-3"
            />
            <button onClick={generateLobbyCode} className="text-white">
              Create
            </button>
          </div>

          {lobbyCode && (
            <div>
              <p>Lobby Code: {lobbyCode}</p>
              {/* Pass the lobbyCode as a query parameter to the Lobby component */}
              <Link to={`/lobby?code=${lobbyCode}&name=${gameName}`}>
                Go to Lobby
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
