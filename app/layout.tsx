import "@fontsource/bebas-neue";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M. Adnan Arshad | Senior AI/ML Engineer",
  description:
    "Portfolio of M. Adnan Arshad, a Senior AI/ML Engineer specializing in Generative AI, computer vision, LLMs, RAG systems, and production ML."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
