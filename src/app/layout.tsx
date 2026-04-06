import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} ${syne.variable} antialiased font-dm-sans bg-[#0F1117]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
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
