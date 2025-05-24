import type { Metadata } from "next";
import { ReactLenis } from "@/components/utils/lenis";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: 'Brusells Brewery',
  description: 'Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere in Brussels.',
  openGraph: {
    title: 'Brusells Brewery – Brewed To Perfection',
    description: 'Visit our café in Brussels for the best coffees.',
    url: 'https://brusells-brewery.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://brusells-brewery.vercel.app/',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ReactLenis root>

      <body className="bg-[#eed7bd]" 
      >
        <Navbar/>
        {children}
      </body>
    </ReactLenis>
    </html>
  );
}
