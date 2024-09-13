import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Pirateflix",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html className={"dark"} lang="pt-br">
      <body
        className={`${inter.className} bg-zinc-700`}
      >
        {children}
      </body>
    </html>
  );
}
