"use client";

import { IconType } from "react-icons";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

import { Container } from "@/components/container";
import { HomePhoto } from "@/components/home/home-photo";
import { ProjectCard } from "@/components/home/project-card";
import { VideoCard } from "@/components/home/video-card";
import { photos, projects, videos } from "#site/content";

function SocialLink({
  icon: Icon,
  ...props
}: { icon: IconType } & React.ComponentProps<"a">) {
  return (
    <a className="group -m-1 p-1" target="_blank" rel="noreferrer" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Container className="my-9">
        <div className="max-w-2xl space-y-10">
          <h1 className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-100">
            Jian Yuan Lee
          </h1>
          <p className="text-muted text-sm">
            Hi! I&rsquo;m a software designer, engineer, and entrepreneur based
            in London, UK.
          </p>

          <div className="flex gap-6">
            <SocialLink
              href="https://twitter.com/jyuan"
              aria-label="Follow on Twitter"
              icon={SiX}
            />
            <SocialLink
              href="https://github.com/jianyuan"
              aria-label="Follow on GitHub"
              icon={SiGithub}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jianyuanlee/"
              aria-label="Follow on LinkedIn"
              icon={SiLinkedin}
            />
            <SocialLink
              href="https://www.youtube.com/@jianyuanlee"
              aria-label="Follow on YouTube"
              icon={SiYoutube}
            />
            <SocialLink
              href="https://instagram.com/jianyuan/"
              aria-label="Follow on Instagram"
              icon={SiInstagram}
            />
          </div>
        </div>
      </Container>

      <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map((photo) => (
          <HomePhoto
            key={photo.path}
            alt={photo.title}
            src={photo.image}
            className="odd:-rotate-2 even:rotate-2"
          />
        ))}
      </div>

      <Container className="my-9">
        <div className="max-w-2xl space-y-10">
          {/* {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="font-semibold">{post.title}</h2>
            <div
              className="text-base text-zinc-600 dark:text-zinc-400"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        ))} */}

          <div className="space-y-4">
            <h2 className="text-md font-semibold">Projects</h2>
            <div className="grid auto-rows-fr gap-x-12 gap-y-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-md font-semibold">Videos</h2>
            <div className="space-y-6">
              {videos.map((video) => (
                <VideoCard key={video.slug} video={video} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
