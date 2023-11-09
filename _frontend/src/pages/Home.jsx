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
      git merge newvvv
      <a href="/createGame">
        <h2>start new game</h2>
      
      </a>
      <a href="/JoinGame">
        <h2 style={{ marginTop: "50px" }}>Join existing game</h2>
      </a>
    </>
  );
}

export default Home;
