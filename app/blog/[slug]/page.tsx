import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blogData from "../../../data/blog.json";
import Head from "next/head";

// 1. Strictly typed ContentBlock
type ContentType = 'paragraph' | 'heading' | 'link' | 'divider';

interface ContentBlock {
  type: ContentType;
  text?: string;
  href?: string;
}

// 2. Complete BlogPost interface
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  summary: string;
  content: ContentBlock[];
}

// 3. Type guard without 'any'
function isContentBlock(block: unknown): block is ContentBlock {
  if (typeof block !== 'object' || block === null) return false;
  
  const b = block as Record<string, unknown>;
  return (
    typeof b.type === 'string' &&
    ['paragraph', 'heading', 'link', 'divider'].includes(b.type) &&
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

// 4. Static generation
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug
  }));
}

// 5. Page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug);
  
  if (!post || !isBlogPost(post)) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`SimplifAI | ${post.title}`}</title>
        <meta name="description" content={post.summary} />
      </Head>
      
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