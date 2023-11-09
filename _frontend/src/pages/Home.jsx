import { useState } from "react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header size={200} />

      <br />
      <br />

      <h1>welcome</h1>

      <br />
      <br />
      <br />
      <br />

      <a href="/createGame">
        <h2>start new game</h2>
      </a>
    </>
  );
}

export default Home;
