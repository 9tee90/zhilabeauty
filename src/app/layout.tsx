import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Import Global Navbar
import { ThemeProvider } from "next-themes"; // Dark Mode Support

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zhila Beauty - The Ultimate Beauty Network",
  description: "Join the exclusive beauty community for MUAs, Clinics, and Brands. Monetize, Connect & Grow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100 dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
