import Header from "../(components)/Header"
import Footer from "../(components)/Footer";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 mt-20">About SimplifAI</h1>
        <p className="text-gray-700 leading-7">
          SimplifAI is your daily AI assistant — helping creators, students, and small businesses discover the best AI tools to boost productivity and simplify life.
        </p>
        <p className="mt-4 text-gray-700 leading-7">
          Whether you are looking for image generation, video editing, chatbots, or personal productivity tools — we have curated the top AI solutions to save you time and energy.
        </p>
      </div>

      <footer className="mt-auto">
        <Footer />
      </footer>
      </div>
    );
  }