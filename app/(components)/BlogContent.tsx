import Link from "next/link";

interface ContentBlock {
  type: string;
  text?: string;
  href?: string;
}

interface BlogContentProps {
  content: ContentBlock[];
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 
                key={index} 
                className="text-2xl font-bold text-gray-900 mt-8 mb-4"
              >
                {block.text}
              </h2>
            );
          case "link":
            return (
              <div key={index} className="mt-4">
                <Link
                  href={block.href || '#'}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                   rel="noopener noreferrer"
                >
                  {block.text}
                  <svg
                    className="w-4 h-4 ml-1"
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
            );
          case "divider":
            return (
              <hr 
                key={index} 
                className="my-8 border-gray-200"
              />
            );
          default:
            return null;
        }
      })}
    </article>
  );
}