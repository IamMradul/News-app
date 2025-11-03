import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundVideo from "../components/BackgroundVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "Stay updated with the latest news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 min-h-screen`}>
        <BackgroundVideo />
        <main className="relative z-10 min-h-screen bg-gradient-to-b from-gray-900/40 to-gray-800/40">
          {children}
        </main>
      </body>
    </html>
  );
}
