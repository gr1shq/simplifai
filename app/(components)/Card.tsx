import Link from "next/link"

interface CardProps {
    icon: string
    name: string
    description: string
    toolCount: number
    href: string
}


const Card = ({icon, name, description, toolCount, href}: CardProps) => {



  return (
<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-100">
      {/* Icon/Emoji */}
      <div className="text-4xl mb-4" aria-hidden="true">
        {icon}
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      {/* Footer with link and tool count */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {toolCount}+ tools
        </span>
        <Link 
          href={href}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors flex items-center"
        >
          Explore
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default Card
