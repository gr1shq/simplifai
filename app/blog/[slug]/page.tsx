import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blogData from "../../../data/blog.json";
import Head from "next/head";

// Define your BlogPost type
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image?: string;
  summary: string;
  content: ContentBlock; // Make sure ContentBlock is defined in your types
}

// For generateStaticParams
interface BlogParams {
  slug: string;
}

// For the page component props
interface PageProps {
  params: BlogParams;
}

// Generate static paths
export async function generateStaticParams(): Promise<BlogParams[]> {
  return blogData.map((post: BlogPost) => ({
    slug: post.slug
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogData.find((post: BlogPost) => post.slug === params.slug);

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