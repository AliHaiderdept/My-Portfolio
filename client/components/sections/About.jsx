
"use client";
import BentoGallery from "../BentoGallery";
import { useRef } from "react";
import { useSectionReveal } from "../useSectionReveal";
export default function About() {
    const sectionRef = useRef(null);
    useSectionReveal(sectionRef, ".about-content");
  return (
     
   <>

		<main className="relative z-10">
            <BentoGallery />
		<section ref={sectionRef} id="about" className="title-section">
			<div className="title-inner mx-10 mt-12 flex items-start justify-between gap-8">
				<div className="title-index  font-geist-sans shrink-0" aria-hidden="true">01</div>
				<div className="title-copy flex-1">
					<span className="title-label font-geist-sans">About</span>
					<p className="title-title">Converting ideas <br /> into designated reality.</p>
				</div>
			</div>

            <div className="about-content mx-4 sm:mx-6 md:mx-10 lg:mx-16 mt-10 grid grid-cols-1 md:grid-cols-[0.8fr_1.5fr] gap-6 lg:gap-10 items-stretch">

  {/* Left Content */}
  <div className="flex flex-col gap-6 font-archivo-black">
    <div className="bg-grey-500 px-10 py-10 border border-white/20">
      <p className="text-neutral-500 uppercase text-sm">Location</p>
      <p className="text-white uppercase">Lahore, Pakistan</p>
    </div>

    <div className="bg-grey-500 px-10 py-10 border border-white/20">
      <p className="text-neutral-500 uppercase text-sm">Focus</p>
      <p className="text-white uppercase">
        Full-stack and AI/ML Engineering
      </p>
      <p className="font-geist-mono text-slate-500">Interactive UI/UX, Backend and API Interfaces with trained data assests. </p>
    </div>

    <div className="bg-grey-500 px-10 py-10 border border-white/20">
      <p className="text-neutral-500 uppercase text-sm">Education</p>
      <p className="text-white uppercase">
        University of Punjab
        <span className="text-slate-500 text-sm mx-3 border border-white/30 px-2 py-1">
         current
        </span>
      </p>
      <p className="text-slate-500 mt-4 font-geist-mono">
          Bachelor&apos;s in Computer Science | (2024 - 28)
      </p>
    </div>
  </div>

  {/* Right Content */}
  <div className="flex flex-col gap-6">
    <div className="bg-grey-600 p-10 h-full font-archivo-black">
      <h2 className="text-white text-2xl uppercase ">About Me</h2>
      <p className="text-neutral-400 mt-4 font-geist-mono">
        I’m currently pursuing a Bachelor’s degree in <strong>Computer Science</strong>,
         with a strong focus on full-stack software development 
         and modern web technologies.<br /> 
         I specialize in building responsive,
          scalable applications using<strong> React, Next.js, Node.js, Express.js, 
          and database technologies</strong>, transforming ideas into functional digital solutions
           with an emphasis on performance, usability, and clean architecture.<br />

           Beyond <strong>full-stack development</strong>,
           I’m expanding my expertise in <strong>AI/ML engineering</strong>,
          focusing on dataset preparation, model training, 
          predictive analytics, and intelligent system development. 
          I’m particularly interested in exploring how data-driven approaches
           and machine learning can solve complex problems, identify patterns,
            and support future-oriented decision-making.<br />
            Alongside these fields, I’m strengthening my 
            understanding of <strong>cybersecurity</strong>, secure software practices, 
            and system reliability. My long-term goal is to combine <strong>full-stack engineering</strong>, <strong>artificial intelligence</strong>, and
            security principles to build innovative, intelligent,
            and dependable software solutions that create real-world impact.
      </p>
    </div>
  </div>

</div>

			</section>
			</main>
			</>
  );
}
