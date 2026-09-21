"use client";

import { useEffect, useRef } from "react";

const KEY_SCROLL = {
  ArrowDown: 0.82,
  ArrowUp: -0.82,
  PageDown: 0.92,
  PageUp: -0.92,
  Home: -1,
  End: 1
};

export default function CursorScroll() {
  const cursorRef = useRef(null);
  const pointerY = useRef(typeof window === "undefined" ? 0.5 : window.innerHeight / 2);
  const frameRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    const moveCursor = (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      pointerY.current = event.clientY;
      cursor.classList.toggle("cursor-hover", Boolean(event.target.closest("a, button, input, textarea, label")));
    };

    const scrollFromPointer = () => {
      const edgeDistance = pointerY.current - window.innerHeight / 2;
      const intensity = Math.abs(edgeDistance) / (window.innerHeight / 2);

      if (intensity > 0.18) {
        window.scrollBy({ top: Math.sign(edgeDistance) * intensity * 11, behavior: "auto" });
      }

      frameRef.current = window.requestAnimationFrame(scrollFromPointer);
    };

    const stopWheelScroll = (event) => {
      event.preventDefault();
    };

    const scrollFromKeyboard = (event) => {
      const amount = KEY_SCROLL[event.key];
      if (amount === undefined) return;

      event.preventDefault();
      if (event.key === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (event.key === "End") {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
      } else {
        window.scrollBy({ top: amount * window.innerHeight, behavior: "smooth" });
      }
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("wheel", stopWheelScroll, { passive: false });
    window.addEventListener("keydown", scrollFromKeyboard);
    frameRef.current = window.requestAnimationFrame(scrollFromPointer);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("wheel", stopWheelScroll);
      window.removeEventListener("keydown", scrollFromKeyboard);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <span ref={cursorRef} className="global-cursor" aria-hidden="true" />;
}
