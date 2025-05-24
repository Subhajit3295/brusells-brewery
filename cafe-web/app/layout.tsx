import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Brusells Brewery",
  description: "Created by Subhajit Mondal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#eed7bd]" 
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
