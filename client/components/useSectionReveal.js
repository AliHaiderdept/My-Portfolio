"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useSectionReveal(sectionRef, contentSelector) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const title = section.querySelector(".title-inner");
      const titleParts = section.querySelectorAll(".title-inner > div");
      const content = contentSelector
        ? section.querySelector(contentSelector)
        : null;

      if (title && titleParts.length) {
        gsap.from(titleParts, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (content) {
        gsap.fromTo(
          content,
          {
            filter: "blur(12px)",
            opacity: 0,
            y: 30,
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );
}