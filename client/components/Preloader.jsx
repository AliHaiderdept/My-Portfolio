"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const loadingStages = {
  10: "Resources loading...",
  20: "Adding components",
  30: "Formatting structure",
  40: "Calling effects",
  50: "Loading assets",
  60: "Grounding links",
  70: "Bypassing features",
  80: "Securing website to you",
  90: "Wait a moment..",
};

const loadingDelay = 250;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setProgress((currentProgress) => {
        const nextProgress = Math.min(currentProgress + 10, 100);

        if (nextProgress === 100) window.clearInterval(intervalId);

        return nextProgress;
      });
    }, loadingDelay);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress !== 100 || !welcomeRef.current) return undefined;

    const welcomeAnimation = gsap.fromTo(
      welcomeRef.current,
      { opacity: 0, filter: "blur(18px)", scale: 0.92 },
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
    const hideTimeout = window.setTimeout(() => setVisible(false), 1500);

    return () => {
      welcomeAnimation.kill();
      window.clearTimeout(hideTimeout);
    };
  }, [progress]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6 text-ink">
      {progress === 100 ? (
        <div
          ref={welcomeRef}
          className="font-archivo-black text-center text-5xl uppercase tracking-[0.08em] text-white sm:text-7xl"
        >
          Welcome
        </div>
      ) : (
        <>
          <div className="font-geist-mono text-center text-sm uppercase tracking-[0.2em] text-muted">
            {loadingStages[progress] ?? "Preparing..."}
          </div>
          <div className="mt-8 w-full max-w-sm">
            <div
              aria-hidden="true"
              className="h-px w-full bg-white/20"
            >
              <span
                className="block h-[2px] bg-white transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between font-geist-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}