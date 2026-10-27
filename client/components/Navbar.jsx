
"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <nav className="navbar-shell fixed left-1/2 top-5 z-50 flex -translate-x-1/2">
      {links.map(({ label, href }, index) => {
        const id = href.slice(1);
        const isActive = active === id;

        return (
          <a
            key={id}
            href={href}
            aria-current={isActive ? "location" : undefined}
            className={`navbar-link relative flex-1 text-center ${
              isActive ? "text-white" : ""
            }`}
          >
            <span>{label}</span>

            <span className="ml-2 text-[9px] font-normal tracking-[0.08em] text-white/45">
              {String(index + 1).padStart(2, "0")}
            </span>
          </a>
        );
      })}

      {/* Smooth Progress Bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-11px] left-0 right-0 h-px bg-white/20"
      >
        <span
          className="absolute left-0 top-0 h-[2px] bg-white transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
}
