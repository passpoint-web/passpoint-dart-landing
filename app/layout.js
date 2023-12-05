import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { AOSInit } from "@/components/ui/Aos";
import 'animate.css';

const haken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-haken",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Dart",
  description: "Powering global payments for growing businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <meta name="theme-color" content="#6F4183" />
      <body className={`${inter.variable} ${haken.variable}`}>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
