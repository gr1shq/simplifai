"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import tools from "../../data/tools.json";

interface Tool {
  name: string;
  description: string;
  url: string;
  logo: string;
  category: string;
  howToUse: string | string[];
  pros: string[];
  cons: string[];
}

// Merge Notta AI Notetaker entries
const mergedTools = tools
  .map((tool) =>
    tool.name === "Notta AI Notetaker"
      ? {
          name: "Notta AI Notetaker",
          description: "AI voice notes, transcription, and meeting summaries for personal and professional use.",
          url: "https://notta.ai",
          logo: "https://logo.clearbit.com/notta.ai",
          category: "productivity,professionals",
          howToUse: "Record voice memos, meetings, or upload audio for text conversion and summaries.",
          pros: ["Multi-language support", "Offline mode", "Team collaboration", "Cloud sync"],
          cons: ["Mobile app bugs", "No video support", "No free export options", "Occasional sync delays"],
        }
      : tool
  )
  .filter(
    (tool, index, self) =>
      index === self.findIndex((t) => t.name === tool.name)
  );

const questions = [
  {
    id: "goal",
    text: "What’s your primary goal?",
    options: [
      { value: "writing", label: "Writing (e.g., blogs, marketing copy)" },
      { value: "coding", label: "Coding (e.g., programming, automation)" },
      { value: "studying", label: "Studying (e.g., homework, research)" },
      { value: "content-creation", label: "Content Creation (e.g., videos, designs)" },
      { value: "chatbots", label: "Chatbots (e.g., customer support, fun)" },
      { value: "image-generation", label: "Image Generation (e.g., art, visuals)" },
      { value: "productivity", label: "Productivity (e.g., notes, planning)" },
      { value: "customer-support", label: "Customer Support (e.g., live chat)" },
      { value: "marketing-sales", label: "Marketing/Sales (e.g., lead generation)" },
    ],
  },
  {
    id: "budget",
    text: "What’s your budget?",
    options: [
      { value: "free", label: "Free (I prefer free tools)" },
      { value: "paid", label: "Paid (I’m open to premium tools)" },
    ],
  },
];

const freeTools = ["Socratic by Google", "Character.AI", "Copy.ai"];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<Tool[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const scores: { [key: string]: number } = {};
      mergedTools.forEach((tool: Tool) => {
        scores[tool.name] = 0;
        const categories = tool.category.split(",");
        if (
          categories.includes(newAnswers.goal) ||
          (categories.includes("students") && newAnswers.goal === "studying") ||
          (categories.includes("professionals") && newAnswers.goal === "customer-support")
        ) {
          scores[tool.name] += 2;
        }
        if (newAnswers.budget === "free" && freeTools.includes(tool.name)) {
          scores[tool.name] += 1;
        } else if (newAnswers.budget === "paid" && !freeTools.includes(tool.name)) {
          scores[tool.name] += 1;
        }
      });

      const topTools = mergedTools
        .filter((tool) => scores[tool.name] > 0)
        .sort((a, b) => scores[b.name] - scores[a.name]);

      setResults(topTools);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResults([]);
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Discover Your <span className="text-teal-500">Ideal AI Tool</span>
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Answer two quick questions to find the best AI tools for your needs.
          </p>
        </div>

        {results.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            {currentQuestion === 0 && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Welcome to the SimplifAI Quiz
                </h2>
                <button
                  onClick={() => setCurrentQuestion(1)}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
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
                      className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 transition-all hover:scale-[1.02]"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your AI Tool Recommendations
            </h2>
            <div className="space-y-6">
              {results.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <Image
                    src={tool.logo || "/fallback-logo.png"}
                    alt={`${tool.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                    <Link
                      href={tool.url}
                      target="_blank"
                      className="text-teal-500 hover:text-teal-600 font-medium"
                    >
                      Try {tool.name} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={resetQuiz}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Retake Quiz
              </button>
              <Link
                href="/categories"
                className="block mt-4 text-teal-500 hover:text-teal-600 font-medium"
              >
                Explore All Tools
              </Link>
              <a
                href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
                  "https://simplifai.com/quiz"
                )}&media=${encodeURIComponent(
                  results[0]?.logo || "https://simplifai.com/fallback-logo.png"
                )}&description=${encodeURIComponent("Discover Your Ideal AI Tool with SimplifAI’s Quiz!")}`}
                className="inline-block mt-4 bg-gray-100 p-2 rounded-full"
              >
                <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.628 3.875 10.35 9.113 11.633-.12-1.073-.227-2.727.05-3.91.25-1.068 1.613-6.803 1.613-6.803s-.412-.825-.412-2.043c0-1.91 1.107-3.337 2.487-3.337 1.173 0 1.737.887 1.737 1.95 0 1.187-.75 2.963-.113 4.612.537 1.387 1.65 2.375 3 2.375 3.6 0 6.375-3.787 6.375-8.962 0-4.688-3.375-7.962-8.212-7.962-5.587 0-8.887 4.175-8.887 8.475 0 1.675.637 3.475 1.425 4.45.187.225.225.45.15.675-.113.337-.375 1.05-.45 1.2-.075.15-.262.3-.637.375-1.35.3-4.725-.487-6.412-2.737C2.175 16.95 4.95 22.5 10.95 22.5c7.013 0 12.45-5.662 12.45-12.45C23.4 5.373 18.027 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;