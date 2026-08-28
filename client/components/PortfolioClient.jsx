"use client";

import About from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Hero from "./Hero";
import Preloader from "./Preloader";
import Projects from "./Projects";
import Skills from "./Skills";

export default function PortfolioClient() {
  return (
    <>
      <Preloader />

      <main className="site-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
