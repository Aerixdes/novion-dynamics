"use client";
import { motion } from "framer-motion";
export default function Page(){
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#181818] text-white">
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="text-4xl font-semibold">
        Novion Dynamics
      </motion.h1>
      <p className="mt-4 text-gray-300">Intelligent LiDAR and Perception Systems for Automotive Safety.</p>
    </main>
  );
}
