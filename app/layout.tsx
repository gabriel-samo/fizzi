import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/sections/Header";
import ViewCanvas from "@/components/3d/ViewCanvas";

export const runtime = "edge";

const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Fizzi - Soda for Gutsy People",
  description: "Fizzi App Demo built with Next.js by Gabriel Samoylov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300 antialiased">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
    </html>
  );
}
