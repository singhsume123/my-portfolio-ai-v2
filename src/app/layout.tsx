import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sumeet Singh Arora | Portfolio",
  description: "Portfolio for Sumeet Singh Arora",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 text-neutral-50 antialiased h-full`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center px-6 py-4">
              <Link
                href="/"
                className="text-xl font-bold text-neutral-50 hover:text-sky-300 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                ⌂
              </Link>
            </div>
          </header>

          <main className="flex-1 bg-neutral-950 min-h-screen">
            <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
              {children}
            </div>
          </main>

          <footer className="border-t border-neutral-800 bg-neutral-950/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-neutral-400">
              <span>© {year} Sumeet Singh Arora</span>
              <span className="text-neutral-500">Crafted with care.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
