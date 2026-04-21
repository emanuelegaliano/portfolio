import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import profileImg from "../assets/me.jpg";
import { projects } from "../data/projects";
import { timelineEntries } from "../data/timeline";
import { SiGithub, SiLinkedin, SiInstagram, SiMedium, SiKaggle } from "react-icons/si";

export default function Home() {
  const futureEntries = timelineEntries.filter((e) => e.type === "future");
  const pastEntries = timelineEntries.filter((e) => e.type === "past");

  return (
    <>
     <section id="about" className="section">
  <div className="container">
    <div className="heroUnified">
      <div className="heroUnifiedGrid">
        <div className="heroUnifiedContent">
          <p className="eyebrow">Portfolio</p>

          <h1 className="h1 heroTitle">
            Emanuele Galiano
            <span className="heroSubhead">
              Bachelor student @{" "}
              <a className="inlineLink" href="https://www.unict.it/" target="_blank" rel="noreferrer">
                UNICT
              </a>{" "}
              •{" "}
              <a className="inlineLink" href="https://web.dmi.unict.it/" target="_blank" rel="noreferrer">
                DMI
              </a>
            </span>
          </h1>

          <p className="heroHeadline">Medical Data Science &amp; Machine Learning for Healthcare</p>

          <p className="lead heroLead">
            I turn messy, real-world healthcare data into reliable insights through transparent,
            reproducible pipelines.
          </p>

          <div className="heroActions" role="group" aria-label="Primary actions">
            <a className="button buttonPrimary" href="#">
              Download CV
            </a>
            <a className="button buttonGhost" href="mailto:galianoo.emanuele@gmail.com">
              Email
            </a>
            <a
              className="button buttonGhost"
              href="https://github.com/emanuelegaliano"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <dl className="heroMeta" aria-label="Quick info">
            <div className="metaItem">
              <dt>Focus</dt>
              <dd>
                <span className="metaPills">
                  <span className="metaPill">Healthcare Data</span>
                  <span className="metaPill">ML&DL Fundamentals</span>
                </span>
              </dd>
            </div>

            <div className="metaItem">
              <dt>Currently</dt>
              <dd>
                <span className="metaPills">
                  <span className="metaPill">Bachelor student</span>
                </span>
              </dd>
            </div>

            <div className="metaItem">
              <dt>Interests</dt>
              <dd>
                <span className="metaPills">
                  <span className="metaPill">Medical AI</span>
                  <span className="metaPill">Medical Data Science</span>
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <aside className="heroUnifiedPortrait" aria-label="Portrait">
          <img
            className="portraitImage"
            src={profileImg}
            alt="Portrait of Emanuele Galiano"
            loading="eager"
            decoding="async"
          />
        </aside>
      </div>
    </div>
  </div>
</section>
 

      <section id="education" className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Education & Experience</h2>
            <p className="mutedText">Academic background and early research experience.</p>
          </div>

          <ol className="timeline" aria-label="Education and experience timeline">
            <div className="timelineArrow" aria-hidden="true">
              <ChevronUp size={16} strokeWidth={2} />
            </div>

            <div className="timelineGroup timelineFuture">
              {futureEntries.map((entry) => (
                <li key={entry.id} className="timelineItem">
                  <span className="timelineNode timelineNodeFuture" aria-hidden="true" />
                  <div className="timelineCard">
                    <div className="timelineTop">
                      <h3 className="timelineTitle">{entry.title}</h3>
                      <p className="timelineTime">{entry.time}</p>
                    </div>
                    <p className="timelineOrg">
                      {entry.org.map((item, i) => (
                        <span key={i}>
                          {i > 0 && " • "}
                          {item.url ? (
                            <a className="inlineLink" href={item.url} target="_blank" rel="noreferrer">
                              {item.label}
                            </a>
                          ) : (
                            item.label
                          )}
                        </span>
                      ))}
                    </p>
                    <p className="timelineDesc mutedText">{entry.description}</p>
                  </div>
                </li>
              ))}
            </div>

            <div className="timelineGroup timelinePast">
              {pastEntries.map((entry) => (
                <li key={entry.id} className="timelineItem">
                  <span className="timelineNode" aria-hidden="true" />
                  <div className="timelineCard">
                    <div className="timelineTop">
                      <h3 className="timelineTitle">{entry.title}</h3>
                      <p className="timelineTime">{entry.time}</p>
                    </div>
                    <p className="timelineOrg">
                      {entry.org.map((item, i) => (
                        <span key={i}>
                          {i > 0 && " • "}
                          {item.url ? (
                            <a className="inlineLink" href={item.url} target="_blank" rel="noreferrer">
                              {item.label}
                            </a>
                          ) : (
                            item.label
                          )}
                        </span>
                      ))}
                    </p>
                    <p className="timelineDesc mutedText">{entry.description}</p>
                  </div>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>



      <section id="projects" className="section">
        <div className="container">
          <div className="sectionHeaderRow">
            <div>
              <h2 className="h2">Recent Projects</h2>
              <p className="mutedText">A quick snapshot — see the full list for everything.</p>
            </div>

            <Link className="button buttonSecondary" to="/projects">
              View all projects
            </Link>
          </div>

          <div className="projectsGrid" role="list">
            {projects.slice(0, 3).map((p) => (
              <article key={p.repoUrl} className="projectCard" role="listitem">
                <div className="projectCardTop">
                  <h3 className="projectTitle">{p.title}</h3>
                  {p.year ? <span className="pill">{p.year}</span> : null}
                </div>

                <p className="mutedText projectSummary">{p.summary}</p>

                <div className="projectActions">
                  <Link className="button buttonPrimary" to={`/projects/${p.slug}`}>
                    Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="section contactSection">
        <div className="container contactContainer">
          <h2 className="h2 contactTitleMain">Contacts</h2>

          <div className="contactEmailsRow">
            <a href="mailto:galianoo.emanuele@gmail.com" className="contactEmailMain">
              galianoo.emanuele@gmail.com
            </a>

            <span className="contactSeparator">•</span>

            <a href="mailto:emanuele.galiano@studium.unict.it" className="contactEmailMain">
              emanuele.galiano@studium.unict.it
            </a>
          </div>

          <div className="contactSocials">
            <a
              href="https://github.com/emanuelegaliano"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="GitHub"
              title="GitHub"
            >
              <SiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/emanuele-galiano-5806083b0/"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <SiLinkedin size={20} />
            </a>

            <a
              href="https://www.kaggle.com/emanuelegalian0"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="Kaggle"
              title="Kaggle"
            >
              <SiKaggle size={20} />
            </a>

            <a
              href="https://www.instagram.com/emanuele.galianoo/"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="Instagram"
              title="Instagram"
            >
              <SiInstagram size={20} />
            </a>

            <a
              href="https://medium.com/@emanuelegaliano"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
              aria-label="Medium"
              title="Medium"
            >
              <SiMedium size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}