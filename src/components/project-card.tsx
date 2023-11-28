"use client";

import { track } from "@vercel/analytics";
import { Project } from "contentlayer/generated";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div>
      <a
        href={project.url}
        className="text-base font-semibold text-zinc-600 dark:text-zinc-400"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          track("click-project", {
            title: project.title,
            url: project.url,
          });
        }}
      >
        {project.title}
      </a>
      <div
        className="text-base text-zinc-600 dark:text-zinc-400"
        dangerouslySetInnerHTML={{ __html: project.body.html }}
      />
    </div>
  );
}
