import { Project } from "#site/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="space-y-1 group transition text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
      target="_blank"
      rel="noreferrer"
    >
      <div className="font-semibold">{project.title}</div>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: project.body }}
      />
    </a>
  );
}
