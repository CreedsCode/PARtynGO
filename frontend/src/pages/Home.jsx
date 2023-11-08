import { useState } from "react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header size={300} />

      <h1>welcome</h1>

      <br />
      <br />

      <a href="/createGame">
        <h2>start new game</h2>
      </a>
    </>
  );
}

export default Home;
