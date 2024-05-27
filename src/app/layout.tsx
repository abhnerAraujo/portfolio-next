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
        <footer className="flex flex-col p-10 lg:pr-20 lg:pl-20 gap-8 pb-36">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
