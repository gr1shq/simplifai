import Footer from "../(components)/Footer";
import Header from "../(components)/Header";

export default function ContactPage() {
    return (
    <div className="flex flex-col min-h-screen">
        
        <header>
            <Header />
        </header>


      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 mt-20">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have a question, suggestion, or collaboration idea? We’d love to hear from you!
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>
            📧 Email: <a href="mailto:gpentertainment28@gmail.com" className="text-blue-600 underline">gpentertainment28@gmail.com</a>
          </li>
          <li>
            🌐 Twitter (X): <a href="https://twitter.com/@tapecodeEnt" className="text-blue-600 underline">@tapecodeEnt
            </a>
          </li>
          <li>
            🧠 Or just say hi on any of our social platforms.
          </li>
        </ul>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
      </div>
    );
  }
  