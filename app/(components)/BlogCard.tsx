import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
}

const BlogCard = ({ title, summary, image, date, slug }: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <article className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`Cover image for ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={date}>{formattedDate}</time>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
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
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
            aria-label={`Read ${title}`}
          >
            Read article
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;