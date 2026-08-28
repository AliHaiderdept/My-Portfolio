"use client";

import { ArrowDownRight, Download, Boxes } from "lucide-react";
import Reveal from "./Reveal";
import TextLoop from "./TextLoop";

export default function Hero() {
  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-shell">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <Reveal className="hero-copy">
          <span className="eyebrow">
            <Boxes size={15} /> Full-Stack Developer
          </span>

          <p className="hero-fancy">Hey, I&apos;m</p>

          <h1 className="hero-title">
            <span className="hero-title-layer layer-back" aria-hidden="true">
              Ali Haider
            </span>
            <span className="hero-title-layer layer-mid" aria-hidden="true">
              Ali Haider
            </span>
            <span className="hero-title-layer layer-front">Ali Haider</span>
          </h1>

          <p className="hero-role">
            <TextLoop />
          </p>

          <p className="hero-description">
            BSCS student in Lahore, Pakistan, building scalable backends and responsive web applications with clean,
            modular code.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowDownRight size={17} />
            </a>
            <a className="button button-glass" href="/Ali-Haider-Resume.pdf" download>
              Download Resume <Download size={16} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>2+</strong>
              <span>Years building</span>
            </div>
            <div className="hero-stat">
              <strong>20+</strong>
              <span>Technologies</span>
            </div>
            <div className="hero-stat">
              <strong>Lahore</strong>
              <span>Pakistan</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}
