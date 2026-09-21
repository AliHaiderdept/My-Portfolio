import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

const groups = [
  ["Languages", ["Python", "C", "C++", "Assembly", "HTML", "CSS", "Java"]],
  ["Frontend", ["React", "Next.js", "JavaScript","Typescript", "Angular", "Tailwind CSS", "Bootstrap"]],
  ["Backend", ["Node.js", "Laravel", "Django", "Flask", "Express.js"]],
  ["Database", [ "MySQL", "SQLite", "PostgreSQL","MongoDB"]],
  ["AI", ["AI Integration", "Prompt Engineering","Generative AI", "LLM's Model Features", "AI fluency"]],
  ["UI/UX Design",["Figma", "Canva","Adobe Illustrator"]],
  ["App Development",["React Native","Electron", "Flutter","Swift","Go"]],
  ["Deployment",["Vercel","Railway","Render","Netlify","Azure","AWS","Github","Firebase"]],
  ["CyberSecurity",["Cloud computing(AWS)","Linux Commands","Networking","Red/Blue Team"]]
  
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Skills</h2>
          <p className="section-description">The stack I reach for, grouped by where it lives in the app.</p>
        </Reveal>

        <div className="card-grid card-grid-three skills-grid">
          {groups.map(([title, items], index) => (
            <Reveal key={title} delay={index * 90}>
              <Tilt3D max={10}>
                <article className="glass-card skill-card">
                  <div className="skill-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                  </div>

                  <div className="skill-list">
                    {items.map((item) => (
                      <span className="skill-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
