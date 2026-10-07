import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Annual Returns | Dimension Group",
  description:
    "Annual financial returns and regulatory disclosures for Dimension Financial Solutions Pvt Ltd.",
  keywords: [
    "annual return",
    "financial statements",
    "regulatory disclosure",
    "investor information",
  ],
  openGraph: {
    title: "Annual Returns | Dimension Group",
    description: "Annual financial returns and regulatory disclosures.",
    type: "website",
  },
};

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

const page: PageData = {
  eyebrow: "Investor Corner",
  title: "Annual Return",
  intro: "Balance sheets and annual-return documents for Dimension Group companies.",
  sourceUrl: "https://dimensiongroup.co.in/annual-return.html",
  sections: [
    {
      title: "Balance Sheet",
      table: {
        title: "Balance Sheet Documents",
        columns: ["Year", "Document", "View"],
        rows: [
          ["2020 - 21", "DFSPL Balance Sheet", asset("wp-content/uploads/2023/11/Balance_Sheet_2020-21_DFSPL.pdf")],
          ["2022", "DFSPL Balance Sheet", asset("wp-content/uploads/2023/11/Balance_Sheet_2022_DFSPL.pdf")],
          ["2023", "DFSPL Balance Sheet", asset("wp-content/uploads/2023/11/Balance_Sheet_2023_sd_DFSPL.pdf")],
          ["2021", "DCS Balance Sheet", asset("wp-content/uploads/2023/12/BS_DCS_2021.pdf")],
          ["2022", "DCS Balance Sheet", asset("wp-content/uploads/2023/12/BS_DCS_2022.pdf")],
          ["2023", "DCS Balance Sheet", asset("wp-content/uploads/2023/12/BS_DCS_2023.pdf")],
        ],
      },
    },
    {
      title: "Annual Report",
      table: {
        title: "Annual Report Documents",
        columns: ["Document", "View"],
        rows: [
          ["Annual Report DFS 2021", asset("wp-content/uploads/2023/11/MGT-7_DFS_2021.pdf")],
          ["Annual Report DFS 2022", asset("wp-content/uploads/2023/11/MGT-7_DFS_2022.pdf")],
          ["Annual Report DCS 2021", asset("wp-content/uploads/2023/11/MGT-7A_DCS_2021.pdf")],
          ["Annual Report DCS 2022", asset("wp-content/uploads/2023/11/MGT-7A_DCS_2022.pdf")],
        ],
      },
    },
  ],
};

export default function AnnualReturnPage() {
  return <ContentPage page={page} scene="docs" />;
}
