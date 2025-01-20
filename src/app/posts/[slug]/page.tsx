import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { MdxContent } from "@/components/mdx-content";
import { posts } from "#site/content";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <Container>
      <div className="prose prose-sm max-w-none">
        <MdxContent code={post.body} />
      </div>
    </Container>
  );
}
