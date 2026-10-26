"use client";
import SplitText from "../SplitText";
import ParticleSphereCanvas from "../ParticleSphere";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
export default function Hero() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current.querySelectorAll(".side-content > div"), {
      y: 60,
      opacity: 0,
      delay: 1.55,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return (
    
    <section
    ref={sectionRef}
      id="home"
      className="isolate relative flex min-h-screen items-center overflow-hidden px-6 md:px-12"
    >
      <div className="absolute inset-0 z-0 h-full w-full">
        <ParticleSphereCanvas />
      </div>
     
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-2 text-center">
        <SplitText
          text="Ali Haider"
          tag="h1"
          splitType="chars"
          textAlign="center"
          delay={80}
          className="font-ali-haider mt-0 font-bold  leading-none text-white "
        />
        <p className="subheading mt-4 text-sm ">I design and develop digital experiences that make an impact.</p>
        <p className="subtitle font-geist-mono">Code with purpose. Design with personality.</p>
      </div>
      <div className="side-content absolute inset-x-6 bottom-8 z-10 flex items-end justify-between md:inset-x-12">
        <div className="left-content">
          <p className="city uppercase  font-bold">Based in Lahore</p>
          <p className="country  uppercase text-center">Pakistan</p>
        </div>
        <div className="right-content">
          <p className="occupation uppercase  font-bold">Full stack dev</p>
          <p className="occupation-2 uppercase text-center ">& ML Engineer</p>
        
        </div>
      </div>
      


    </section>
  );
}
