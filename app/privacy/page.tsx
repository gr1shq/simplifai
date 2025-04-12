import Head from 'next/head';
import Link from 'next/link';
import Header from '../(components)/Header';
import Footer from '../(components)/Footer';

const PrivacyPolicy = () => {
  const lastUpdated = "April 10, 2025"; // Update this date when making changes

  return (

    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy | SimplifAI</title>
        <meta name="description" content="Learn how SimplifAI collects and protects your personal information" />
      </Head>

      <header>
        <Header />
      </header>

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg mt-20 shadow-sm">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg mb-6">
              At SimplifAI, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. Information We Collect</h2>
            <p className="mb-4">
              <strong>Personal Information:</strong> If you contact us, we may collect your name and email address.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect non-personal data like page visits, click behavior, and time on site (via Google Analytics).
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>To improve website functionality and user experience</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To send occasional updates if you opt in</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. Data Sharing</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Google Analytics for analytics</li>
              <li>Affiliate networks to track commissions</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. Your Rights</h2>
            <p className="mb-6">
              You may request deletion of your personal information at any time by contacting us at{" "}
              <a href="mailto:gpentertainment28@gmail.com" className="text-blue-600 hover:underline">
                gpentertainment28@gmail.com
              </a>.
            </p>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy periodically. The "Last Updated" date at the top of this page will indicate when changes were made.
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

export default PrivacyPolicy;