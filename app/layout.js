import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Daniel",
  description: "Made by Faxraddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} font-mont dark:bg-dark bg-light w-full min-h-screen`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
