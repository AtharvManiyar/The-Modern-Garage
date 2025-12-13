import React from "react";
import { motion } from "motion/react";
import { FaMotorcycle } from "react-icons/fa";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-black text-orange-400 flex flex-col justify-center items-center gap-6"
    >
      {/* Title */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold tracking-wide drop-shadow-[0_0_20px_rgba(255,165,0,0.5)]"
      >
        The Modern Garage
      </motion.h1>

      {/* Motorcycle Animation */}
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <FaMotorcycle className="text-7xl text-orange-500 drop-shadow-[0_0_20px_rgba(255,100,0,0.6)]" />
      </motion.div>

      {/* Loading text */}
      <motion.h3
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-white text-xl tracking-wide"
      >
        Loading...
      </motion.h3>

      {/* Circular Loader */}
      <motion.div
        className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </motion.div>
  );
};

export default Loading;
