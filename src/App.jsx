import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import TechDNA from "./TechDNA.jsx";
import Contact from "./Contact.jsx";
import Quote from "./Quote.jsx";
import SilkBackground from "./SilkBackground.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import Footer from "./Footer.jsx";
function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    const glowTargets = Array.from(document.querySelectorAll("section .glass"));

    if (!sections.length) {
      return;
    }

    const headingBySection = new Map();

    sections.forEach((section) => {
      section.classList.add("section-drop-init");
      const heading = section.querySelector("h2");

      if (heading) {
        heading.classList.add("heading-drop-init");
        headingBySection.set(section, heading);
      }
    });

    glowTargets.forEach((target) => {
      target.classList.add("pointer-glow-target");
      target.style.setProperty("--pointer-x", "50%");
      target.style.setProperty("--pointer-y", "50%");
    });

    const handlePointerMove = (event) => {
      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      target.style.setProperty("--pointer-x", `${x}px`);
      target.style.setProperty("--pointer-y", `${y}px`);
    };

    const handlePointerEnter = (event) => {
      event.currentTarget.classList.add("pointer-glow-active");
    };

    const handlePointerLeave = (event) => {
      event.currentTarget.classList.remove("pointer-glow-active");
    };

    glowTargets.forEach((target) => {
      target.addEventListener("mousemove", handlePointerMove);
      target.addEventListener("mouseenter", handlePointerEnter);
      target.addEventListener("mouseleave", handlePointerLeave);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          const heading = headingBySection.get(section);

          if (entry.isIntersecting) {
            section.classList.remove("section-drop-active");
            if (heading) {
              heading.classList.remove("heading-drop-active");
            }

            // Force reflow so animation restarts each time section enters viewport.
            void section.offsetWidth;
            section.classList.add("section-drop-active");

            if (heading) {
              void heading.offsetWidth;
              heading.classList.add("heading-drop-active");
            }
          } else {
            section.classList.remove("section-drop-active");
            if (heading) {
              heading.classList.remove("heading-drop-active");
            }
          }
        });
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();

      glowTargets.forEach((target) => {
        target.removeEventListener("mousemove", handlePointerMove);
        target.removeEventListener("mouseenter", handlePointerEnter);
        target.removeEventListener("mouseleave", handlePointerLeave);
        target.classList.remove("pointer-glow-target", "pointer-glow-active");
        target.style.removeProperty("--pointer-x");
        target.style.removeProperty("--pointer-y");
      });

      sections.forEach((section) => {
        section.classList.remove("section-drop-init", "section-drop-active");

        const heading = headingBySection.get(section);
        if (heading) {
          heading.classList.remove("heading-drop-init", "heading-drop-active");
        }
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="skills-projects-row">
        <Projects />
        <Skills />
      </div>
       <Dashboard />
      <TechDNA />
      <Contact />
      <Quote />
      <Footer />
      <SilkBackground />
    </>
  );
 
}

export default App;