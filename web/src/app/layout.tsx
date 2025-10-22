import type { Metadata } from "next";
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
  title: "AI Ad Mastery | High-Impact Playbook",
  description:
    "Step-by-step workflows, prompt recipes, and AI tools to design elite, high-converting ads without a production budget.",
  openGraph: {
    title: "AI Ad Mastery | High-Impact Playbook",
    description:
      "Build scroll-stopping ads fast with proven workflows, AI prompts, and power tools—no agency required.",
    url: "https://agentic-a9735c96.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ad Mastery | High-Impact Playbook",
    description:
      "Strategic frameworks and AI prompts to ship better ads in record time.",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
