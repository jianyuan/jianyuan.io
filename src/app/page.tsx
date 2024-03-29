import { ComponentProps } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Container } from "@/components/container";
import ProjectCard from "@/components/project-card";
import { posts, projects } from "#site/content";

function SocialLink({
  icon: Icon,
  ...props
}: { icon: React.FC<any> } & ComponentProps<"a">) {
  return (
    <a className="group -m-1 p-1" target="_blank" rel="noreferrer" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

export default function Home() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Jian Yuan Lee
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Hi! I&rsquo;m a software designer, engineer, and entrepreneur based in
          London, UK.
        </p>
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="font-semibold">{post.title}</h2>
            <div
              className="text-base text-zinc-600 dark:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        ))}

        <div>
          <h2 className="font-semibold">Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-6">
          <SocialLink
            href="https://twitter.com/jyuan"
            aria-label="Follow on Twitter"
            icon={FaTwitter}
          />
          <SocialLink
            href="https://github.com/jianyuan"
            aria-label="Follow on GitHub"
            icon={FaGithub}
          />
          <SocialLink
            href="https://www.linkedin.com/in/jianyuanlee/"
            aria-label="Follow on LinkedIn"
            icon={FaLinkedin}
          />
          <SocialLink
            href="https://www.youtube.com/@jianyuanlee"
            aria-label="Follow on YouTube"
            icon={FaYoutube}
          />
          <SocialLink
            href="https://instagram.com/jianyuan/"
            aria-label="Follow on Instagram"
            icon={FaInstagram}
          />
        </div>
      </div>
    </Container>
  );
}
