import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Mutual Fund Investment India | SIP & Equity/Debt Funds",
  description:
    "Invest in mutual funds with expert advisory from Dimension Group. Access equity, debt, and hybrid mutual funds with SIP options and professional guidance.",
  keywords: [
    "mutual fund investment",
    "mutual fund investment India",
    "SIP investment",
    "equity mutual funds",
    "debt mutual funds",
    "mutual fund advisor",
    "mutual fund advisory",
    "best mutual funds",
    "fund investment",
    "wealth creation",
    "financial investment",
    "investment planning",
  ],
  openGraph: {
    title: "Mutual Fund Investment India | Expert Advisory & SIP",
    description:
      "Professional mutual fund investment advisory. Access equity, debt and hybrid funds with SIP options and expert guidance from certified advisors.",
    type: "website",
  },
};

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

const page: PageData = {
  eyebrow: "Invest",
  title: "Mutual Funds",
  intro:
    "Mutual funds pool money from many investors to invest in shares, debt securities, money market securities or a combination of these.",
  sourceUrl: "https://dimensiongroup.co.in/mutual-fund.html",
  sections: [
    {
      title: "Why Invest In Mutual Funds?",
      paragraphs: [
        "A mutual fund is an entity that pools the money of many investors, its unit-holders, to invest in different securities. Investments may be in shares, debt securities, money market securities or a combination of these.",
        "Those securities are professionally managed on behalf of the unit-holders, and each investor holds a pro-rata share of the portfolio, entitled to any profits when the securities are sold, but subject to any losses in value as well.",
      ],
    },
    {
      title: "Benefits Of Mutual Fund",
      cards: [
        {
          title: "Transparency",
          paragraphs: [
            "You get regular information on the value of your investment in addition to disclosure on the specific investments made by the mutual fund scheme.",
          ],
        },
        {
          title: "Low Cost",
          paragraphs: [
            "A mutual fund lets you participate in a diversified portfolio for as little as Rs.5,000/-, and sometimes less. And with a no-load fund, you pay little or no sales charges to own them.",
          ],
        },
        {
          title: "Liquidity",
          paragraphs: [
            "A mutual fund lets you participate in a diversified portfolio for as little as Rs.5,000/-, and sometimes less. And with a no-load fund, you pay little or no sales charges to own them.",
          ],
        },
        {
          title: "Diversification",
          paragraphs: [
            "Mutual funds invest in a broad range of securities. This limits investment risk by reducing the effect of a possible decline in the value of any one security.",
            "Mutual fund unit-holders can benefit from diversification techniques usually available only to investors wealthy enough to buy significant positions in a wide variety of securities.",
          ],
        },
        {
          title: "Professional Investment Management",
          paragraphs: [
            "Mutual funds hire full-time, high-level investment professionals. Funds can afford to do so as they manage large pools of money.",
            "The managers have real-time access to crucial market information and are able to execute trades on the largest and most cost-effective scale.",
          ],
        },
        {
          title: "Convenience & Flexibility",
          paragraphs: [
            "You own just one security rather than many, yet enjoy the benefits of a diversified portfolio and a wide range of services.",
            "Fund managers decide what securities to trade, collect the interest payments, and see that your dividends on portfolio securities are received and your rights exercised.",
          ],
        },
      ],
    },
    {
      title: "Mutual Fund Forms",
      paragraphs: ["SIP - Systematic Investment Plan. CAF - Common Application Form."],
      links: [
        { label: "Aditya Birla Equity CAF", href: asset("mutual-funds/ADITYA_BIRLA_Equity_CAF.pdf") },
        { label: "Aditya Birla Equity SIP", href: asset("mutual-funds/ADITYA_BIRLA_Equity_SIP.pdf") },
        { label: "Axis Equity & Hybrid CAF", href: asset("mutual-funds/AXIS_Equity_&_Hybrid_CAF.pdf") },
        { label: "Axis Equity & Hybrid SIP", href: asset("mutual-funds/AXIS_Equity_&_Hybrid_SIP.pdf") },
        { label: "HDFC Debt CAF", href: asset("mutual-funds/HDFC_Debt_CAF.pdf") },
        { label: "HDFC Debt SIP", href: asset("mutual-funds/HDFC_Debt_SIP.pdf") },
        { label: "HDFC Equity CAF", href: asset("mutual-funds/HDFC_EQUITY_COMMON_APPLICATION_FORM.pdf") },
        { label: "HDFC Equity SIP", href: asset("mutual-funds/HDFC_Equity_SIP_FORM.pdf") },
        { label: "SBI Debt Liquid Fund CAF", href: asset("mutual-funds/SBI_DEBT_LIQUID_FUND_CAF.pdf") },
        { label: "SBI Debt Liquid SIP", href: asset("mutual-funds/SBI_DEBT_LIQUID_SIP.pdf") },
        { label: "SBI Equity CAF", href: asset("mutual-funds/SBI_EQUITY_CAF.pdf") },
        { label: "SBI Equity SIP", href: asset("mutual-funds/SBI_EQUITY_SIP.pdf") },
        { label: "ICICI", href: asset("mutual-funds/ICICI.pdf") },
        { label: "Principal CAF/SIP Form", href: asset("mutual-funds/PRINCIPAL_CAF_SIP_FORM.pdf") },
      ],
    },
  ],
};

export default function MutualFundPage() {
  return <ContentPage page={page} scene="growth" />;
}
