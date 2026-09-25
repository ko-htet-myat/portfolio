"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLanguage } from "./language-provider";
import { ProjectVisual } from "./project-visual";
import { projects } from "@/lib/projects";

export function BentoGrid() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-16 md:py-24 max-w-7xl mx-auto"
    >
      <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-950 dark:text-zinc-50">
            {t("projects.title")}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <Link
              href={`/projects/${project.id}`}
              className="group block overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 transition-colors hover:border-violet-400 dark:hover:border-violet-500"
              aria-label={`View ${t(`project.${project.id}.title`)} project`}
            >
              <ProjectVisual
                id={project.id}
                className="h-55 sm:h-72 transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="relative z-10 p-6 sm:p-8 bg-white dark:bg-zinc-900">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
                  <span>{project.category}</span>
                  <span>{String(index + 1).padStart(2, "0")} / 04</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                      {t(`project.${project.id}.title`)}
                    </h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed hidden lg:flex">
                      {t(`project.${project.id}.desc`)}
                    </p>
                  </div>
                  <HugeiconsIcon
                    icon={ArrowUpRight}
                    className="mt-1 h-6 w-6 shrink-0 text-violet-700 dark:text-violet-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
