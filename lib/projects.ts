export const projects = [
  { id: 1, category: "Commerce", tags: ["React", "Tailwind", "Odoo"] },
  { id: 2, category: "Insurance", tags: ["React", "Tailwind", "Redux Toolkit"] },
  { id: 3, category: "Healthcare", tags: ["Next.js", "Tailwind", "Node.js"] },
  { id: 4, category: "Banking", tags: ["Pug", "Bootstrap", "WordPress"] },
] as const;

export const TOTAL_PROJECTS = projects.length;
