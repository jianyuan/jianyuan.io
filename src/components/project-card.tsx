import { Project } from "#site/content";

import { MdxContent } from "./mdx-content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="space-y-1 group transition text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 bg-zinc-100 hover:bg-zinc-200 flex flex-col px-4 py-3 rounded-md"
      target="_blank"
      rel="noreferrer"
    >
      <div className="font-semibold">{project.title}</div>
      <div className="text-sm">
        <MdxContent code={project.body} />
      </div>
    </a>
  );
}
