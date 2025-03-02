import type { Metadata } from "next";
import "./globals.css";
import { cairo } from "@/app/ui/fonts";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const metadata: Metadata = {
  title: "AL MARSA",
  description: "Customs clearance and Transportation services in Saudi Arabia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} antialiased relative`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
