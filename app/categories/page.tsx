"use client"

import Header from "../(components)/Header"
import categories from '../../data/categories.json'
import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from "../(components)/Footer";

export default function CategoriesPage() {
    const [searchQuery, setSearchQuery] = useState('');
  
    // Sort categories by toolCount (descending) by default
    const sortedCategories = useMemo(() => {
      return [...categories].sort((a, b) => b.toolCount - a.toolCount);
    }, [categories]);
  
    const filteredCategories = useMemo(() => {
      return sortedCategories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [searchQuery, sortedCategories]);
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>AI Tool Categories | SimplifAI</title>
          <meta name="description" content="Browse all AI tool categories sorted by popularity" />
        </Head>
  
        <header>
            <Header />
        </header>

        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl mt-20 font-bold text-gray-900 mb-2">
            Discover AI Tools by Category
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore tailored AI tools designed for every need — from writing to business and beyond.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search categories..."
                className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
  
          {/* Categories grid */}
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{category.icon}</span>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h2>
                      <p className="mt-2 text-gray-600">{category.description}</p>
                      <div className="mt-4 flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {category.toolCount}+ tools
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No categories found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
  
          {/* Stats footer */}
          <div className="mt-16 text-center text-sm text-gray-500">
            <p>
              {categories.length} categories • {categories.reduce((sum, cat) => sum + cat.toolCount, 0)}+ tools indexed
            </p>
          </div>
        </main>

        <footer>
            <Footer />
        </footer>
      </div>
    );
  }