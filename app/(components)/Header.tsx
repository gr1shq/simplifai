"use client"

import Head from "next/head";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or any other icon library
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Simplifai | Free AI Tools for Students, Work & Coding</title>
        <meta name="description" content="Discover the best free AI tools like ChatGPT for students, professionals, and coders. Simplify your life with AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="fixed w-full bg-white z-50 shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <h1 className="text-2xl font-bold font-mono">
  <span className="text-gray-800">Simplif</span>
  <span className="text-blue-600 ">AI</span>
</h1>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="hover:text-blue-600 transition-colors">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors">
                  <Link href="/categories">Categories</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-blue-600 transition-colors">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
                <Link href="/categories">
              <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                Find your AI tools
              </button>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 shadow-lg">
            <div className="space-y-1 px-4 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50"
              >
                Categories
              </Link>
              <Link
                href="/blog"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
            <div className="px-4 pt-4">
                <Link href="/categories">
              <button className="w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
                Find your AI tools
              </button>
                </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
