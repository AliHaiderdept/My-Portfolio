import { ArrowRight, FolderCode } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">Shipped and live. The detailed work lives on its own gallery page.</p>
        </Reveal>

        <Reveal delay={120}>
          <Tilt3D max={5}>
            <div className="glass-card projects-intro">
              <div>
                <span className="project-index">
                  <FolderCode size={14} /> PROJECT ARCHIVE
                </span>
                <h3>Want to view my featured works?</h3>
                <p>Open the dedicated gallery to explore each project without cluttering the main portfolio.</p>
              </div>

              <Link className="button button-primary" href="/gallery">
                Gallery <ArrowRight size={17} />
              </Link>
            </div>
          </Tilt3D>
        </Reveal>
      </div>
    </section>
  );
}
