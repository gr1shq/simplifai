import Head from 'next/head';
import Header from '../(components)/Header';
import Footer from '../(components)/Footer';

const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Affiliate Disclosure | SimplifAI</title>
        <meta name="description" content="How we use affiliate links to support our platform" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white mt-20 p-8 sm:p-10 rounded-xl shadow-sm border border-gray-100">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Affiliate Disclosure
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="prose prose-blue max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-8 border-l-4 border-blue-400">
              <p className="font-medium text-gray-800">
                <span className="text-blue-600 font-bold">Transparency note:</span> Some links on SimplifAI are affiliate links. This means we may earn a commission if you purchase through these links — at no extra cost to you.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">How It Works</h2>
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>We only recommend tools we have <span className="font-medium">personally tested</span> or thoroughly researched</li>
              <li>Commissions help support our team and keep the platform running</li>
              <li>Prices are <span className="font-medium">exactly the same</span> whether you use our links or not</li>
              <li>You never pay more — sometimes we even secure exclusive discounts</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Our Promise</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-600 mb-2">No BS Recommendations</h3>
                <p className="text-gray-600 text-sm">We will never promote a tool just for the commission. If it is not genuinely useful, we wont list it.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-600 mb-2">Clear Labeling</h3>
                <p className="text-gray-600 text-sm">Affiliate links are marked with a (*) or tagged as  &quot;Affiliate Link&quot;.</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Support Us</h2>
            <p className="mb-6">
              Using our affiliate links is the <span className="font-medium">#1 way</span> to support SimplifAI is growth. It is like leaving a tip without paying extra!
            </p>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Questions?</h3>
              <p>
                Email us at {" "}
                <a href="mailto:gpentertainment28@gmail.com" className="text-blue-600 hover:underline font-medium">
                  gpentertainment28@gmail.com
                </a>
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

export default AffiliateDisclosure;