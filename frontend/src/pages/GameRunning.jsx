import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function BingoSquare(props) {
  return (
    <div className="bg-black/50 p-3 rounded font-bold h-[90px] flex flex-row items-center justify-center border-2 border-white/30">
      {props.text}
    </div>
  );
}

const mockSquares = [];

export default function GameRunning() {
  let { gameID } = useParams();

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h1>GameRunning {gameID}</h1>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-10">
          <BingoSquare text="1" />
          <BingoSquare text="2" />
          <BingoSquare text="2" />
          <BingoSquare text="2" />
        </div>
      </div>
    </>
  );
}
