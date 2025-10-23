import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


const Harmond = localFont({
  src: './fonts/Harmond-SemiBoldCondensed.otf',
  variable: '--font-Harmond-SemBdItaCond',
  display: 'swap',
})
const HarmondD = localFont({
  src: './fonts/Harmond-ExtraBoldExpanded.otf',
  variable: '--font-Harmond-ExtBdItaExp',
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subham",
  description: "Personal portfolio of Subham Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Harmond.variable} ${HarmondD.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
