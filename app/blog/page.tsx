import BlogCard from '../(components)/BlogCard';
import blogData from '@/data/blog.json';
import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import Head from 'next/head';

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
}

export default function BlogPage() {
  const posts: BlogPost[] = blogData;

  return (
    <div className="min-h-screen flex flex-col">

      <Head>
      <title>AI Tools Blog - Latest Articles & Insights 2025</title>
        <meta
          name="description"
          content="Explore our AI tools blog for articles, tutorials, and insights on the best AI and productivity tools for content creators and businesses in 2025."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://simplifai-pearl.vercel.app/blog" />
      </Head>

      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 mt-20">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest articles, tutorials, and insights about AI and productivity tools.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                summary={post.summary}
                image={post.image}
                date={post.date}
              />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}