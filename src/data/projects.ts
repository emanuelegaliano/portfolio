export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  tags?: string[];
  repoUrl: string;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "sylloge-by-manu",
    title: "Sylloge by Manu",
    summary: "A curated collection of study notes and academic materials across multiple subjects.",
    description:
      "Sylloge by Manu is a personal knowledge repository — structured study notes and academic materials organized by subject. Built to make review sessions faster and to share quality resources with fellow students.",
    tags: ["Markdown", "Documentation", "Open Source"],
    repoUrl: "https://github.com/emanuelegaliano/Sylloge-by-Manu",
    year: "2025",
  },

  {
    slug: "relu-tanti-ml-2025",
    title: "MRI Diagnostics - Machine Learning",
    summary: "University project - A Machine Learning classification project based on a MRI dataset.",
    description:
      "A university team project focused on building a classification pipeline for MRI brain scans. The goal was to distinguish between healthy and pathological cases using supervised machine learning techniques.",
    tags: ["Python", "Machine Learning", "scikit-learn", "MRI", "Classification"],
    repoUrl:
      "https://github.com/Diego54523/unict-ml-year-2025-group-5-ReLU-tanti/tree/775cf3178626392e99b8656deeba2e6292506f8f",
    year: "2025",
  },

  {
    slug: "traccia",
    title: "TRACCIA",
    summary: "A lightweight and extensible Python framework for building modular and domain-agnostic pipelines",
    description:
      "TRACCIA is a Python framework designed to simplify the construction of data processing pipelines. It encourages a modular, composable style where each step is isolated and reusable across different domains.",
    tags: ["Python", "Framework", "Pipelines", "Open Source"],
    repoUrl: "https://github.com/emanuelegaliano/TRACCIA",
    year: "2025",
  },

  {
    slug: "netsim",
    title: "NetSim",
    summary: "University project - Educational IP network simulator written in Java",
    description:
      "NetSim is an educational tool for simulating basic IP network topologies. Written in Java as a university project, it allows students to visualize packet routing and understand fundamental networking concepts.",
    tags: ["Java", "Networking", "Simulation", "Educational"],
    repoUrl:
      "https://github.com/emanuelegaliano/netsim/tree/ee4cd5787569eeba5e0899dc17e9fd4dc0599897",
    year: "2024",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
