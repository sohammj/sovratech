import "./globals.css";
import { Poppins, Source_Sans_3, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-poppins",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "SovraTech",
  description: "Empowering Your Digital Presence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sourceSans.variable} ${playfair.variable} bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
