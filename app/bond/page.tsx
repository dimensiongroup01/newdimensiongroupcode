import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Bonds Investment in India | Corporate & Government Bonds",
  description:
    "Invest in corporate, PSU and government bonds with Dimension Group's BondsAdda platform. SEBI-regulated broker offering transparent pricing, high yields up to 14%+, and expert advisory.",
  keywords: [
    "bonds investment India",
    "corporate bonds India",
    "bonds in India",
    "government bonds",
    "PSU bonds",
    "debentures",
    "bond investment",
    "bond yield",
    "fixed income investment",
    "bonds buying",
    "online bonds",
    "bond broker India",
  ],
  openGraph: {
    title: "Bonds Investment in India | Buy Corporate & Government Bonds",
    description:
      "SEBI-regulated bonds platform offering corporate, PSU and government debt investments with live listings, transparent pricing and expert advisory.",
    type: "website",
  },
};

const page: PageData = {
  eyebrow: "Invest",
  title: "Bonds & Debentures",
  intro:
    "Debt instruments help governments and corporations raise capital while giving investors access to fixed-income opportunities.",
  sourceUrl: "https://dimensiongroup.co.in/bond.html",
  sections: [
    {
      title: "Bond",
      paragraphs: [
        "Governments at all levels and corporations commonly use bonds in order to borrow money. Governments need to fund roads, schools, dams or other infrastructure. The sudden expense of a war may also demand the need to raise funds.",
        "Similarly, corporations will often borrow to grow their business, to buy property and equipment, to undertake profitable projects, for research and development or to hire employees.",
        "The problem that large organizations run into is that they typically need far more money than the average bank can provide. Bonds provide a solution by allowing many individual investors to assume the role of lender.",
        "Public debt markets let thousands of investors each lend a portion of the capital needed. Moreover, markets allow lenders to sell their bonds to other investors or to buy bonds from other individuals long after the original issuing organization raised capital.",
      ],
    },
    {
      title: "Debentures",
      paragraphs: [
        "Debentures generally have a more specific purpose than other bonds. While both are used to raise capital, debentures typically are issued to raise capital to meet the expenses of an upcoming project or to pay for a planned expansion in business.",
        "These debt securities are a common form of long-term financing taken out by corporations.",
      ],
    },
    {
      title: "Invest In Bonds With Us",
      paragraphs: [
        "Bonds Adda, a website of Dimension Financial Solutions Private Limited, is a SEBI-registered broker and an Online Bond Providing Platform (OBPP) that enables investors to trade bonds and debentures through exchange in the secondary market.",
      ],
      links: [{ label: "Open Bonds Adda", href: "https://bondsadda.com/" }],
    },
    {
      title: "Featured Bonds",
      paragraphs: [
        "These featured Listings present coupon, maturity, face value, ISIN and redemption details for BondAdda investors.",
      ],
      cards: [
        {
          title: "12.00% Akara Capital Advisors Pvt Ltd 2027",
          paragraphs: [
            "Coupon: 12.00%",
            "Face value: Rs. 10,00,000",
            "Maturity: 11/06/2027",
            "Redemption type: Bullet Redemption",
            "ISIN: INE08XP07431",
            "Rating: BBB",
          ],
          link: {
            label: "View on BondsAdda",
            href: "https://bondsadda.com/bond/akara-capital-advisors-2027",
          },
        },
        {
          title: "11.50% Satin Creditcare Network Ltd 2031",
          paragraphs: [
            "Coupon: 11.50%",
            "Face value: Rs. 10,00,000",
            "Maturity: 24/01/2031",
            "Redemption type: Bullet Redemption",
            "ISIN: INE836B08293",
            "Rating: A",
          ],
          link: {
            label: "View on BondsAdda",
            href: "https://bondsadda.com/bond/satin-creditcare-network-2031",
          },
        },
        {
          title: "12.50% Akara Capital Advisors Pvt Ltd 2028",
          paragraphs: [
            "Coupon: 12.50%",
            "Face value: Rs. 10,00,000",
            "Maturity: 27/12/2028",
            "Redemption type: Partial Redemption",
            "ISIN: INE08XP07324",
            "Rating: BBB",
          ],
          link: {
            label: "View on BondsAdda",
            href: "https://bondsadda.com/bond/akara-capital-advisors-2028",
          },
        },
      ],
    },
  ],
};

export default function BondPage() {
  return <ContentPage page={page} scene="bonds" />;
}
