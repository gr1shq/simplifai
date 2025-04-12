import Head from 'next/head';
import Link from 'next/link';
import Header from '../(components)/Header';
import Footer from '../(components)/Footer';

const TermsOfService = () => {
  const lastUpdated = "April 10, 2025"; // Update this date when making changes

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service | SimplifAI</title>
        <meta name="description" content="Terms governing your use of SimplifAI's services" />
      </Head>

        <header>
            <Header />
        </header>
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white mt-20 p-8 rounded-lg shadow-sm">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-blue max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <p className="font-medium text-blue-800">
                By using SimplifAI, you agree to the following terms:
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Use of Site</h2>
            <p className="mb-6">
              You may browse and use the content for personal or commercial use, but you may not redistribute, resell, or modify the content without permission.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. AI Tools</h2>
            <p className="mb-6">
              SimplifAI lists and reviews third-party AI tools. We do not own or operate these tools and are not responsible for their functionality or your experience with them.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. Affiliate Links</h2>
            <p className="mb-6">
              Some links are affiliate links. If you click and make a purchase, we may receive a commission — at no extra cost to you. See our <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">Affiliate Disclosure</Link> for details.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. Termination</h2>
            <p className="mb-6">
              We reserve the right to terminate access or remove content without notice if the site is misused.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">5. Changes</h2>
            <p className="mb-6">
              We may update these terms at any time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Us</h3>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:gpentertainment28@gmail.com" className="text-blue-600 hover:underline">
                  gpentertainment28@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TermsOfService;