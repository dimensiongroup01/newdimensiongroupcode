import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";
import logo from "@/app/logo.svg";

export const metadata: Metadata = {
  title: "Dimension Group Companies | DFS & BondsAdda",
  description:
    "Dimension Financial Solutions and BondsAdda are part of the Dimension Group conglomerate offering financial advisory, bond marketplace, and investment services.",
  keywords: [
    "Dimension Financial Solutions",
    "DFS",
    "BondsAdda",
    "Dimension Group companies",
    "financial companies India",
    "group companies",
  ],
  openGraph: {
    title: "Dimension Group Companies | Financial Services",
    description:
      "Dimension Financial Solutions Pvt Ltd and BondsAdda - leading financial advisory and bond marketplace platform.",
    type: "website",
  },
};

const page: PageData = {
  eyebrow: "Group Companies",
  title: "Group Companies",
  intro:
    "Dimension Group offers premier financial market advisory through Dimension Financial Solutions Pvt. Ltd. and its flagship bond platform, BondsAdda.",
  sourceUrl: "https://dimensiongroup.co.in/group-companies.html",
  sections: [
    {
      title: "Dimension Financial Solutions Pvt. Ltd",
      image: logo.src,
      imageAlt: "Dimension Financial Solutions logo",
      paragraphs: [
        "A SEBI-registered Merchant Banker and Stock Broker, Dimension Financial Solutions Pvt. Ltd. provides debt advisory, capital markets support and institutional-grade execution.",
        "Our team supports corporate issuers, institutional investors and high-net-worth clients across debt syndication, bond distribution and secondary market strategies.",
        "With strong regulatory backing and trusted market relationships, DFS brings credibility, compliance and clarity to every transaction.",
      ],
      links: [
        { label: "Visit DFS website", href: "https://dimensionfinancial.co.in/" },
        { label: "SEBI merchant banker details", href: "https://www.sebi.gov.in/" },
      ],
    },
    {
      title: "BondsAdda",
      image: "/images/bondsadda-logo.webp",
      imageAlt: "BondsAdda logo",
      paragraphs: [
        "BondsAdda is the flagship online bond platform from Dimension Financial Solutions, providing investors with curated fixed-income opportunities and transparent secondary market access.",
        "As an OBPP registered with BSE, BondsAdda enables efficient bond trading, investor onboarding and seamless execution for corporate and retail clients.",
        "BondsAdda focuses on secure, compliant bond listings and makes it easier for investors to discover debt products from reputed issuers.",
      ],
      links: [
        { label: "Open BondsAdda", href: "https://bondsadda.com/" },
        { label: "BSE OBPP information", href: "https://www.bseindia.com/" },
      ],
    },
  ],
};

export default function GroupCompaniesPage() {
  return <ContentPage page={page} scene="network" />;
}
