import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category?: string;
  isFeatured?: boolean;
}

const BlogCard = ({ title, summary, image, date, slug, category, isFeatured }: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`Cover image for ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Featured Badge */}
        {isFeatured && (
          <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={date}>{formattedDate}</time>
          {category && (
            <Link
              href={`/blog?category=${category.toLowerCase()}`}
              className="ml-2 text-teal-500 hover:text-teal-600"
            >
              {category}
            </Link>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-teal-500 transition-colors">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {summary}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center font-medium text-teal-500 hover:text-teal-600 transition-colors"
            aria-label={`Read ${title}`}
          >
            Read Article
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;