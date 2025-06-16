import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from 'next/font/google';
import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "@/utils/SmoothScrollProvider";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Ultron AI",
  description: "Create your own AI Avatar with Ultron AI by Metabrix. AI Avatar Generator. Customize your AI Avatar. ",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ultron AI",
    description: "Create your own AI Avatar with Ultron AI by Metabrix. AI Avatar Generator. Customize your AI Avatar. ",
    images: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultron AI",
    description: "Create your own AI Avatar with Ultron AI by Metabrix. AI Avatar Generator. Customize your AI Avatar. ",
    images: "/ultron_logo_ico.svg",
  },
  metadataBase: new URL("https://ultronai.me"),
  alternates: {
    canonical: "https://ultronai.me",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-outfit antialiased`}
      >
        <Navbar />
        <SmoothScrollProvider>
        {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
