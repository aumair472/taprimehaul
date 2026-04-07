import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SITE_CONFIG } from "@/constants";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TA Prime Haul LLC",
  description: "Professional freight & logistics. Moving America Forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.name,
    "image": "https://taprimehaul.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16613 Amistad Ave suite# 100",
      "addressLocality": "Prosper",
      "addressRegion": "TX",
      "postalCode": "75078",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.2427677,
      "longitude": -96.8153443
    },
    "url": "https://taprimehaul.com",
    "telephone": SITE_CONFIG.phoneRaw,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "17:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} ${syne.variable} antialiased font-dm-sans bg-[#0F1117] relative`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        <Toaster position="top-center" richColors />
        <script
          src="https://s.pageclip.co/v1/pageclip.js"
          charSet="utf-8"
          async
        ></script>
      </body>
    </html>
  );
}
