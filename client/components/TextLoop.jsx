"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack AI Assisted Developer",
  "AI/ML Learner",
  "API Integration & Monitoring",
  "Graphic Designer",
  "Motion Graphics Designer",
  "Cloud Infrastructure & Deployment",
  "Data Analytics & Management"
];

export default function TextLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % roles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="role-loop">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 20, rotateX: -55 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 55 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
