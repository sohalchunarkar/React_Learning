export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image area-1"></div>
          <h3>Landing Page</h3>
          <p>A responsive landing page built with pure HTML and CSS.</p>
        </div>
        <div className="project-card">
          <div className="project-image area-2"></div>
          <h3>Personal Blog</h3>
          <p>A simple blog template focusing on typography and readability.</p>
        </div>
        <div className="project-card">
          <div className="project-image area-3"></div>
          <h3>Portfolio V1</h3>
          <p>My first attempt at creating a personal portfolio site.</p>
        </div>
      </div>
    </section>
  );
}
