import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Provident Fund Advisory Services India | Retirement Planning",
  description:
    "Professional provident fund advisory and retirement planning services. Expert guidance on EPF, CPF, superannuation and gratuity fund management.",
  keywords: [
    "provident fund",
    "provident fund advisory",
    "EPF advisory",
    "retirement fund management",
    "provident fund investment",
    "superannuation fund",
    "gratuity fund management",
    "retirement planning",
    "pension fund advisory",
    "employee provident fund",
    "fund management",
    "retirement advisory",
  ],
  openGraph: {
    title: "Provident Fund Advisory Services | Retirement & Pension Planning",
    description:
      "Expert provident fund and retirement planning advisory. Comprehensive guidance on EPF, CPF, superannuation, and gratuity fund management.",
    type: "website",
  },
};

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

const page: PageData = {
  eyebrow: "Invest",
  title: "Provident Fund",
  intro:
    "A single platform solution for retirement-benefit needs across provident fund, pension, gratuity, superannuation and related institutional requirements.",
  sourceUrl: "https://dimensiongroup.co.in/provident-fund.html",
  sections: [
    {
      title: "Clients Served",
      paragraphs: [
        "We serve to large network of clients like Provident Funds, Pension & Retirement Funds, Charitable Trust, Corporates, and HNI's and retail investors.",
      ],
    },
    {
      title: "Retirement Benefits",
      paragraphs: [
        "We provide a single platform solution that assures the complete range of employee retirement benefits like PF management, superannuation, gratuity etc. can help the organization overcome each one of them competently.",
      ],
      cards: [
        {
          title: "Provident Fund",
          paragraphs: [
            "A provident fund is a compulsory, government-managed retirement savings on behalf of their employees. The money in the fund is then held and managed by the government, and eventually withdrawn by retirees.",
            "The primary objective of the scheme is to provide social security and to inculcate amongst the workers a spirit of savings while they are employed and to make provision for their benefit after they retire from service.",
          ],
        },
        {
          title: "Gratuity",
          paragraphs: [
            "It is a lump sum payment made to the employees based on the duration of their total service. The gratuity benefit is payable on termination of employment.",
            "It is basically a form of gratitude provided to the employees in monetary terms and is an important form of social security benefit.",
          ],
        },
        {
          title: "Superannuation",
          paragraphs: [
            "It is related to retirement plan set up by a company for the benefit of its employees. In this funds deposited either by the company or by the employee with the funds growing in value until the employee retire.",
            "Provision of pension may be an attraction for employees to continue in the organization as a regular income even after retirement has become a necessity.",
          ],
        },
      ],
    },
    {
      title: "Proposal And Investment Pattern",
      paragraphs: ["For PF proposal and further details please write on debt@dimensiongroup.co.in."],
      links: [
        { label: "Email debt@dimensiongroup.co.in", href: "mailto:debt@dimensiongroup.co.in" },
        {
          label: "Download Investment Pattern PDF",
          href: asset("wp-content/uploads/2019/05/INVESTEMNT_PATTERN.pdf"),
        },
      ],
    },
  ],
};

export default function ProvidentFundPage() {
  return <ContentPage page={page} scene="shield" />;
}
