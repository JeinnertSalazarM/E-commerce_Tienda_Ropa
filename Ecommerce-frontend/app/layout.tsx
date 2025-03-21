

import Footer from "@/components/Footer";
import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({

  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Diseños Doraly Boutique",
  description: "Ecommerce para la tienda fisica Doraly Boutique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className}`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>


      </body>

    </html>
  );
}
