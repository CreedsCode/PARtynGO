"use client";

import React, { useState, useEffect } from "react";
import { redirect, useParams } from "react-router-dom";
import Header from "@/components/Header";
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
      "Can't resist opening every snack in the car within the first hour.",
    emoji: "🍿",
    confirmed: true,
  },
  {
    title: "Navigation Novice",
    description: "Insists on navigating and gets the group slightly lost.",
    emoji: "🧭",
    needsConfirming: true,
  },
  {
    title: "Caffeine Connoisseur",
    description: "Demands pit stops for coffee at every service station.",
    emoji: "☕",
  },
  {
    title: "Photo Frenzy",
    description: "Insists on taking selfies at every scenic spot.",
    emoji: "📸",
  },
  {
    title: "Restroom Roulette",
    description:
      "Has to use the bathroom right after the car gets back on the highway.",
    emoji: "🚽",
  },
  {
    title: "Gas Gauge Gambler",
    description: "Lets the fuel run dangerously low claiming, 'I know my car.'",
    emoji: "⛽",
  },
  {
    title: "License Plate Bingo",
    description:
      "Spots out-of-state license plates and shouts them out excitedly.",
    emoji: "🚗",
  },
  {
    title: "Car DJ",
    description: "Keeps switching the music tracks halfway through.",
    emoji: "🎶",
  },
  {
    title: "Roadside Attraction",
    description: "Pleads to stop at every kitschy roadside attraction.",
    emoji: "🗺️",
  },
  {
    title: "Pit Stop Pro",
    description: "Is the quickest during restroom and snack breaks.",
    emoji: "⏱️",
  },
  {
    title: "Karaoke Kraziness",
    description: "Starts an impromptu karaoke session in the car.",
    emoji: "🎙️",
  },
  {
    title: "Deep Thoughts",
    description: "Gets philosophical, initiating deep conversations.",
    emoji: "💭",
  },
  {
    title: "Sleepy Co-Pilot",
    description:
      "Falls asleep within minutes of their 'shift' as the designated co-pilot.",
    emoji: "😴",
  },
  {
    title: "Stargazer",
    description: "Insists on stopping the car for a stargazing break at night.",
    emoji: "🌟",
  },
  {
    title: "Gadget Guru",
    description: "Their phone battery dies from overuse before the first stop.",
    emoji: "🔋",
  },
  {
    title: "Backseat Driver",
    description: "Gives unsolicited driving advice from the backseat.",
    emoji: "🗣️",
  },
  {
    title: "Lunchtime Leader",
    description:
      "Decides on an unusual place for lunch, leading to a memorable meal.",
    emoji: "🍽️",
  },
  {
    title: "Animal Spotter",
    description: "Gets overly excited about wildlife seen from the window.",
    emoji: "🐾",
  },
  {
    title: "Memory Maker",
    description:
      "Insists on a group picture at every state or city sign crossed.",
    emoji: "📷",
  },
];

function getRandomRecords(array, num) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const predictions = getRandomRecords(mockPredictions, 9);

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
  const [selectedPlayer, setSelectedPlayer] = useState(null);

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

                  <h2 className="my-10">Who did you spot doing this?</h2>

                  <motion.ul
                    className="grid grid-cols-2 gap-5 mt-10"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    {mockPlayers.map((player, index) => {
                      return (
                        <motion.li
                          key={index}
                          variants={item}
                          onClick={() => setSelectedPlayer(index)}
                        >
                          <div
                            className={`font-bold rounded-full p-1 ${
                              selectedPlayer === index
                                ? " bg-orange-600"
                                : " bg-white/20"
                            }`}
                          >
                            {player}
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  <div className="h-[80px]">
                    {selectedPlayer && (
                      <button className="mt-10" onClick={onClose}>
                        Confirm
                      </button>
                    )}
                  </div>
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={`p-3 rounded-xl h-[110px] flex flex-col items-center justify-center border-2 ${
        prediction.confirmed
          ? "bg-green-500/40 border-green-500 font-bold"
          : `bg-black/50 ${
              prediction.needsConfirming
                ? "border-yellow-500"
                : "border-transparent"
            }`
      }`}
    >
      <p className="text-2xl mb-1">{prediction.emoji}</p>
      <p className="text-sm">{prediction.title}</p>
    </div>
  );
}

export default function GameRunning({ params }) {
  let { gameID } = useParams();

  const [selectedPrediction, setSelectedPrediction] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  function select(prediction) {
    setSelectedPrediction(prediction);
    toggleModal();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <h1>SAN FRAN ROADTRIP</h1>

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

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }} // 2 second delay, 1 second duration
        className="my-10"
      >
        <a href={`/game/${gameID}/results`}>Finish Game</a>
      </motion.button>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        prediction={selectedPrediction}
      />
    </>
  );
}
