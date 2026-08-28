import { GraduationCap, School } from "lucide-react";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

const items = [
  {
    Icon: GraduationCap,
    heading: "Bachelor's Degree in Progress",
    degree: "BS Computer Science",
    place: "University of the Punjab, Lahore",
    year: "2024 — 2028",
    status: "In Progress"
  },
  {
    Icon: School,
    heading: "Intermediate Degree Completed",
    degree: "ICS — Intermediate in Computer Science",
    place: "Punjab College, Lahore",
    year: "2022 — 2024",
    status: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Academics</p>
          <h2 className="section-title">Education</h2>
          <p className="section-description">Academic track powering the engineering work.</p>
        </Reveal>

        <div className="card-grid card-grid-two education-grid">
          {items.map(({ Icon, ...item }, index) => (
            <Reveal key={item.heading} delay={index * 130}>
              <Tilt3D max={8}>
                <article className="glass-card education-card">
                  <span className="card-top-line" />

                  <div className="education-top">
                    <span className="icon-box">
                      <Icon size={21} />
                    </span>
                    <span className="status-pill">{item.status}</span>
                  </div>

                  <h3>{item.heading}</h3>
                  <p>{item.degree}</p>
                  <p className="accent-text">{item.place}</p>
                  <span className="mono-small">{item.year}</span>
                </article>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
