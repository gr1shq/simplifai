import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blogData from "../../../data/blog.json";
import type { Metadata } from "next";
import type { ContentType } from "@/app/types";
import { ContentBlock } from "@/app/types";
import { BlogPost } from "@/app/types";



// 2. Type guard functions
function isContentType(type: string): type is ContentType {
  return ['paragraph', 'heading', 'link', 'divider'].includes(type);
}

function isContentBlock(block: unknown): block is ContentBlock {
  if (typeof block !== 'object' || block === null) return false;
  const b = block as Record<string, unknown>;
  return (
    isContentType(b.type as string) &&
    (typeof b.text === 'string' || b.text === undefined) &&
    (typeof b.href === 'string' || b.href === undefined)
  );
}

function isBlogPost(post: unknown): post is BlogPost {
  if (typeof post !== 'object' || post === null) return false;
  const p = post as Record<string, unknown>;
  return (
    typeof p.slug === 'string' &&
    typeof p.title === 'string' &&
    typeof p.date === 'string' &&
    (typeof p.image === 'string' || p.image === undefined) &&
    typeof p.summary === 'string' &&
    Array.isArray(p.content) &&
    p.content.every(isContentBlock)
  );
}

// 3. Generate static paths
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug
  }));
}

// 4. Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogData.find((post) => post.slug === params.slug);
  if (!post || !isBlogPost(post)) {
    return {};
  }
  return {
    title: `SimplifAI | ${post.title}`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

// 5. Page component
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post || !isBlogPost(post)) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mt-20">
          <BlogMeta
            title={post.title}
            date={post.date}
            image={post.image}
            summary={post.summary}
          />
          <BlogContent content={post.content} />
        </div>
      </main>
      <Footer />
    </div>
  );
}