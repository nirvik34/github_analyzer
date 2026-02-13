import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GitHub Portfolio Analyzer - GitSignal AI",
  description: "Turn Repositories into Recruiter-Ready Proof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-white dark:bg-[#191919] text-black dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
