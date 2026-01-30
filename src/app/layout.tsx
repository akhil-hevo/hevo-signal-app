import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Inter Display is part of the Inter family with display optical sizing
const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hevo Signals | Customer Success Dashboard",
  description:
    "The Customer Success Leader's Strategic Copilot. Uncover early churn risks, get a complete view of every customer, and act with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
