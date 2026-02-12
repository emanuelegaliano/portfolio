import profileImg from "../assets/me.jpg"
import { projects } from "../data/projects";
import { SiGithub, SiLinkedin, SiInstagram, SiMedium, SiKaggle } from "react-icons/si";

export default function Home() {
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
            {/* FUTURE (dashed line + dashed nodes) */}
            <div className="timelineGroup timelineFuture">
              <li className="timelineItem">
                <span className="timelineNode timelineNodeFuture" aria-hidden="true" />
                <div className="timelineCard">
                  <div className="timelineTop">
                    <h3 className="timelineTitle">PhD in Computer Science (Plan)</h3>
                    <p className="timelineTime">Future</p>
                  </div>
                  <p className="timelineOrg">
                    <a
                      className="inlineLink"
                      href="https://web.dmi.unict.it/dottorati/informatica/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PhD Program (DMI • UNICT)
                    </a>{" "}
                    • Catania
                  </p>
                  <p className="timelineDesc mutedText">Placeholder for future milestones.</p>
                </div>
              </li>

              <li className="timelineItem">
                <span className="timelineNode timelineNodeFuture" aria-hidden="true" />
                <div className="timelineCard">
                  <div className="timelineTop">
                    <h3 className="timelineTitle">Master Degree in Computer Science (Plan)</h3>
                    <p className="timelineTime">Future</p>
                  </div>
                  <p className="timelineOrg">
                    <a
                      className="inlineLink"
                      href="https://www.unict.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UNICT
                    </a>{" "}
                    •{" "}
                    <a
                      className="inlineLink"
                      href="https://web.dmi.unict.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DMI
                    </a>{" "}
                    •{" "}
                    <a
                      className="inlineLink"
                      href="https://web.dmi.unict.it/it/corsi/lm-18/health-informatics"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Health Informatics
                    </a>{" "}
                    • Catania
                  </p>
                  <p className="timelineDesc mutedText">Placeholder for future milestones.</p>
                </div>
              </li>
            </div>

            {/* PAST & CURRENT (solid line + solid nodes) */}
            <div className="timelineGroup timelinePast">
              {/* Bachelor */}
              <li className="timelineItem">
                <span className="timelineNode" aria-hidden="true" />
                <div className="timelineCard">
                  <div className="timelineTop">
                    <h3 className="timelineTitle">Bachelor Degree in Computer Science</h3>
                    <p className="timelineTime">2023 — Present</p>
                  </div>
                  <p className="timelineOrg">
                    <a
                      className="inlineLink"
                      href="https://www.unict.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UNICT
                    </a>{" "}
                    •{" "}
                    <a
                      className="inlineLink"
                      href="https://web.dmi.unict.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DMI
                    </a>{" "}
                    •{" "}
                    <a
                      className="inlineLink"
                      href="https://web.dmi.unict.it/it/corsi/l-31/piani-di-studio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Curricula in Data Science
                    </a>{" "}
                    • Catania
                  </p>
                  <p className="timelineDesc mutedText">
                    Undergraduate student focusing on Data Science, Machine Learning, and applied statistical
                    modeling, with a growing interest in medical data analysis and AI-driven research.
                  </p>
                </div>
              </li>

              {/* Research Experience */}
              <li className="timelineItem">
                <span className="timelineNode" aria-hidden="true" />
                <div className="timelineCard">
                  <div className="timelineTop">
                    <h3 className="timelineTitle">
                      Internship with Prof. Antonino Furnari
                    </h3>
                    <p className="timelineTime">2023</p>
                  </div>
                  <p className="timelineOrg">
                    <a
                      className="inlineLink"
                      href="https://www.unict.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UNICT
                    </a>{" "}
                    •{" "}
                    <a
                      className="inlineLink"
                      href="https://web.dmi.unict.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DMI
                    </a>{" "}
                    •{" "}
                    <a
                      className="inlineLink"
                      href="https://antoninofurnari.github.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Prof. Antonino Furnari
                    </a>
                  </p>
                  <p className="timelineDesc mutedText">
                    Research experience in Machine Learning and Network Inference for the analysis of
                    neurodegenerative diseases.
                  </p>
                </div>
              </li>

              {/* High School */}
              <li className="timelineItem">
                <span className="timelineNode" aria-hidden="true" />
                <div className="timelineCard">
                  <div className="timelineTop">
                    <h3 className="timelineTitle">High School Diploma</h3>
                    <p className="timelineTime">2018 — 2023</p>
                  </div>
                  <p className="timelineOrg">
                    <a
                      className="inlineLink"
                      href="https://www.majoranascordia.edu.it/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Liceo Scientifico “Ettore Majorana”
                    </a>{" "}
                    • Scordia
                  </p>
                  <p className="timelineDesc mutedText">
                    Scientific high school diploma with a strong foundation in mathematics and physics.
                  </p>
                </div>
              </li>
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

            <a className="button buttonSecondary" href="/projects">
              View all projects
            </a>
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
                  <a
                    className="button buttonPrimary"
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Details
                  </a>
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