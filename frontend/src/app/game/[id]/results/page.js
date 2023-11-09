import React from "react";

import Header from "@/components/Header";

export default function GameResults() {
  return (
    <>
      <Header />

      <h1 className="text-2xl">THE RESULTS ARE IN!</h1>

      <br />
      <div className="flex flex-col items-center">
        <div className="w-2/3 ">
          <p>
            So it's 22:10, and Der_CEO's like, "Sleep is for the weak, let's
            ride the night out like we're in a teen vampire flick."{" "}
          </p>
          <br />
          <p>
            Cut to 23:15, Seppe's macking on a Brazilian girl like he's
            auditioning for a telenovela, scoring a spicy smooch that probably
            had more drama than a soccer match.
          </p>
          <br />
          <p>
            Flash forward to 23:48, Daniel's feeling generous (or is it
            buzzed?), and he's throwing cash around for another round like he
            just won the lottery—all singles, though, 'cause we keepin' it
            classy.
          </p>
          <br />
          <p>
            Now it's 01:21, and Owen's peacing out of the club like Cinderella
            if she ditched her slipper on purpose. "Gotta beat the Uber surge,"
            he says, probably.
          </p>
          <br />
          <p>
            Then at the crack of dawn, 05:45, Olivier's on a covert ops mission
            back home, checking on his van like it's his firstborn child. "Did I
            leave the headlights on?" Spoiler: he didn't. But did he ever find
            his keys? That's a story for another day.
          </p>
        </div>

        <div className="my-10">
          <a href="/game">
            <button>Play again!</button>
          </a>
        </div>
      </div>
    </>
  );
}
