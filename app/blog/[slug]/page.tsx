import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blog from "../../../data/blog.json";
import type { BlogPost } from "@/app/types";
import Head from "next/head";

interface BlogParams {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogParams) {
  const post = blog.find((item) => item.slug === params.slug) as BlogPost | undefined;

  if (!post) return notFound();

  return (
    <div className="min-h-screen flex flex-col">
        <Head>
            <title>Simplifai | {post.title}</title>
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