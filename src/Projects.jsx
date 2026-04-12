function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="glass projects-card">
        <article className="project-item">
          <h3 className="project-title">Portfolio Website</h3>
          <p>
            A modern React portfolio with animated sections, glass UI cards, and
            responsive layouts.
            
          </p>
          
        </article>

        <article className="project-item">
          <h3 className="project-title">Smart Dashboard</h3>
          <p>
            A role-based dashboard concept with backend APIs, authentication, and
            modular widgets.
          </p>
        </article>

        <article className="project-item">
          <h3 className="project-title">AI Integrations</h3>
          <p>
            Experiments that connect LLM services into web applications for quote
            generation, assistants, and content workflows.
          </p>
        </article>
        <a href="#">
          <button className="btn">Projects</button>
        </a>
      </div>
    </section>
  );
}

export default Projects;