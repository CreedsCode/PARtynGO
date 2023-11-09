import React from "react";
import { redirect, useParams } from "react-router-dom";

import Header from "../components/Header";

export default function GameResults() {
  let { gameID } = useParams();

  return (
    <>
      <Header />

      <h1 className="text-3xl font-bold underline">Results!</h1>

      <br />
      <p>results from openai</p>
    </>
  );
}
