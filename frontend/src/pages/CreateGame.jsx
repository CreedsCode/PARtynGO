import React, { useState } from "react";

import "./Background.css";

export default function CreateGame() {
  const [gameName, setGameName] = useState("big night out");

  const handleChange = (event) => {
    setGameName(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div class="bm-pl">
        <div className="bm-pl__blob bm-pl__blob--r"></div>
        <div className="bm-pl__blob bm-pl__blob--g"></div>
        <div className="bm-pl__blob bm-pl__blob--b"></div>
      </div>
      <div class="bm-overlay"></div>

      <img
        src="/logo-pink.png"
        alt="logo"
        className="logo"
        width="200"
        height="200"
      />
      <h1 className="mt-3">CREATE GAME</h1>

      <div className="max-w-4xl w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-10">
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
          <button>create</button>
        </div>
      </div>
    </div>
  );
}
