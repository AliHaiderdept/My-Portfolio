"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useSectionReveal } from "../useSectionReveal";
import { RiGithubLine } from "react-icons/ri";
const projects = [
  {
    title: "Flipper Music",
    category: "Music platform",
    description: "A focused digital experience for discovering and enjoying music.",
    image: "/projects/flipper-music.png",
    tags: ["Next.js", "React", "UI/UX", "MongoDB", "API"],
    featured: true,
    github: "https://github.com/AliHaiderdept/flipper-music-project",
  },
  {
    title: "Glorymart",
    category: "E-commerce experience",
    description: "A clean shopping experience designed around simple product discovery.",
    image: "/projects/glorymart.png",
    tags: ["React", "Javascript", "Laravel","API Searches"],
    website: "https://project-glorymart-frontend-sigma.vercel.app/",
    github: "https://github.com/AliHaiderdept/project-glorymart-frontend",
  },
  {
    title: "Medixora Hospital",
    category: "Healthcare platform",
    description: "A practical interface for making healthcare information easier to access.",
    image: "/projects/medixora-hospital.png",
    tags: ["React.js", "Javascript", "Dashboard", "Laravel"],
    website: "https://medixora-hospital.vercel.app/",
    github: "https://github.com/AliHaiderdept/medixora-frontend",
  },
  {
    title: "Sutra Design",
    category: "Visual identity",
    description: "A considered design system bringing a distinctive visual direction to life.",
    image: "/projects/sutra-design.png",
    tags: ["Branding", "Design", "Frontend"],
    github: "https://github.com/AliHaiderdept/tana-Textile-Design-UI",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, ".projects-content");

  return (
    <>
		<main className="relative z-10">
    <section ref={sectionRef} id="projects" className="title-section">
			<div className="title-inner mx-4 sm:mx-6 md:mx-12 mt-12 grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[60px_minmax(0,1fr)] gap-4 sm:gap-8 lg:gap-12 items-start">

  <div
    className="title-index font-geist-sans shrink-0"
    aria-hidden="true"
  >
    03
  </div>

  <div className="title-copy min-w-0 w-full md:mx-10 lg:mx-12 sm:mx-8">
    <span className="title-label font-geist-sans block">
      Projects
    </span>

    <p className="title-title">
      From Concept <br className="hidden sm:block" />
      to Creation.
    </p>
  </div>

</div>
        <div className="projects-content mx-4 mt-16 sm:mx-6 md:mx-12 lg:mt-24">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group overflow-hidden border border-white/15 bg-white/[0.04] ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className={`grid ${project.featured ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/40 lg:aspect-auto lg:min-h-[260px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-80 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <span className="absolute left-4 top-4 border border-white/40 bg-black/60 px-2 py-1 font-geist-mono text-[9px] uppercase tracking-[0.18em] text-white">
                      {project.featured ? "Featured" : `0${index + 1}`}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-8 p-5 sm:p-7">
                    <div>
                      <p className="font-geist-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                        {project.category}
                      </p>
                      <h2 className="mt-3 font-archivo-black text-2xl uppercase leading-none text-white sm:text-3xl">
                        {project.title}
                      </h2>
                      <p className="mt-4 max-w-lg font-geist-mono text-xs leading-6 text-neutral-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-end justify-between gap-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/15 px-2 py-1 font-geist-mono text-[9px] uppercase tracking-[0.12em] text-neutral-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <Link
                          href={project.website ?? "#contact"}
                          target={project.website ? "_blank" : undefined}
                          rel={project.website ? "noreferrer" : undefined}
                          aria-label={project.website ? `Visit ${project.title} website` : `Discuss ${project.title}`}
                          className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-white transition hover:bg-white hover:text-black"
                        >
                          <ArrowRight size={15} />
                        </Link>
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-white transition hover:bg-white hover:text-black"
                          >
                            <RiGithubLine  size={15} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </main>
      </>
  );
}