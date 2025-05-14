"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Blog", href: "/blog" },
    { name: "Quiz", href: "/quiz" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 bg-slate-900 shadow-sm text-gray-300 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
          <div className="flex justify-between items-center py-4 h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Simplif<span className="text-teal-500">AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-teal-500 transition-colors text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/quiz">
                <button className="rounded-lg bg-teal-500 px-4 py-2 text-white font-semibold hover:bg-teal-600 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
                  Take the Quiz
                </button>
              </Link>
              <Link href="/categories">
                <button className="rounded-lg bg-white px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
                  Find AI Tools
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full bg-gray-300 transition-all ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-gray-300 transition-all ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-gray-300 transition-all ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden pt-16 px-6`}
      >
        <nav className="flex flex-col space-y-6 text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-gray-300 hover:text-teal-500 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4">
            <Link href="/quiz" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-lg bg-teal-500 px-4 py-2 text-white font-semibold hover:bg-teal-600 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
                Take the Quiz
              </button>
            </Link>
            <Link href="/categories" onClick={() => setIsOpen(false)}>
              <button className="w-full rounded-lg bg-white px-4 py-2 text-gray-800 font-semibold hover:bg-gray-100 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
                Find AI Tools
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;