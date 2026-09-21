
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["hero", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
];

export default function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    links.forEach(([id]) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isHome]);

  const go = (id) => {
    setOpen(false);

    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`top-nav ${
        scrolled ? "top-nav-scrolled" : ""
      } ${open ? "top-nav-open" : ""}`.trim()}
    >
      <div className="top-nav-inner">

        <Link href="/" className="nav-brand">
          <div className="nav-logo">
  <Image
    src="/logo/purplish cat logo.jpg"
    alt="Ali Haider Logo"
    fill
    sizes="50px"
    className="nav-logo-image"
    priority
  />
</div>

          <span className="nav-brand-text">
            Ali Haider
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={`nav-link ${
                isHome && active === id ? "active" : ""
              }`.trim()}
            >
              <span className="nav-link-face">{label}</span>
              <span className="nav-link-shadow">{label}</span>
            </button>
          ))}
        </nav>

        <div className="nav-tail">

          <a
            className="button button-glass nav-resume"
            href="/Ali Haider Resume.jpg"
            download
          >
            Resume
          </a>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </div>
    </header>
  );
}
