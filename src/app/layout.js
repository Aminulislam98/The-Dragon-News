import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "The Dragon News",
  description: "The news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={` h-full antialiased`}>
      <body className={`min-h-full flex flex-col ${poppins.className}`}>
        <main>{children}</main>
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
