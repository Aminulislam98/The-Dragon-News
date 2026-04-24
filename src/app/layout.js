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
  description: "A news website about dragons.",
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
