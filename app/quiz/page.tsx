"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import tools from "../../data/tools.json";
import Header from "../(components)/Header";
import Footer from "../(components)/Footer";

interface Tool {
  name: string;
  description: string;
  url: string;
  logo: string;
  category: string;
  howToUse: string;
  pros: string[];
  cons: string[];
  isFree: boolean;
}

// Extract unique categories dynamically
const uniqueCategories = Array.from(
  new Set(
    tools.flatMap((tool: Tool) => tool.category.split(",").map((cat) => cat.trim()))
  )
).sort();

// Map categories to user-friendly labels
const categoryLabels: { [key: string]: string } = {
  writing: "Writing (e.g., blogs, marketing copy)",
  coding: "Coding (e.g., programming, automation)",
  students: "Studying (e.g., homework, research)",
  creators: "Content Creation (e.g., videos, designs)",
  chatbots: "Chatbots (e.g., customer support, fun)",
  "image-generation": "Image Generation (e.g., art, visuals)",
  productivity: "Productivity (e.g., notes, planning)",
  professionals: "Customer Support (e.g., live chat)",
  "marketing-sales": "Marketing/Sales (e.g., lead generation)",
  video: "Video Creation (e.g., presentations, ads)",
};

const questions = [
  {
    id: "goal",
    text: "What’s your primary goal?",
    options: uniqueCategories.map((category) => ({
      value: category,
      label: categoryLabels[category] || category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    })),
  },
  {
    id: "budget",
    text: "What is your budget?",
    options: [
      { value: "free", label: "Free (I prefer free tools)" },
      { value: "paid", label: "Paid (I am open to premium tools)" },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<Tool[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion - 1].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores
      const scores: { [key: string]: number } = {};
      tools.forEach((tool: Tool) => {
        scores[tool.name] = 0;
        const categories = tool.category.split(",").map((cat) => cat.trim());
        if (categories.includes(newAnswers.goal)) {
          scores[tool.name] += 2;
        }
        if (
          (newAnswers.budget === "free" && tool.isFree) ||
          (newAnswers.budget === "paid" && !tool.isFree)
        ) {
          scores[tool.name] += 1;
        }
      });

      // Sort tools by score
      const topTools = tools
        .filter((tool) => scores[tool.name] > 0)
        .sort((a, b) => scores[b.name] - scores[a.name])
        .slice(0, 5); // Limit to top 5 tools

      setResults(topTools);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white animate-fade-in">
              Discover Your <span className="text-teal-500">Ideal AI Tool</span>
            </h1>
            <p className="text-lg text-gray-300 mt-2 animate-fade-in animate-delay-100">
              Answer two quick questions to find the best AI tools for your needs.
            </p>
          </div>

          {results.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              {currentQuestion === 0 && (
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Welcome to the SimplifAI Quiz
                  </h2>
                  <button
                    onClick={() => setCurrentQuestion(1)}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500"
                  >
                    Start Quiz
                  </button>
                </div>
              )}
              {currentQuestion > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {questions[currentQuestion - 1].text}
                  </h2>
                  <div className="space-y-4">
                    {questions[currentQuestion - 1].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-teal-500"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your AI Tool Recommendations
              </h2>
              <div className="space-y-6">
                {results.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <Image
                      src={tool.logo || "/fallback-logo.png"}
                      alt={`${tool.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
                      <p className="text-gray-600">{tool.description}</p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          <strong>Pros:</strong> {tool.pros.join(", ")}
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Cons:</strong> {tool.cons.join(", ")}
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>How to Use:</strong> {tool.howToUse}
                        </p>
                      </div>
                      <Link
                        href={tool.url}
                        target="_blank"
                        className="inline-block mt-2 text-teal-500 hover:text-teal-600 font-medium"
                      >
                        Try {tool.name} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 space-y-4">
                <button
                  onClick={resetQuiz}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500"
                >
                  Retake Quiz
                </button>
                <Link
                  href="/categories"
                  className="block text-teal-500 hover:text-teal-600 font-medium"
                >
                  Explore All Tools
                </Link>
                <a
                  href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    "https://simplifai.com/quiz"
                  )}&media=${encodeURIComponent(
                    results[0]?.logo || "/fallback-logo.png"
                  )}&description=${encodeURIComponent(
                    `Found my ideal AI tools with SimplifAI’s quiz! Check out ${results[0]?.name} and more! #AI #Tech #SimplifAI`
                  )}`}
                  className="inline-block bg-gray-100 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Pinterest"
                >
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387-.12-1.102-.227-2.793.049-3.993.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.174.265-.402.159-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.93-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.042-1.002 2.349-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12S18.627 0 12 0z"
                    clipRule="evenodd"
                  />
                </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-delay-100 { animation-delay: 0.1s; }
      `}</style>
    </div>
  );
};

export default Quiz;