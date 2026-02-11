import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const HEADER_OFFSET = 84;

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

        const prefersReducedMotion =
          window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
          top: y,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    // Works from /projects too
    navigate(`/#${id}`);
  };

  return (
    <>
      <header className="siteHeader siteHeaderSticky siteHeaderAccent">
        <div className="container headerInner headerInnerLarge">
          <Link to="/" className="brand brandOnAccent">
            Emanuele Galiano
          </Link>

          <nav className="nav navLarge" aria-label="Main navigation">
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="navLink navLinkLarge navLinkOnAccent"
            >
              About
            </button>

            {/* FIX: Education before Projects */}
            <button
              type="button"
              onClick={() => goToSection("education")}
              className="navLink navLinkLarge navLinkOnAccent"
            >
              Education
            </button>

            <button
              type="button"
              onClick={() => goToSection("projects")}
              className="navLink navLinkLarge navLinkOnAccent"
            >
              Projects
            </button>

            {/* FIX: must match Home.tsx id="contacts" */}
            <button
              type="button"
              onClick={() => goToSection("contacts")}
              className="navLink navLinkLarge navLinkOnAccent"
            >
              Contacts
            </button>
          </nav>
        </div>
      </header>

      <ScrollHandler />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;