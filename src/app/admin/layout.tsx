import { Anuphan } from "next/font/google"
import "../[locale]/globals.css"

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

export const metadata = {
  title: "WAW Automobile — Admin",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${anuphan.variable} antialiased`}>{children}</body>
    </html>
  )
}
