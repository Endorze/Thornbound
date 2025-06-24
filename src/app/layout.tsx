import type { Metadata } from "next";
import { Cinzel, Almendra, Vollkorn } from 'next/font/google';
import ScrollToTop from './components/ScrollToTop';
import "./globals.css";
import Header from "./components/001-Feature-Header";
import ThornboundFooter from "./components/Footer/Footer";

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

const almendra = Almendra({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-almendra',
});

const vollkorn = Vollkorn({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-vollkorn',
});

export const metadata: Metadata = {
  title: "Thornbound",
  description: "Thornbound is a game created by students from Futuregames Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${vollkorn.variable} ${almendra.variable} font-sans`}>
        <Header />
        {children}
      <ScrollToTop/>
      <ThornboundFooter />
      </body>
    </html>
  );
}
