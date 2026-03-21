import type { Metadata } from "next";
import { Anuphan, Alumni_Sans_SC } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const alumniSansSC = Alumni_Sans_SC({
  variable: "--font-alumni",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "WAW Automobile",
  description:
    "Gebrauchtwagen, Unfallwagen, Fahrzeugteile & Reifen-Umziehservice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${anuphan.variable} ${alumniSansSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
