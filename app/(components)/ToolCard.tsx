import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

interface Tool {
  name: string;
  description: string;
  url: string;
  logo: string;
  category: string;
  howToUse: string;
  pros: string[];
  cons: string[];
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <>
    <div className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden h-full flex flex-col">
      <div className="p-6 flex-grow">
        {/* Header with logo */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
              <Image
                src={tool.logo}
                alt={`${tool.name} logo`}
                fill
                className="object-contain p-1"
                unoptimized
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-500 capitalize">{tool.category.replace('-', ' ')}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">{tool.description}</p>

        {/* How to use */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            How to Use
          </h4>
          <p className="text-sm text-gray-600">{tool.howToUse}</p>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-green-600 flex items-center gap-1 mb-1">
              <FiThumbsUp className="inline" /> Pros
            </h4>
            <ul className="space-y-1">
              {tool.pros.slice(0, 3).map((pro, i) => (
                <li key={i} className="text-gray-600 flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-red-600 flex items-center gap-1 mb-1">
              <FiThumbsDown className="inline" /> Cons
            </h4>
            <ul className="space-y-1">
              {tool.cons.slice(0, 3).map((con, i) => (
                <li key={i} className="text-gray-600 flex items-start">
                  <span className="text-red-500 mr-1">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-4 mt-auto">
        <Link
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Visit Site
          <FiExternalLink className="ml-2" />
        </Link>
      </div>
    </div>    
    </>
  );
}