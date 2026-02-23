import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import { FMPlayerProvider } from "@/context/FMPlayerContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konga Communications - FM Radio & Entertainment",
  description:
    "Konga Communications - Your premier destination for music, entertainment, and live radio. Tune in to our FM shows including Morning Inspiration, Urban Vibes, and more. Experience quality content and entertainment.",
  keywords: [
    "radio",
    "FM",
    "entertainment",
    "music",
    "live shows",
    "Konga Communications",
  ],
  openGraph: {
    title: "Konga Communications - FM Radio & Entertainment",
    description:
      "Your premier destination for music, entertainment, and live radio.",
    type: "website",
    locale: "en_NG",
    siteName: "Konga Communications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konga Communications - FM Radio & Entertainment",
    description:
      "Your premier destination for music, entertainment, and live radio.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FMPlayerProvider>
          <Header />
          {children}
          <BackToTop />
          <Footer />
        </FMPlayerProvider>
      </body>
    </html>
  );
}
