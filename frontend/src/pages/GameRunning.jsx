import React from "react";
import { useParams } from "react-router-dom";

export default function GameRunning() {
  let { gameID } = useParams();

  return <div>GameRunning {gameID}</div>;
}
