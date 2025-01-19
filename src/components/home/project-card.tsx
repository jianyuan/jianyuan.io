import { brandIcons } from "@/lib/brands";
import { Project } from "#site/content";

import { MdxContent } from "../mdx-content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="group flex flex-col space-y-1 py-1 transition"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold group-hover:underline">
          {project.title}
        </div>
        <span className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
        <div className="flex items-center gap-1 text-zinc-500">
          {project.technologies.map((technology) => {
            const Icon = brandIcons[technology];
            return <Icon key={technology} />;
          })}
        </div>
      </div>
      <div className="text-sm text-zinc-600 dark:text-zinc-500">
        <MdxContent code={project.body} />
      </div>
    </a>
  );
}
