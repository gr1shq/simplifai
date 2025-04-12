import { notFound } from "next/navigation";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import BlogMeta from "@/app/(components)/BlogMeta";
import BlogContent from "@/app/(components)/BlogContent";
import blogData from "../../../data/blog.json";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogData.find((post) => post.slug === params.slug);
  if (!post) return {};

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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogData.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
    return null;
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
