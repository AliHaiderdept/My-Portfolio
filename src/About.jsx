import { useState } from "react";
import { useDownload } from "./useDownload";

function About() {
	const [experienceOpen, setExperienceOpen] = useState(false);
	const [educationOpen, setEducationOpen] = useState(false);
	const { downloadResume } = useDownload();

	return (
		<section id="about">
			 <h2>About</h2>
         
			<div className="about-layout">
            
				<div className="glass about-left">
					<h3 className="about-name">Ali Haider</h3>
					<p>
						Based in Lahore, Pakistan, I am Ali Haider, a passionate BSCS student and Full-Stack Developer
						focused on building scalable backend systems and responsive web applications. I specialize in
						crafting efficient, high-performance solutions while maintaining clean, modular code.
					</p>

					<p>
						With a strong interest in modern development practices and user-centered design, I aim to deliver
						seamless digital experiences. Looking ahead, I plan to integrate Artificial Intelligence into my web
						applications and expand into building mobile apps, creating smarter and more versatile digital
						solutions.
					</p>
				</div>

				<div className="about-right">
					<p className="about-side-title">Profile Timeline</p>

					<button
						className="about-toggle"
						type="button"
						onClick={() => setExperienceOpen((value) => !value)}
						aria-expanded={experienceOpen}
					>
						<span>Experience</span>
						<span className="about-toggle-indicator" aria-hidden="true">{experienceOpen ? "−" : "+"}</span>
					</button>

					<div className={`about-dropdown ${experienceOpen ? "open" : ""}`} aria-hidden={!experienceOpen}>
						<div className="about-item">
							<p className="about-year">2026 - Present</p>
							<h3 className="about-subheading about-role-text">Full-stack Developer</h3>
							<p className="about-role-description">Building scalable backend systems and responsive web applications.</p>
						</div>
					</div>

					<button
						className="about-toggle"
						type="button"
						onClick={() => setEducationOpen((value) => !value)}
						aria-expanded={educationOpen}
					>
						<span>Education</span>
						<span className="about-toggle-indicator" aria-hidden="true">{educationOpen ? "−" : "+"}</span>
					</button>

					<div className={`about-dropdown ${educationOpen ? "open" : ""}`} aria-hidden={!educationOpen}>
						<div className="about-item">
							<p className="about-year">2022 - 2024</p>
							<h3 className="about-subheading">Intermediate CS</h3>
							<p>Punjab College</p>
						</div>

						<div className="about-item">
							<p className="about-year">2024 - 2028</p>
							<h3 className="about-subheading">BSCS</h3>
							<p>Punjab University</p>
						</div>

						<button onClick={downloadResume} className="btn">⬇ Download Resume</button>
					</div>
				</div>
			</div>
            </section>
	);
}

export default About;
