import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const mockPredictions = [
  {
    title: "Sing-Along Star",
    description: "[Name] belts out every song on the radio, even the ads.",
    emoji: "🎤",
  },
  {
    title: "Snack Attack",
    description:
      "[Name] can't resist opening every snack in the car within the first hour.",
    emoji: "🍿",
  },
  {
    title: "Navigation Novice",
    description:
      "[Name] insists on navigating and gets the group slightly lost.",
    emoji: "🧭",
  },
  {
    title: "Caffeine Connoisseur",
    description:
      "[Name] demands pit stops for coffee at every service station.",
    emoji: "☕",
  },
  {
    title: "Photo Frenzy",
    description: "[Name] insists on taking selfies at every scenic spot.",
    emoji: "📸",
  },
  {
    title: "Restroom Roulette",
    description:
      "[Name] has to use the bathroom right after the car gets back on the highway.",
    emoji: "🚽",
  },
  {
    title: "Gas Gauge Gambler",
    description:
      "[Name] lets the fuel run dangerously low claiming, 'I know my car.'",
    emoji: "⛽",
  },
  {
    title: "License Plate Bingo",
    description:
      "[Name] spots out-of-state license plates and shouts them out excitedly.",
    emoji: "🚗",
  },
  {
    title: "Car DJ",
    description: "[Name] keeps switching the music tracks halfway through.",
    emoji: "🎶",
  },
  {
    title: "Roadside Attraction Advocate",
    description: "[Name] pleads to stop at every kitschy roadside attraction.",
    emoji: "🗺️",
  },
  {
    title: "Pit Stop Pro",
    description: "[Name] is the quickest during restroom and snack breaks.",
    emoji: "⏱️",
  },
  {
    title: "Karaoke Kraziness",
    description: "[Name] starts an impromptu karaoke session in the car.",
    emoji: "🎙️",
  },
  {
    title: "Deep Thoughts Driver",
    description: "[Name] gets philosophical, initiating deep conversations.",
    emoji: "💭",
  },
  {
    title: "Sleepy Co-Pilot",
    description:
      "[Name] falls asleep within minutes of their 'shift' as the designated co-pilot.",
    emoji: "😴",
  },
  {
    title: "Stargazing Enthusiast",
    description:
      "[Name] insists on stopping the car for a stargazing break at night.",
    emoji: "🌟",
  },
  {
    title: "Gadget Guru",
    description:
      "[Name]'s phone or camera battery dies from overuse before the first stop.",
    emoji: "🔋",
  },
  {
    title: "Backseat Driver",
    description: "[Name] gives unsolicited driving advice from the backseat.",
    emoji: "🗣️",
  },
  {
    title: "Lunchtime Leader",
    description:
      "[Name] decides on an unusual place for lunch, leading to a memorable meal.",
    emoji: "🍽️",
  },
  {
    title: "Animal Spotter",
    description:
      "[Name] gets overly excited about wildlife seen from the window.",
    emoji: "🐾",
  },
  {
    title: "Memory Maker",
    description:
      "[Name] insists on a group picture at every state or city sign crossed.",
    emoji: "📷",
  },
];

function BingoSquare({ square }) {
  return (
    <div className="bg-black/50 p-3 rounded-xl h-[110px] flex flex-col items-center justify-center border-2 border-white/30">
      <p className="text-2xl mb-1">{square.emoji}</p>
      <p className="text-sm">{square.title}</p>
    </div>
  );
}

function getRandomRecords(array, num) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function GameRunning() {
  let { gameID } = useParams();

  const squares = getRandomRecords(mockPredictions, 9);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h1>SF Summer Roadtrip</h1>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-10">
          {squares.map((square) => (
            <BingoSquare square={square} />
          ))}
        </div>
      </div>
    </>
  );
}
