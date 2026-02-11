export type Project = {
  slug: string;
  title: string;
  summary: string;
  repoUrl: string;
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "sylloge-by-manu",
    title: "Sylloge by Manu",
    summary: "A curated collection of study notes and academic materials across multiple subjects.",
    repoUrl: "https://github.com/emanuelegaliano/Sylloge-by-Manu",
    year: "2025",
  },

  {
    slug: "relu-tanti-ml-2025",
    title: "MRI Diagnostics - Machine Learning",
    summary: "University project - A Machine Learning classification project based on a MRI dataset.",
    repoUrl:
      "https://github.com/Diego54523/unict-ml-year-2025-group-5-ReLU-tanti/tree/775cf3178626392e99b8656deeba2e6292506f8f",
    year: "2025",
  },

  {
    slug: "traccia",
    title: "TRACCIA",
    summary: "A lightweight and extensible Python framework for building modular and domain-agnostic pipelines",
    repoUrl: "https://github.com/emanuelegaliano/TRACCIA",
    year: "2025",
  },

  {
    slug: "netsim",
    title: "NetSim",
    summary: "University project - Educational IP network simulator written in Java",
    repoUrl:
      "https://github.com/emanuelegaliano/netsim/tree/ee4cd5787569eeba5e0899dc17e9fd4dc0599897",
    year: "2024",
  },
  
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
