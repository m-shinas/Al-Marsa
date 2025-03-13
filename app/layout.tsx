import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cairo } from "@/app/ui/fonts";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ScrollToTop from "./ui/ScrollToTop";
import WhatsappBtn from "./ui/WhatsappBtn";

config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    template: '%s | Al Marsa Services',
    default: 'Home | Al Marsa Services',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  description: "Al Marsa provides all kind of cargo by sea, air & land. Door to Door, Import and Export Services all over Saudi Arabia",
  keywords: ["Customs Clearance", "Transportation", "Saudi Arabia", "Al Marsa Services", "logistics services", "Global Trade"],
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: 'white'
}

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
        <WhatsappBtn />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
