"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLanguage } from "./language-provider";
import { Footer } from "./footer";
import { ProjectNavbar } from "./project-navbar";
import { ProjectVisual } from "./project-visual";
import { projects, TOTAL_PROJECTS } from "@/lib/projects";

export default function ProjectDetail({ projectId }: { projectId: number }) {
  const { t } = useLanguage();
  const project = projects[projectId - 1];
  const nextId = projectId === TOTAL_PROJECTS ? 1 : projectId + 1;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <ProjectNavbar />
      <section className="px-6 pt-24 pb-16 md:pt-36 md:pb-24 max-w-7xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
        >
          <HugeiconsIcon icon={ArrowLeft} className="h-4 w-4" /> All projects
        </Link>
        <div className="mt-10 md:mt-12 grid lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.55fr)] gap-8 items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-violet-700 dark:text-violet-300">
              {String(projectId).padStart(2, "0")} / {project.category}
            </p>
            <h1 className=" text-3xl sm:text-6xl font-bold tracking-tighter leading-[0.95]">
              {t(`project.${projectId}.title`)}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto" aria-label="Project artwork">
        <ProjectVisual
          id={projectId}
          className="h-72 sm:h-110 rounded-[2rem] border border-violet-200 dark:border-violet-900/50"
        />
        <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
          Abstract project artwork
        </p>
      </section>

      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-[minmax(0,1fr)_minmax(220px,0.45fr)] gap-10 md:gap-12 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-violet-700 dark:text-violet-300">
            Overview
          </p>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tighter mb-6">
            About this project
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t(`project.${projectId}.desc`)}
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-violet-700 dark:text-violet-300">
            Technology
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-200 dark:border-zinc-700 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-700 dark:text-violet-300">
            Keep exploring
          </p>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tighter">
            Next project
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            {t(`project.${nextId}.title`)}
          </p>
        </div>
        <Link
          href={`/projects/${nextId}`}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-violet-700 dark:bg-violet-400 px-6 py-3 font-semibold text-white dark:text-zinc-950 hover:bg-violet-800 dark:hover:bg-violet-300 transition-colors"
        >
          View project <HugeiconsIcon icon={ArrowUpRight} className="h-5 w-5" />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
