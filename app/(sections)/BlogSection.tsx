"use client";

import Link from "next/link";
import BlogCard from "../(components)/BlogCard";
import blogPosts from "../../data/blog.json";

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category?: string; // Optional, for category tags
}

const BlogSection = () => {
  const newestPosts = [...(blogPosts as BlogPost[])]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in">
            Latest <span className="text-teal-500">AI Insights</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-2 animate-fade-in animate-delay-100">
            Stay ahead with trends, tools, and tips in artificial intelligence.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newestPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
              image={post.image}
              date={post.date}
              category={post.category}
              isFeatured={index === 0} // Mark the newest post as featured
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-200">
          {blogPosts.length > 3 && (
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              View All Articles
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
          <Link
            href="/quiz"
            className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg transition-all hover:scale-105"
          >
            Take the Quiz
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
          </Link>
        </div>
      </div>

      {/* Tailwind Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};

export default BlogSection;