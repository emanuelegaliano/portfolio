import { useEffect, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const OFFSET_PX = 84; // keep in sync with CSS header height

export default function Navbar() {
  const items = useMemo<NavItem[]>(
    () => [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Education" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("about");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        // triggers when section top crosses below the sticky header
        root: null,
        rootMargin: `-${OFFSET_PX}px 0px -65% 0px`,
        threshold: [0.12, 0.2, 0.35],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - OFFSET_PX;

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: y,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <header className="siteHeader siteHeaderSticky">
      <div className="container headerInner headerInnerLarge">
        <a className="brand" href="#about" onClick={handleNavClick("about")}>
          Emanuele Galiano
        </a>

        <nav className="nav navLarge" aria-label="Primary">
          {items.map((it) => {
            const isActive = activeId === it.id;
            return (
              <a
                key={it.id}
                className={`navLink navLinkLarge ${isActive ? "navLinkActive" : ""}`}
                href={`#${it.id}`}
                onClick={handleNavClick(it.id)}
                aria-current={isActive ? "page" : undefined}
              >
                {it.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
