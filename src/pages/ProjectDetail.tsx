import { useParams, Link, Navigate } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug!);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="section">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/projects" className="breadcrumbLink">
            Projects
          </Link>
          <span className="breadcrumbSep" aria-hidden="true">›</span>
          <span className="breadcrumbCurrent">{project.title}</span>
        </nav>

        <div className="projectHeaderTop">
          <h1 className="h1">{project.title}</h1>
          {project.year && <span className="pill">{project.year}</span>}
        </div>

        <p className="lead">{project.summary}</p>

        {project.description && (
          <div className="detailPanel">
            <p style={{ margin: 0 }}>{project.description}</p>
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="projectTags" style={{ marginTop: "1rem" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="heroActions" style={{ marginTop: "1.5rem" }}>
          <a
            className="button buttonPrimary"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
          <Link className="button buttonSecondary" to="/projects">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
