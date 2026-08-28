"use client";

import { ArrowLeft, ExternalLink, FolderCode } from "lucide-react";
import Link from "next/link";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

const projects = [
  {
    id: "medixora",
    title: "Medixora Hospital",
    tag: "Healthcare Platform",
    description:
      "A hospital management experience with appointment flows, department listings and a responsive patient-facing interface.",
    stack: ["React", "Vite", "Vercel"],
    image:"/.png",
    href: "https://medixora-hospital.vercel.app/"
  },
  {
    id: "glorymart",
    title: "GloryMart Frontend",
    tag: "E-commerce",
    description:
      "Storefront frontend with product grids, cart interactions and a clean responsive shopping presentation.",
    stack: ["React", "CSS", "Vercel"],
    href: "https://project-glorymart-frontend-sigma.vercel.app/"
  },
  {
    id: "slot-03",
    title: "Project Slot 03",
    tag: "Add your project",
    description: "Empty card ready for your next project details.",
    stack: ["Your Stack"],
    href: "#"
  },
  {
    id: "slot-04",
    title: "Project Slot 04",
    tag: "Add your project",
    description: "Empty card ready for your next project details.",
    stack: ["Your Stack"],
    href: "#"
  },
  {
    id: "slot-05",
    title: "Project Slot 05",
    tag: "Add your project",
    description: "Empty card ready for your next project details.",
    stack: ["Your Stack"],
    href: "#"
  },
  {
    id: "slot-06",
    title: "Project Slot 06",
    tag: "Add your project",
    description: "Empty card ready for your next project details.",
    stack: ["Your Stack"],
    href: "#"
  }
];

export default function GalleryClient() {
  return (
    <>
      <main className="archive-page">
        <div className="container">
          <div className="archive-back">
            <Link href="/" className="button button-glass">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>

          <Reveal className="archive-hero">
            <span className="eyebrow">
              <FolderCode size={15} /> Project Archive
            </span>
            <h1 className="section-title">Project Gallery</h1>
            <p className="section-description">
              A focused space for the work. Swipe through the cards and open live builds.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <Carousel
              items={projects}
              renderItem={(project) => (
                <Tilt3D max={8}>
                  <article className="glass-card archive-card">
                    <span className="card-top-line" />
                    <p className="project-tag">{project.tag}</p>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    {project.href !== "#" ? (
                      <a
                        className="button button-primary project-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Site <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="placeholder-note">Edit this card later</span>
                    )}
                  </article>
                </Tilt3D>
              )}
            />
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
