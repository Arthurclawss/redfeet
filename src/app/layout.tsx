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
  title: "REDFEET TV | As Melhores Telinhas do Brasil!",
  description: "Líderes de telinhas no mercado. Netflix, Prime Video, Disney+, HBO Max, Globoplay, Premiere, UFC Fight Pass e muito mais de forma interativa e com ativação imediata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
