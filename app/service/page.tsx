import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Financial Services in India | Advisory & Investment Solutions",
  description:
    "Comprehensive financial services from Dimension Group. Expert advisory in bonds, fixed deposits, mutual funds, provident fund, and corporate finance.",
  keywords: [
    "financial services",
    "financial advisory",
    "investment advisory",
    "advisory services",
    "financial solutions",
    "investment services",
    "wealth advisory",
    "corporate finance",
    "debt advisory",
    "investment management",
  ],
  openGraph: {
    title: "Financial Services in India | Dimension Group",
    description:
      "Expert financial advisory and investment solutions. Bonds, fixed deposits, mutual funds, provident fund advisory and corporate finance services.",
    type: "website",
  },
};

const page: PageData = {
  eyebrow: "Services",
  title: "Services",
  intro:
    "Dimension Group supports clients with business advisory and portfolio services built around funding, strategy, risk control and long-term wealth creation.",
  sourceUrl: "https://dimensiongroup.co.in/service.html",
  sections: [
    {
      title: "Business Advisory Services",
      paragraphs: [
        "We provide new ideas along with additional funding to take it to the next level having several options. So, that the risk on the company is quite low and enough to earn a significant return on their investment.",
      ],
    },
    {
      title: "Portfolio Services",
      paragraphs: [
        "Appropriate investment strategies are tailor made to achieve your specified objectives and endeavor to outperform broader indices. Thus, creating long term wealth for investors.",
        "The performance of the portfolio is assessed periodically to evaluate the quantitative measurement of the return obtained against the risk involved in the portfolio. In this phase, if there is a requirement of changes in the portfolio to achieve the specific return expectation, the asset allocation is also drifted which in turn helps to achieve the goal within a stipulated period of time.",
      ],
    },
  ],
};

export default function ServicePage() {
  return <ContentPage page={page} scene="gears" />;
}
