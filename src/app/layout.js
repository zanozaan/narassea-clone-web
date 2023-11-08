import { Inter } from "next/font/google";
import "./globals.css";
import "../app/assets/style.css";
import "../app/assets/demo-files/demo.css";
import Navbar from "./components/Navbar/Navbar.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Narassea",
  description: "Website Clone Narrasea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
