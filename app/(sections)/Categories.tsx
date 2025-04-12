import Head from "next/head"
import Card from "../(components)/Card"
import Link from "next/link"
import categories from "../../data/categories.json"

const Categories = () => {

    const categoriesSix = categories.slice(0, 6)

  return (
    <>
     <Head>
        <title>Simplifai | Free AI Tools for Students, Work & Coding</title>
        <meta name="description" content="Discover the best free AI tools like ChatGPT for students, professionals, and coders. Simplify your life with AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Section Header with decorative element */}
    <div className="text-center mb-12 relative">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Choose Your <span className="text-blue-600">AI Solution</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Discover the perfect AI tools tailored to your specific needs
      </p>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoriesSix.map((category, index) => (
        <Card 
          key={index} 
          {...category}
          // Add visual distinction for featured categories
        //   featured={index < 3} // First 3 cards get "featured" treatment
        />
      ))}
    </div>

    {/* Optional CTA */}
    <div className="text-center mt-10">
      <Link 
        href="/categories" 
        className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        Browse All Categories
        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </div>
</section>
    </>
  )
}

export default Categories
