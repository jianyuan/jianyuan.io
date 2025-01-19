import { defineCollection, defineConfig, s } from "velite";

import { brands } from "@/lib/brands";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const photos = defineCollection({
  name: "Photo",
  pattern: "photos/*.md",
  schema: s
    .object({
      title: s.string(),
      image: s.string().url(),
    })
    .transform((data, { meta }) => ({
      ...data,
      path: meta.basename,
    })),
});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/*.md",
  schema: s
    .object({
      title: s.string(),
      slug: s.string().optional(),
      date: s.coerce.date(),
      body: s.mdx(),
    })
    .transform((data, { meta }) => {
      const slug = data.slug || slugify(data.title);
      return {
        ...data,
        path: meta.basename,
        slug,
        url: `/posts/${slug}`,
      };
    }),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/*.{md,mdx}",
  schema: s
    .object({
      title: s.string(),
      slug: s.string().optional(),
      technologies: s.array(s.enum([brands[0], ...brands.slice(1)])),
      url: s.string().url(),
      body: s.mdx(),
    })
    .transform((data, { meta }) => {
      const slug = data.slug || slugify(data.title);
      return {
        ...data,
        path: meta.basename,
        slug,
      };
    }),
});

const videos = defineCollection({
  name: "Video",
  pattern: "videos/*.md",
  schema: s
    .object({
      title: s.string(),
      slug: s.string().optional(),
      youtube_id: s.string().optional(),
      body: s.mdx(),
    })
    .transform((data, { meta }) => {
      const slug = data.slug || slugify(data.title);
      return {
        ...data,
        path: meta.basename,
        slug,
      };
    }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    photos,
    posts,
    projects,
    videos,
  },
});
