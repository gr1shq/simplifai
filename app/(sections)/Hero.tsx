"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import tools from "../../data/tools.json";

const Hero = () => {
  const [currentToolIndex, setCurrentToolIndex] = useState(0);

  // Select first 6 tools from tools.json
  const featuredTools = tools.slice(0, 6); // Jasper, Copy.ai, GitHub Copilot, Replit Ghostwriter, Quizlet AI, Socratic by Google

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentToolIndex((prev) => (prev + 1) % featuredTools.length);
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(interval);
  }, [featuredTools.length]);

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-center px-4 pt-8 sm:pt-4 pb-8 sm:pb-4">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          Discover the <span className="text-teal-500">Best AI Tools</span> for You
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in animate-delay-100">
          SimplifAI helps you find, compare, and learn about AI tools for productivity, creativity, and more.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 animate-fade-in animate-delay-200">
          <Link href="/quiz">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
              Take the Quiz →
            </button>
          </Link>
          <Link href="/categories">
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500">
              Explore Tools
            </button>
          </Link>
        </div>

        <div className="flex justify-center gap-6 mb-10 animate-fade-in animate-delay-300">
          {featuredTools.map((tool, index) => (
            <div
              key={tool.name}
              className={`transition-opacity duration-500 ${
                index === currentToolIndex ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <Image
                src={tool.logo || "/fallback-logo.png"}
                alt={`${tool.name} logo`}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all animate-fade-in animate-delay-400">
            <h3 className="text-lg font-semibold text-gray-800">Find Tools</h3>
            <p className="text-gray-600">Take our quiz to get personalized AI tool recommendations.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all animate-fade-in animate-delay-500">
            <h3 className="text-lg font-semibold text-gray-800">Compare</h3>
            <p className="text-gray-600">Compare features, pros, and cons of top AI tools.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all animate-fade-in animate-delay-600">
            <h3 className="text-lg font-semibold text-gray-800">Learn More</h3>
            <p className="text-gray-600">Read guides and tips to maximize AI tool benefits.</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
        .animate-delay-400 { animation-delay: 0.4s; }
        .animate-delay-500 { animation-delay: 0.5s; }
        .animate-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default Hero;