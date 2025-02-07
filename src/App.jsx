// App.jsx
// import React from 'react';
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import teddy from "./assets/teddy.png";
import "./App.css";

const TeddyBear = () => {
  const bearRef = useRef(null);

  useEffect(() => {
    // Modify GSAP animation to be gentler and not affect opacity
    gsap.to(bearRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <motion.div
      ref={bearRef}
      className="teddy-container"
      // Remove the scale animation from Framer Motion
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <img src={teddy} alt="Cute Teddy Bear" className="teddy-image" />
    </motion.div>
  );
};

const HeartFloat = () => {
  return (
    <motion.div
      className="heart"
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1.2, 1],
        y: [0, -500],
        opacity: [1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
      style={{
        position: "absolute",
        left: `${Math.random() * 100}vw`,
        bottom: "0",
      }}
    >
      ❤️
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="app">
      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Happy Teddy Day, Katha! 🧸
        </motion.h1>

        <TeddyBear />

        {[...Array(12)].map((_, i) => (
          <HeartFloat key={i} />
        ))}

        <motion.div
          className="message"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3>Dear Katha,</h3>
          <p>Just like this teddy bear, I want to be by your side forever,</p>
          <p>Holding you close and keeping you warm with all my love! 🤗❤️</p>
          <p>❤️ Forever Yours</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
