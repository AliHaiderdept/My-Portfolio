"use client";

import { motion } from "framer-motion";

/**
 * 3D reveal wrapper: element depth ke sath scroll par upar aata hai.
 */
export default function Reveal({ children, delay = 0, className = "", y = 42, rotate = 9 }) {
  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1100 }}
      initial={{ opacity: 0, y, rotateX: rotate, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
