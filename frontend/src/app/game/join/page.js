"use client";

import React, { useState } from "react";

import Header from "@/components/Header";

export default function JoinGame() {
  const [gameCode, setGameCode] = useState(""); // Use gameCode state to store the entered game code

  const handleChange = (event) => {
    setGameCode(event.target.value);
  };

  const handleJoin = () => {
    // You can add additional validation for the game code if needed
    if (gameCode.trim() !== "") {
      // Navigate to the Lobby component with the provided game code
      window.location.href = `/lobby?code=${gameCode}`;
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-3 max-w-4xl">
        <h1 className="mt-3">JOIN GAME</h1>

        <div className=" w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-4">
          <h2>Enter the game code to join!</h2>
          <br />

          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Game Code"
              value={gameCode}
              onChange={handleChange}
              className="bg-white/30 font-bold rounded-xl p-2 w-full mr-3 px-3"
            />
            <button className="text-white" onClick={handleJoin}>
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
