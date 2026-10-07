import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Policies | Dimension Group",
  description:
    "Privacy policy, terms of service, and regulatory policies for Dimension Group financial services.",
  keywords: ["policies", "terms of service", "privacy policy", "regulatory"],
  openGraph: {
    title: "Policies | Dimension Group",
    description: "Privacy, terms, and regulatory policies.",
    type: "website",
  },
};

const page: PageData = {
  eyebrow: "Investor Corner",
  title: "Policies",
  intro: "Policy documents available for Dimension Group companies.",
  sourceUrl: "https://dimensiongroup.co.in/policies.html",
  sections: [
    {
      title: "Policies",
      links: [
        {
          label: "DCSPL Posh Policy",
          href: "https://dg.dimensiongroup.co.in/wp-content/uploads/2023/11/DCSPL_Posh_Policy-1.pdf",
        },
        {
          label: "DFSP Posh Policy",
          href: "https://dg.dimensiongroup.co.in/wp-content/uploads/2023/11/DFSP-Policy-POSH-POLICY-1.pdf",
        },
      ],
    },
  ],
};

export default function PoliciesPage() {
  return <ContentPage page={page} scene="docs" />;
}
