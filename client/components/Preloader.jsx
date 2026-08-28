"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Dither = dynamic(() => import("./Dither"), { ssr: false });

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const started = performance.now();
    const total = 2400;

    let frame = 0;

    const tick = () => {
      const elapsed = performance.now() - started;
      const value = Math.min(100, Math.round((elapsed / total) * 100));
      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setHidden(true), 320);
      }
    };

    frame = requestAnimationFrame(tick);
    document.body.classList.add("is-loading");

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (hidden) document.body.classList.remove("is-loading");
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className={`preloader ${progress >= 100 ? "preloader-out" : ""}`.trim()}>
      <div className="preloader-canvas">
        <Dither
          waveColor={[0.5529411764705883, 0.3176470588235294, 0.6235294117647059]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.2}
          colorNum={4}
          waveAmplitude={0.21}
          waveFrequency={10}
          waveSpeed={0.04}
        />
      </div>

      <div className="preloader-content">
        <div className="preloader-kicker">ALI HAIDER</div>
        <h2>Loading portfolio</h2>

        <div className="loader-track">
          <span style={{ width: `${progress}%` }} />
        </div>

        <p>
          Preparing the experience… <strong>{progress}%</strong>
        </p>
      </div>
    </div>
  );
}
