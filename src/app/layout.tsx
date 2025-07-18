import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Loqo Fundraising",
  description: "A fundraising web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <div className="w-screen max-w-screen min-h-screen ">
          <div className="sticky top-0 left-0 z-50">
            <PromoBanner />
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
