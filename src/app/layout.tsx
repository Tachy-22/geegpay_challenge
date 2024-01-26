import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextProvider from "./provider";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geegpay",
  description: "A frontend challenge | J.E.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  `}>
        <NextProvider>
          <div className="flex relative h-screen overflow-hidden w-screen">
            <Nav />
            <div className="max-h-screen overflow-hidden"> {children}</div>{" "}
          </div>
        </NextProvider>
      </body>
    </html>
  );
}
