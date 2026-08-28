import Image from "next/image";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

const cards = [
  ["Full-Stack", "Backend systems + responsive frontends, end to end."],
  ["AI Integration", "Bringing model-powered features into real products."],
  ["Clean Code", "Modular, readable and maintainable by default."],
  ["Performance", "Efficient, high-performance, low-friction builds."],
  ["User-Centered", "Design decisions driven by the person using it."],
  ["Mobile Next", "Expanding into cross-platform mobile applications."]
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Ali Haider · Lahore, Pakistan</p>
          <h2 className="section-title">Decoding Profile</h2>
        </Reveal>

        <div className="about-layout">
          <div className="about-copy">
            <Reveal>
              <Tilt3D max={5}>
                <div className="glass-card profile-card">
                  <p>
                    I am a passionate undergraduate BSCS student and Full-Stack Developer focused on building scalable
                    backend systems and responsive web applications. I specialize in efficient, high-performance
                    solutions while keeping code clean and modular. Looking ahead, I am integrating Artificial
                    Intelligence into my web applications and expanding into mobile apps, creating smarter and more
                    versatile digital solutions.
                  </p>
                </div>
              </Tilt3D>
            </Reveal>

            <div className="card-grid card-grid-three about-card-grid">
              {cards.map(([title, description], index) => (
                <Reveal key={title} delay={index * 70}>
                  <Tilt3D>
                    <article className="glass-card info-card">
                      <span className="card-number">0{index + 1}</span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </article>
                  </Tilt3D>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="about-portrait" delay={140}>
            <Tilt3D max={11} className="portrait-tilt">
              <div className="portrait-frame">
                <div className="portrait-grid" />
                <Image
                  src="/profile-art.png"
                  alt="Ali Haider profile artwork"
                  width={896}
                  height={1171}
                  priority
                  className="portrait-image"
                />
                  </div>
            </Tilt3D>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
