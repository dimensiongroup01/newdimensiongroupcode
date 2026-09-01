import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Dimension Group | Financial Advisory & Investment Services India",
  description:
    "Dimension Group provides financial advisory, investment solutions, bonds, fixed deposits, mutual funds, provident fund and corporate finance services across India. SEBI-regulated merchant banker.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "financial advisory",
    "financial advisor",
    "investment advisory",
    "investment advisor",
    "financial advisory services",
    "Dimension Group",
    "financial services India",
    "bonds investment",
    "fixed deposits",
    "mutual funds",
    "provident fund",
    "wealth management",
    "investment management",
    "debt advisory",
    "merchant banking",
    "corporate finance",
    "financial planning",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Dimension Group | Financial Advisory & Investment Services India",
    description:
      "Dimension Group provides financial advisory, investment solutions, bonds, fixed deposits, mutual funds, provident fund and corporate finance services across India.",
    type: "website",
    siteName: "Dimension Group",
    url: "https://dimensiongroup.co.in",
    images: [
      {
        url: "https://dimensiongroup.co.in/images/dimension-group-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Dimension Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dimension Group | Financial Advisory & Investment Services India",
    description:
      "Dimension Group provides financial advisory, investment solutions, bonds, fixed deposits, mutual funds, provident fund and corporate finance services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dimension Group",
    alternateName: ["Dimension Financial Solutions", "BondsAdda"],
    url: "https://dimensiongroup.co.in",
    logo: "https://dimensiongroup.co.in/images/dimension-group-logo.jpeg",
    description:
      "Dimension Group is a Delhi-headquartered financial advisory and investment management company offering bonds, fixed deposits, mutual funds, and provident fund solutions.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Delhi",
      streetAddress: "Delhi",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

