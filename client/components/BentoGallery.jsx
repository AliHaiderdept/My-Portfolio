
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger, useGSAP);

const images = [
  "/images/about-1.jpg",
  "/images/about-2.jpg",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
  "/images/about-5.jpg",
  "/images/about-6.jpg",
  "/images/about-7.jpg",
  "/images/about-8.jpg",
];

export default function BentoGallery() {
  const galleryRef = useRef(null);

  useGSAP(
    () => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const items = gallery.querySelectorAll(".bento-item");
      let flipContext;

      const createAnimation = () => {
        flipContext?.revert();
        gallery.classList.remove("gallery-final");

        flipContext = gsap.context(() => {
          gallery.classList.add("gallery-final");

          const state = Flip.getState(items);

          gallery.classList.remove("gallery-final");

          const flip = Flip.to(state, {
            duration: 1,
            ease: "power3.inOut",
            transformOrigin: "center center",
            absolute: true,
          });

          gsap.timeline({
            scrollTrigger: {
              trigger: gallery,
              start: "center center",
              end: "+=100%",
              scrub: 1,
              pin: gallery.parentElement,
              invalidateOnRefresh: true,
            },
          }).add(flip);
        }, gallery);
      };

      createAnimation();

      return () => flipContext?.revert();
    },
    { scope: galleryRef }
  );

  return (
    <section className="bento-section">
      <div className="bento-gallery" ref={galleryRef}>
        {images.map((src, index) => (
          <div className="bento-item" key={src}>
            <img
              src={src}
              alt={`About gallery image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
