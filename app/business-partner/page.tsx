import type { Metadata } from "next";
import ContentPage, { type PageData } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Business Partner Programs | Dimension Group",
  description:
    "Become a business partner with Dimension Group. Explore partnership opportunities in financial advisory, bonds distribution, and investment services.",
  keywords: [
    "business partner",
    "partnership program",
    "financial partner",
    "distribution partner",
    "bond partner",
  ],
  openGraph: {
    title: "Business Partner Programs | Dimension Group",
    description:
      "Partnership opportunities in financial services, bond distribution, and investment advisory.",
    type: "website",
  },
};

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

const page: PageData = {
  eyebrow: "Business Partners",
  title: "Business Partners",
  intro:
    "Become a Dimension Group business partner and build an independent financial services practice with support from a diversified financial group.",
  sourceUrl: "https://dimensiongroup.co.in/business-partner.html",
  sections: [
    {
      title: "Start Your Own Business",
      paragraphs: [
        "What if you could start your own business where you have the freedom to make your own business decisions, where your clients benefit and you get to focus on what you enjoy?",
        "Becoming Dimension Group's Business Partner can bring you a new level of freedom.",
      ],
    },
    {
      title: "Why Partner With Us?",
      bullets: [
        "We are known for life-long and steady relationships with our Business Partners/Associates.",
        "We believe in long-term commitment & association that plays a vital role in the growth of the business.",
        "We believe in growing with our Business Partners/Associates.",
        "To be most trusted & preferred diversified financial services provider.",
        "We provide the most appropriate and reliable Financial Services through well informed & knowledgeable resource, committed employees & Innovation.",
      ],
    },
    {
      title: "Empanelment Form",
      paragraphs: [
        "Fill out the form and send a scanned copy at the given email: debt@dimensiongroup.co.in.",
        "You can fill out the form and we will be in touch once verified.",
      ],
      links: [
        { label: "Email debt@dimensiongroup.co.in", href: "mailto:debt@dimensiongroup.co.in" },
        {
          label: "Download Business Partner Form",
          href: asset("wp-content/uploads/2019/05/Associate-empanelment-form.pdf"),
        },
      ],
    },
    {
      title: "Form Details Requested",
      bullets: [
        "Name: first, middle and last",
        "Postal address: address lines, city, state or province, postal code and country",
        "Phone and email",
        "Tax status: Individual, Sole Proprietorship, Partnership Firm, Pvt. Ltd. Company, Public Ltd. Company, Society/Trust or Others",
        "Bank account details for brokerage or other payments: beneficiary name, bank name, branch, city, account number, MICR code, IFSC code and account type",
        "Payment mode: warrant couriered to the address or direct credit where available",
        "Document uploads: Aadhar, Driving Licence, Passport, Voter ID, PAN, cancelled cheque and GST certificate if any",
        "Reference and additional information",
      ],
    },
  ],
};

export default function BusinessPartnerPage() {
  return <ContentPage page={page} scene="partner" />;
}
