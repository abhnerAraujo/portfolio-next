import "./globals.scss";

import type { Metadata } from "next";
import { Chivo, Orbitron } from "next/font/google";
import { Footer } from "./components/footer";

const chivo = Chivo({ subsets: ["latin"], weight: "400" });
const orbitron = Orbitron({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Abhner's Portfolio",
  description: "Abhner's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const titleClass = "dark text-4xl " + orbitron.className;

  return (
    <html lang="en">
      <body className={chivo.className}>
        <header className="flex flex-row items-center justify-between p-6">
          <h4 className={titleClass}>&lt;Abhner/&gt;</h4>
        </header>
        {children}
        <footer className="flex flex-col p-10 lg:pr-20 lg:pl-20 gap-8 pb-36">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
