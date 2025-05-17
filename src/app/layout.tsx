import type { Metadata } from "next";
import Header from '@/app/ui/header';
import Footer from "@/app/ui/footer";
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
  title: "Movie database app",
  description: "Created by Pavlo Vinnyk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] flex flex-col gap-[32px]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
