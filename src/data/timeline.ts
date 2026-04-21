export type OrgLink = {
  label: string;
  url?: string;
};

export type TimelineEntry = {
  id: string;
  title: string;
  time: string;
  org: OrgLink[];
  description: string;
  type: "future" | "past";
};

export const timelineEntries: TimelineEntry[] = [
  {
    id: "phd-cs",
    title: "PhD in Computer Science (Plan)",
    time: "Future",
    org: [
      { label: "PhD Program (DMI • UNICT)", url: "https://web.dmi.unict.it/dottorati/informatica/" },
      { label: "Catania" },
    ],
    description: "Placeholder for future milestones.",
    type: "future",
  },
  {
    id: "master-cs",
    title: "Master Degree in Computer Science (Plan)",
    time: "Future",
    org: [
      { label: "UNICT", url: "https://www.unict.it/" },
      { label: "DMI", url: "https://web.dmi.unict.it/" },
      { label: "Health Informatics", url: "https://web.dmi.unict.it/it/corsi/lm-18/health-informatics" },
      { label: "Catania" },
    ],
    description: "Placeholder for future milestones.",
    type: "future",
  },
  {
    id: "bachelor-cs",
    title: "Bachelor Degree in Computer Science",
    time: "2023 — Present",
    org: [
      { label: "UNICT", url: "https://www.unict.it/" },
      { label: "DMI", url: "https://web.dmi.unict.it/" },
      { label: "Curricula in Data Science", url: "https://web.dmi.unict.it/it/corsi/l-31/piani-di-studio" },
      { label: "Catania" },
    ],
    description:
      "Undergraduate student focusing on Data Science, Machine Learning, and applied statistical modeling, with a growing interest in medical data analysis and AI-driven research.",
    type: "past",
  },
  {
    id: "internship-furnari",
    title: "Internship with Prof. Antonino Furnari",
    time: "2023",
    org: [
      { label: "UNICT", url: "https://www.unict.it/" },
      { label: "DMI", url: "https://web.dmi.unict.it/" },
      { label: "Prof. Antonino Furnari", url: "https://antoninofurnari.github.io/" },
    ],
    description:
      "Research experience in Machine Learning and Network Inference for the analysis of neurodegenerative diseases.",
    type: "past",
  },
  {
    id: "high-school",
    title: "High School Diploma",
    time: "2018 — 2023",
    org: [
      { label: 'Liceo Scientifico "Ettore Majorana"', url: "https://www.majoranascordia.edu.it/" },
      { label: "Scordia" },
    ],
    description: "Scientific high school diploma with a strong foundation in mathematics and physics.",
    type: "past",
  },
];
