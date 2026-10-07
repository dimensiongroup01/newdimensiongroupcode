import type { Metadata } from "next";
import ContentPage, { type ContentDownload, type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Fixed Deposit Investment India | Corporate FD Returns",
  description:
    "Invest in corporate fixed deposits with guaranteed returns. Dimension Group offers high-yield FD investment opportunities from leading corporates with transparent terms.",
  keywords: [
    "fixed deposit investment India",
    "corporate fixed deposit",
    "corporate FD",
    "fixed deposit",
    "FD investment",
    "fixed income investment",
    "corporate FD investment",
    "FD returns",
    "FD yields",
    "deposit investment",
    "secured investment",
    "FD advisory",
  ],
  openGraph: {
    title: "Fixed Deposits Investment India | High-Yield Corporate FD",
    description:
      "Corporate fixed deposits with assured returns from leading companies. Transparent terms, expert advisory, and secure investment options.",
    type: "website",
  },
};

// Forms and interest sheets are served from public/documents/fixed-deposit.
const FD_DOCS = "/documents/fixed-deposit";

function fd(name: string, slug: string, short: string, sheetSize: string, formSize: string): ContentDownload {
  return {
    name,
    sheet: {
      href: `${FD_DOCS}/${slug}-interest-sheet.jpg`,
      preview: `${FD_DOCS}/${slug}-interest-preview.jpg`,
      fileName: `${short} - FD Interest Sheet.jpg`,
      size: sheetSize,
    },
    form: { href: `${FD_DOCS}/${slug}-fd-form.pdf`, fileName: `${short} - FD Form.pdf`, size: formSize },
  };
}

const page: PageData = {
  eyebrow: "Invest",
  title: "Fixed Deposits",
  intro:
    "Corporate fixed deposits are curated by Dimension Group experts to combine fixed-return assurance with high-interest opportunities from leading corporate houses.",
  sourceUrl: "https://dimensiongroup.co.in/fixed-deposit.html",
  sections: [
    {
      title: "Why Invest In Fixed Deposit?",
      paragraphs: [
        "Fixed deposits are one of India's favorite investment options, as they give investors the assurance of fixed returns, with high interest rates.",
        "We offer only fixed deposits from leading corporate houses. All our offerings are curated by our experts; our experts verify every corporate deposit before making it available for investment.",
        "When you invest in the fixed deposits you enjoy the benefits of safety coupled with high returns.",
      ],
    },
    {
      title: "Interest Sheets And Forms",
      downloads: [
        fd("Shriram Finance Company", "shriram-finance", "Shriram", "313 KB", "9.0 MB"),
        fd("PNB Housing Finance Ltd.", "pnb-housing-finance", "PNB Housing", "385 KB", "5.8 MB"),
        fd("Bajaj Finance Ltd.", "bajaj-finance", "Bajaj Finance", "511 KB", "1.9 MB"),
        fd("LIC Housing Finance Ltd.", "lic-housing-finance", "LIC Housing", "500 KB", "9.2 MB"),
      ],
    },
    {
      title: "FD Form Downloads",
      links: [
        { label: "Bajaj Finance Limited", href: `${FD_DOCS}/bajaj-finance-fd-form.pdf` },
        { label: "LIC Housing Finance Ltd.", href: `${FD_DOCS}/lic-housing-finance-fd-form.pdf` },
        { label: "Shriram Finance Company", href: `${FD_DOCS}/shriram-finance-fd-form.pdf` },
        { label: "PNB Housing Finance Ltd.", href: `${FD_DOCS}/pnb-housing-finance-fd-form.pdf` },
      ],
    },
    {
      title: "Fixed Deposit Calculator Inputs",
      bullets: [
        "Original Amount",
        "Bank or Company: PNB, Bajaj, LIC, Shriram Finance",
        "Senior citizen selection",
        "Woman investor selection",
        "Approximate return calculation",
      ],
    },
  ],
};

export default function FixedDepositPage() {
  return <ContentPage page={page} scene="vault" />;
}
