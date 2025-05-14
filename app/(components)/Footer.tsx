import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold font-mono mb-4">
              <span className="text-white">Simplif</span>
              <span className="text-teal-500">AI</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Helping you navigate the AI landscape with unbiased tool recommendations and expert insights.
            </p>
            {/* Newsletter Signup */}
            {/* <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg px-4 py-2 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-lg bg-teal-500 px-4 py-2 text-white font-semibold hover:bg-teal-600 transition-all hover:scale-105 focus:ring-2 focus:ring-teal-500"
              >
                Subscribe
              </button>
            </form> */}
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://x.com/tapecodeEnt"
                className="text-gray-400 hover:text-teal-500 transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.254 2h3.63L14.41 10.08 23.12 22h-7.35l-5.18-6.97L4.75 22H1.12l8.01-8.87L.88 2h7.5l4.77 6.43L18.254 2Zm-1.27 18.7h2.01L6.11 3.18H4.03L16.984 20.7Z" />
                </svg>
              </a>
              <a
                href="https://github.com/gr1shq"
                className="text-gray-400 hover:text-teal-500 transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://pinterest.com/simplifai"
                className="text-gray-400 hover:text-teal-500 transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
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

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-gray-400 text-center">
          <p>
            © {new Date().getFullYear()} SimplifAI. All rights reserved.
          </p>
          <p className="mt-2">
            AI tools and reviews are independently selected by our team. We may earn a commission when you purchase through our links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;