import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blogData from "../../../data/blog.json";
import Head from "next/head";

// 1. Define your content block type
type ContentBlock = {
  type: 'paragraph' | 'heading' | 'link' | 'divider';
  text?: string;
  href?: string;
};

// 2. Define your blog post type
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  summary: string;
  content: ContentBlock[];
}

// 3. Type for page props
interface PageProps {
  params: {
    slug: string;
  };
}

// 4. Type guard function
function isBlogPost(post: any): post is BlogPost {
  return (
    post &&
    typeof post.slug === 'string' &&
    typeof post.title === 'string' &&
    typeof post.date === 'string' &&
    (typeof post.image === 'string' || post.image === undefined) &&
    typeof post.summary === 'string' &&
    Array.isArray(post.content)
  );
}

export const dynamic = 'force-static';

export default function BlogPostPage({ params }: PageProps) {
  // 5. Find and validate the post
  const rawPost = blogData.find((item) => item.slug === params.slug);
  const post = isBlogPost(rawPost) ? rawPost : undefined;

  if (!post) {
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

// 6. Generate static paths
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug
  }));
}