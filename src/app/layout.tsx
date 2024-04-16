import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nam Thanh",
  description: "Nam Hoang Ngoc Thanh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <div className="px-6 md:px-6 pb-24 md:pb-44 max-w-[700px] mx-auto">
        <Header />
          <main className="min-h-screen ">
            {children}
          </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
