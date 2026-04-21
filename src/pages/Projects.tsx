import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main id="content" className="section">
      <div className="container">
        <header className="pageHeader">
          <h1 className="h1">Projects</h1>
          <p className="lead">
            A curated selection of projects and research-oriented work.
          </p>
        </header>

        <div className="projectsGrid" role="list">
          {projects.map((p) => (
            <article key={p.slug} className="projectCard" role="listitem">
              <div className="projectCardTop">
                <h2 className="projectTitle">{p.title}</h2>
                {p.year ? <span className="pill">{p.year}</span> : null}
              </div>

              <p className="mutedText projectSummary">
                {p.summary}
              </p>

              <div className="projectActions">
                <Link className="button buttonPrimary" to={`/projects/${p.slug}`}>
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}