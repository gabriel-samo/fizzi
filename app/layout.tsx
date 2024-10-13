import "./globals.css";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Fizzi App",
  description: "Demo app for Fizzi Soda built with Next.js by Gabriel Samoylov"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
