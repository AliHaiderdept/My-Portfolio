"use client";

import { useRef, useState } from "react";

/**
 * Mouse-follow 3D tilt. Har card is ke andar wrap hota hai taake
 * hover par card real depth ke sath ghoome.
 */
export default function Tilt3D({ children, className = "", max = 9, glare = true }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (event) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 2 * max;
    const rotateX = -(py - 0.5) * 2 * max;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px)`);
    setGlarePos({ x: px * 100, y: py * 100, opacity: 0.16 });
  };

  const handleLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setGlarePos((current) => ({ ...current, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      className={`tilt-3d ${className}`.trim()}
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}

      {glare && (
        <span
          className="tilt-3d-glare"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 159, 252, 0.9), transparent 55%)`
          }}
        />
      )}
    </div>
  );
}
