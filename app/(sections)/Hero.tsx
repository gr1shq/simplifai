import Link from "next/link"

const Hero = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-[70vh] md:min-h-[50vh] gap-6 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Find the best <span className="text-blue-600 underline decoration-blue-200 decoration-2 underline-offset-4">AI tool</span> for your needs
        </h1>
  
        <h2 className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          SimplifAI helps you discover tools that make your life easier, from 
          <span className="text-blue-500 font-medium"> productivity</span> to 
          <span className="text-blue-500 font-medium"> personal growth</span>.
        </h2>
        <Link href="/categories">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
          Explore AI Tools →
        </button>
        </Link>

      </div>
    )
  }
  
  export default Hero