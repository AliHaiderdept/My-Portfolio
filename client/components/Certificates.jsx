import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";
import Image from "next/image";
export default function Certificates() {
  return (
    <section id="certificates" className="section">
  <div className="container">
    <Reveal>
      <p className="section-label">Credentials</p>
      <h2 className="section-title">Certificates</h2>
      <p className="section-description">
        Professional certifications and achievements.
      </p>
    </Reveal>

    <div className="certificate-preview-grid">
      {[
        "/certificates/Gen AI Sticker.png",
        "/certificates/Claude Ai Fluency.png",
        
      ].map((image, index) => (
        <Reveal key={image} delay={(index + 1) * 80}>
          <Tilt3D max={10}>
            <article className="glass-card empty-cert">
              <Image
                src={image}
                alt={`Certificate ${index + 1}`}
                width={500}
                height={200}
              />
            </article>
          </Tilt3D>
        </Reveal>
      ))}
    </div>
  
   <Reveal delay={260}>
          <div className="section-link-wrap">
            <Link className="button button-primary" href="/certificates">
              Open Certificate Archive <ArrowRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
