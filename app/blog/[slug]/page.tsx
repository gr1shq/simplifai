"use client";

import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blogData from "../../../data/blog.json";
import type { BlogPost, ContentBlock, ContentType } from "@/app/types";

// Type guard functions
const isContentType = (type: string): type is ContentType => {
  return ['paragraph', 'heading', 'link', 'divider'].includes(type);
};

const isContentBlock = (block: unknown): block is ContentBlock => {
  return (
    typeof block === 'object' &&
    block !== null &&
    'type' in block &&
    isContentType((block as { type: string }).type) &&
    (!('text' in block) || typeof block.text === 'string') &&
    (!('href' in block) || typeof block.href === 'string')
  );
};

const isBlogPost = (post: unknown): post is BlogPost => {
  return (
    typeof post === 'object' &&
    post !== null &&
    'slug' in post &&
    typeof post.slug === 'string' &&
    'title' in post &&
    typeof post.title === 'string' &&
    'date' in post &&
    typeof post.date === 'string' &&
    'summary' in post &&
    typeof post.summary === 'string' &&
    'content' in post &&
    Array.isArray(post.content) &&
    post.content.every(isContentBlock)
  );
};

// Generate static paths
export const generateStaticParams = async () => {
  return blogData.map((post) => ({
    slug: post.slug
  }));
};

// Generate metadata
export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = blogData.find((post) => post.slug === params.slug);
  if (!post || !isBlogPost(post)) return {};
  
  return {
    title: `SimplifAI | ${post.title}`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
};

// Page component
const BlogPostPage = ({ params }: { params: { slug: string } }) => {
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
};

export default BlogPostPage;