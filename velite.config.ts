import { defineConfig, s } from "velite";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

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
    posts: {
      name: "Post",
      pattern: "posts/*.md",
      schema: s
        .object({
          title: s.string(),
          slug: s.string().optional(),
          date: s.coerce.date(),
          body: s.mdx(),
        })
        .transform((data) => {
          const slug = data.slug || slugify(data.title);
          return {
            ...data,
            slug,
            url: `/posts/${slug}`,
          };
        }),
    },
    projects: {
      name: "Project",
      pattern: "projects/*.{md,mdx}",
      schema: s
        .object({
          title: s.string(),
          slug: s.string().optional(),
          url: s.string().url(),
          body: s.mdx(),
        })
        .transform((data) => {
          const slug = data.slug || slugify(data.title);
          return {
            ...data,
            slug,
          };
        }),
    },
    videos: {
      name: "Video",
      pattern: "videos/*.md",
      schema: s
        .object({
          title: s.string(),
          slug: s.string().optional(),
          youtube_id: s.string().optional(),
          body: s.mdx(),
        })
        .transform((data) => {
          const slug = data.slug || slugify(data.title);
          return {
            ...data,
            slug,
          };
        }),
    },
  },
});
