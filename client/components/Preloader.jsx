"use client";

import CountUp from "./CountUp";
import { useState } from "react";


export default function Preloader() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-ink">
      <div className="font-geist-mono text-center text-sm uppercase tracking-[0.25em] text-muted">
        Loading...
      </div>
      <CountUp
        from={0}
        to={100}
        duration={1.5}
        startImmediately
        onEnd={() => setVisible(false)}
        className="mt-3 font-display text-6xl text-accent"
      />
      <span className="font-geist-mono text-accent">%</span>
    </div>
  );
}