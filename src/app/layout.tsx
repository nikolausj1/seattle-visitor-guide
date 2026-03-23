import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justin's Guide to Seattle",
  description:
    "A curated guide to the best restaurants, bars, parks, and things to do in Seattle — by someone who's lived here for over a decade.",
  openGraph: {
    title: "Justin's Guide to Seattle",
    description:
      "Curated restaurants, bars, parks, and activities from a local who knows.",
    type: "website",
    url: "https://justinsguidetoseattle.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
