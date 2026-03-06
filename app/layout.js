import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import LoadingScreen from "./components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Sparcley | Creative Web Design & Development",
  description: "High-end creative web design and development agency focusing on sales and business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased selection:bg-accent selection:text-white`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <main className="site-container ">{children}</main>
        <div className="h-20 md:h-30" />
        <Footer />
      </body>
    </html>
  );
}

