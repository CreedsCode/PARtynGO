import React, { useState } from "react";

import Header from "../components/Header";

export default function CreateGame() {
  const [gameName, setGameName] = useState("big night out");

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-2">
        <h1 className="mt-3">CREATE GAME</h1>

        <div className="max-w-4xl w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-6">
          <h2>Give your game a name to begin!</h2>
          <br />

          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Name"
              value={gameName}
              onChange={handleChange}
              className="bg-white/30 font-bold rounded-xl p-2 w-full mr-5 px-3"
            />
            <button className="text-white">create</button>
          </div>
        </div>
      </div>
    </>
  );
}
