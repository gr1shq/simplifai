import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Simplifai | Free AI Tools for Students, Work & Coding",
  description: "Discover the best free AI tools like ChatGPT for students, professionals, and coders. Simplify your life with AI!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-KE229EQ55C`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KE229EQ55C');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}