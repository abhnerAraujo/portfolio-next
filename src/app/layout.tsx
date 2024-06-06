import "./globals.scss";

import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import { Footer } from "./components/footer";

const chivo = Chivo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Abhner's Portfolio",
  description: "Abhner's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chivo.className}>
        {children}
        <footer className="pt-10 pb-36">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
