import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div className="appShell">
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="siteHeader">
        <div className="container headerInner">
          <Link to="/" className="brand">
            EG
            <span className="brandText">Emanuele Galiano</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <Link className="navLink" to="/#about">About</Link>
            <Link className="navLink" to="/#education">Education</Link>

            {/* This is now the single Projects page */}
            <Link className="navLink navCta" to="/projects">Projects</Link>

            <Link className="navLink" to="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main id="main" className="siteMain">
        <Outlet />
      </main>

      <footer className="siteFooter">
        <div className="container footerInner">
          <p className="mutedText">
            © {new Date().getFullYear()} Emanuele Galiano
          </p>
        </div>
      </footer>
    </div>
  );
}
