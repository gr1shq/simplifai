import Head from "next/head";
import Header from "./(components)/Header";
import Hero from "./(sections)/Hero";
import Categories from "./(sections)/Categories";
import BlogSection from "./(sections)/BlogSection";
import Footer from "./(components)/Footer";

function Home() {

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      <Head>
      <title>Simplifai | Free AI Tools for Students, Work & Coding</title>
      <meta name="description" content="Discover the best free AI tools like ChatGPT for students, professionals, and coders. Simplify your life with AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Categories />
        <BlogSection />
      </main>
      <footer>
        <Footer />
      </footer>
        
    </div>
  );
}

export default Home
