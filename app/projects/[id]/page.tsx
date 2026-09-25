import { notFound } from "next/navigation";

import ProjectDetail from "@/components/project-detail";
import { TOTAL_PROJECTS } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = Number(id);

  if (
    !Number.isInteger(projectId) ||
    projectId < 1 ||
    projectId > TOTAL_PROJECTS
  ) {
    notFound();
  }

  return <ProjectDetail projectId={projectId} />;
}
