import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Dimension Group — Financial Advisory, Bonds, Mutual Funds & Fixed Deposits",
  description:
    "Dimension Group is a Delhi-headquartered financial conglomerate offering end-to-end investment management across Provident Fund, Bonds & Debentures, Mutual Funds and Fixed Deposits.",
  keywords: [
    "Dimension Group",
    "Dimension Financial Solutions",
    "BondsAdda",
    "SEBI merchant banker",
    "online bond platform",
    "debt advisory",
    "mutual funds",
    "fixed deposits",
    "provident fund",
    "financial services",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Dimension Group — Financial Advisory, Bonds, Mutual Funds & Fixed Deposits",
    description:
      "Dimension Group is a Delhi-headquartered financial conglomerate offering end-to-end investment management across Provident Fund, Bonds & Debentures, Mutual Funds and Fixed Deposits.",
    type: "website",
    siteName: "Dimension Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimension Group — Financial Advisory, Bonds, Mutual Funds & Fixed Deposits",
    description:
      "Dimension Group is a Delhi-headquartered financial conglomerate offering end-to-end investment management across Provident Fund, Bonds & Debentures, Mutual Funds and Fixed Deposits.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
