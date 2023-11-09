import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";

import "./Modal.css";

const mockPredictions = [
  {
    title: "Sing-Along Star",
    description: "Belts out every song on the radio, even the ads.",
    emoji: "🎤",
  },
  {
    title: "Snack Attack",
    description:
      "can't resist opening every snack in the car within the first hour.",
    emoji: "🍿",
  },
  {
    title: "Navigation Novice",
    description: "insists on navigating and gets the group slightly lost.",
    emoji: "🧭",
  },
  {
    title: "Caffeine Connoisseur",
    description: "demands pit stops for coffee at every service station.",
    emoji: "☕",
  },
  {
    title: "Photo Frenzy",
    description: "insists on taking selfies at every scenic spot.",
    emoji: "📸",
  },
  {
    title: "Restroom Roulette",
    description:
      "has to use the bathroom right after the car gets back on the highway.",
    emoji: "🚽",
  },
  {
    title: "Gas Gauge Gambler",
    description: "lets the fuel run dangerously low claiming, 'I know my car.'",
    emoji: "⛽",
  },
  {
    title: "License Plate Bingo",
    description:
      "spots out-of-state license plates and shouts them out excitedly.",
    emoji: "🚗",
  },
  {
    title: "Car DJ",
    description: "keeps switching the music tracks halfway through.",
    emoji: "🎶",
  },
  {
    title: "Roadside Attraction Advocate",
    description: "pleads to stop at every kitschy roadside attraction.",
    emoji: "🗺️",
  },
  {
    title: "Pit Stop Pro",
    description: "is the quickest during restroom and snack breaks.",
    emoji: "⏱️",
  },
  {
    title: "Karaoke Kraziness",
    description: "starts an impromptu karaoke session in the car.",
    emoji: "🎙️",
  },
  {
    title: "Deep Thoughts Driver",
    description: "gets philosophical, initiating deep conversations.",
    emoji: "💭",
  },
  {
    title: "Sleepy Co-Pilot",
    description:
      "falls asleep within minutes of their 'shift' as the designated co-pilot.",
    emoji: "😴",
  },
  {
    title: "Stargazing Enthusiast",
    description: "insists on stopping the car for a stargazing break at night.",
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
    description: "gives unsolicited driving advice from the backseat.",
    emoji: "🗣️",
  },
  {
    title: "Lunchtime Leader",
    description:
      "decides on an unusual place for lunch, leading to a memorable meal.",
    emoji: "🍽️",
  },
  {
    title: "Animal Spotter",
    description: "gets overly excited about wildlife seen from the window.",
    emoji: "🐾",
  },
  {
    title: "Memory Maker",
    description:
      "insists on a group picture at every state or city sign crossed.",
    emoji: "📷",
  },
];

const mockPlayers = ["Olivier", "Seppa", "Dercio", "Daniel", "Owen"];

// Animation stuff
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Modal Stuff
const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100vh" },
};

const Modal = ({ isOpen, onClose, prediction }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop "
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <>
              <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 p-[2px] rounded-2xl">
                <div className="bg-black p-9 rounded-2xl">
                  <motion.img
                    src="/close.svg"
                    className="close-button p-2"
                    alt="Close"
                    width="32"
                    height="32"
                    animate={{
                      opacity: [0, 0.3, 0.8],
                      scale: [0, 1.2, 1],
                      rotate: [0, 270, 0],
                    }}
                    onClick={onClose}
                  />

                  <p className="text-5xl mb-1">{prediction.emoji}</p>
                  <p className="text-xl font-bold">{prediction.title}</p>
                  <p className="text-sm text-white/80 mt-2">
                    {prediction.description}
                  </p>

                  <h2 className="my-5">Who did you spot doing this?</h2>

                  <motion.ul
                    className="grid grid-cols-2 gap-5 mt-10"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    {mockPlayers.map((player, index) => {
                      return (
                        <motion.li key={index} variants={item}>
                          <div className=" rounded-full bg-white/20 p-1">
                            {player}
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  <button className="mt-10">Confirm</button>
                </div>
              </div>
            </>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function BingoSquare({ prediction }) {
  return (
    <div className="bg-black/50 p-3 rounded-xl h-[110px] flex flex-col items-center justify-center border-2 border-white/30">
      <p className="text-2xl mb-1">{prediction.emoji}</p>
      <p className="text-sm">{prediction.title}</p>
    </div>
  );
}

function getRandomRecords(array, num) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function GameRunning() {
  let { gameID } = useParams();

  const [selectedPrediction, setSelectedPrediction] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const predictions = getRandomRecords(mockPredictions, 9);

  function select(prediction) {
    setSelectedPrediction(prediction);
    toggleModal();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h1>SF Summer Roadtrip</h1>

        <motion.ul
          className="grid grid-cols-3 grid-rows-3 gap-4 mt-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {predictions.map((prediction, index) => (
            <motion.li
              key={index}
              variants={item}
              className="item"
              onClick={() => {
                select(prediction);
              }}
            >
              <BingoSquare prediction={prediction} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        prediction={selectedPrediction}
      />
    </>
  );
}
