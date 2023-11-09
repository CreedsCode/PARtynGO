import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

import Header from "../components/Header";

export default function Lobby() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lobbyCode = queryParams.get("code");
  const lobbyName = queryParams.get("name");

  const playerNames = ["Seppe", "Olivier", "Owen", "Darcio", "Daniel"];

  return (
    <>
      <Header />
      <div className="container mx-auto px-3">
        <h1 className="mt-3">LOBBY</h1>
        <div className="max-w-4xl w-full mt-10 rounded-2xl bg-white/10 backdrop-blur-2xl p-4">
          <h2>Lobby code: {lobbyCode}</h2>
          <h2>Lobby name: {lobbyName}</h2>
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
            <a href="/game/:gameID">
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
    Start Game
  </button></a>
          </div>
        </div>
      </div>
    </>
  );
}
