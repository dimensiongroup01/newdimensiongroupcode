export type ContentLink = {
  label: string;
  href: string;
  note?: string;
};

export type ContentTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type ContentSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: ContentLink[];
  image?: string;
  imageAlt?: string;
  cards?: {
    title: string;
    paragraphs: string[];
    link?: ContentLink;
  }[];
  table?: ContentTable;
};

export type ContentPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  sourceUrl: string;
  sections: ContentSection[];
};

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

export const pages: Record<string, ContentPageData> = {
  service: {
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
  },
  "provident-fund": {
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
          { label: "Download Investment Pattern PDF", href: asset("wp-content/uploads/2019/05/INVESTEMNT_PATTERN.pdf") },
        ],
      },
    ],
  },
  bond: {
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
              "Face value: ₹100000",
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
              "Face value: ₹100000",
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
              "Face value: ₹100000",
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
  },
  "mutual-fund": {
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
  },
  "fixed-deposit": {
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
        table: {
          title: "Fixed Deposit Documents",
          columns: ["Name", "Interest Sheet", "FD Forms"],
          rows: [
            ["Shriram Transport Finance Company Ltd.", asset("fixed-deposit/Shriram April Intrest sheet.pdf"), asset("fixed-deposit/Shriram April Form.pdf")],
            ["PNB Housing Finance Ltd.", asset("fixed-deposit/PNB Feb Intrest.pdf"), asset("fixed-deposit/Fixed Deposit_form_for_Public Latest.pdf")],
            ["Bajaj Finance Ltd.", asset("fixed-deposit/BAJAJ 1 MAY INTREST RATE.pdf"), asset("fixed-deposit/BAJAJ LATESTS FORM INTREST.pdf")],
            ["LIC Housing Finance Ltd.", asset("fixed-deposit/Lic Feb Intrest.pdf"), asset("fixed-deposit/LIC LATEST FORM FOR PUBLIC.pdf")],
          ],
        },
      },
      {
        title: "FD Form Downloads",
        links: [
          { label: "Bajaj Finance Limited", href: asset("fixed-deposit/BAJAJ_FINANCE_FD_FORM.pdf") },
          { label: "LIC Housing Finance Ltd.", href: asset("fixed-deposit/LIC_Sanchay_public_Deposit_Form.pdf") },
          { label: "Shriram Transport Finance Company Ltd", href: asset("fixed-deposit/Shriram_FD_FORM.pdf") },
          { label: "PNB Housing Finance Ltd.", href: asset("fixed-deposit/PNB_Fixed_Deposit_Form.pdf") },
        ],
      },
      {
        title: "Fixed Deposit Calculator Inputs",
        bullets: [
          "Original Amount",
          "Bank or Company: PNB, Bajaj, LIC, Shriram Transport",
          "Senior citizen selection",
          "Woman investor selection",
          "Approximate return calculation",
        ],
      },
    ],
  },
  "group-companies": {
    eyebrow: "Group Companies",
    title: "Group Companies",
    intro:
      "Dimension Group offers premier financial market advisory through Dimension Financial Solutions Pvt. Ltd. and its flagship bond platform, BondsAdda.",
    sourceUrl: "https://dimensiongroup.co.in/group-companies.html",
    sections: [
      {
        title: "Dimension Financial Solutions Pvt. Ltd",
        image: "https://dimensiongroup.co.in/wp-content/uploads/2019/05/dimesnion-logo-s.png",
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
        image: "https://bondsadda.com/img/logo.png",
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
  },
  "business-partner": {
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
          { label: "Download Business Partner Form", href: asset("wp-content/uploads/2019/05/Associate-empanelment-form.pdf") },
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
  },
  "annual-return": {
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
  },
  policies: {
    eyebrow: "Investor Corner",
    title: "Policies",
    intro: "Policy documents available for Dimension Group companies.",
    sourceUrl: "https://dimensiongroup.co.in/policies.html",
    sections: [
      {
        title: "Policies",
        links: [
          { label: "DCSPL Posh Policy", href: "https://dg.dimensiongroup.co.in/wp-content/uploads/2023/11/DCSPL_Posh_Policy-1.pdf" },
          { label: "DFSP Posh Policy", href: "https://dg.dimensiongroup.co.in/wp-content/uploads/2023/11/DFSP-Policy-POSH-POLICY-1.pdf" },
        ],
      },
    ],
  },
  codeofconduct: {
    eyebrow: "Investor Corner",
    title: "Code of Conduct",
    intro:
      "Dimension Group, a website of M/s Dimension Financial Solutions Private Limited, follows the Code of Conduct as per Schedule II of Securities and Exchange Board of India (Stock-Brokers) Regulations, 1992, amended from time to time.",
    sourceUrl: "https://dimensiongroup.co.in/codeofconduct.html",
    sections: [
      {
        title: "General",
        bullets: [
          "Integrity: A stock-broker shall maintain high standards of integrity, promptitude and fairness in the conduct of all his business.",
          "Exercise of due skill and care: A stock-broker shall act with due skill, care and diligence in the conduct of all his business.",
          "Manipulation: A stock-broker shall not indulge in manipulative, fraudulent or deceptive transactions or schemes or spread rumours with a view to distorting market equilibrium or making personal gains.",
          "Malpractices: A stock-broker shall not create false market either singly or in concert with others or indulge in any act detrimental to the investors interest or which leads to interference with the fair and smooth functioning of the market.",
          "Compliance with statutory requirements: A stock-broker shall abide by all provisions of the Act and the rules and regulations issued by the Government, the Board and the Stock Exchange from time to time as applicable.",
        ],
      },
      {
        title: "Duty To The Investor",
        bullets: [
          "Execution of Orders: A stock-broker shall faithfully execute orders for buying and selling securities at the best available market price and shall promptly inform clients about execution or non-execution.",
          "Issue of Contract Note: A stock-broker shall issue without delay to his client, or client of the sub-broker as the case may be, a contract note for all transactions in the form specified by the stock exchange.",
          "Breach of Trust: A stock-broker shall not disclose, discuss, or make improper use of confidential client information learned through the business relationship.",
          "Business and Commission: A stock-broker shall not encourage sales or purchases solely to generate brokerage or commission, and shall not furnish false or misleading quotations, advice or information.",
          "Business of Defaulting Clients: A stock-broker shall not knowingly deal or transact business for a client who has failed to carry out commitments in relation to securities with another stock-broker.",
          "Fairness to Clients: A stock-broker shall disclose whether acting as principal or agent, ensure no conflict of interest arises, and, where a conflict occurs, inform the client and avoid personal advantage.",
          "Investment Advice: A stock-broker shall not recommend acquiring, disposing of, or retaining securities unless he has reasonable grounds for believing the recommendation is suitable based on client holdings, financial situation and objectives.",
          "Investment advice in publicly accessible media requires disclosure of interest, including long or short positions of the stock broker, employee, dependent family members and employer, as applicable.",
          "Competence of Stock-Broker: A stock-broker should have adequately trained staff and arrangements to render fair, prompt and competent services to clients.",
        ],
      },
      {
        title: "Stock-Brokers Vis-a-Vis Other Stock-Brokers",
        bullets: [
          "Conduct of Dealings: A stock-broker shall cooperate with the other contracting party in comparing unmatched transactions and replacing documents declared as bad delivery.",
          "Protection of Clients Interests: A stock-broker shall extend fullest cooperation to other stock-brokers in protecting client rights to dividends, bonus shares, right shares and any other right related to securities.",
          "Transactions with Stock-Brokers: A stock-broker shall carry out transactions with other stock-brokers and comply with settlement obligations.",
          "Advertisement and Publicity: A stock-broker shall not advertise his business publicly unless permitted by the stock exchange.",
          "Inducement of Clients: A stock-broker shall not resort to unfair means of inducing clients from other stock-brokers.",
          "False or Misleading Returns: A stock-broker shall not neglect, fail or refuse to submit required returns and shall not make false or misleading statements on returns required by the Board and stock exchange.",
        ],
      },
      {
        title: "Stock Broker Acting As Underwriter",
        bullets: [
          "A Stock Broker shall make all efforts to protect the interests of its clients.",
          "A Stock Broker shall ensure that it and its personnel act ethically in all dealings with an issuer.",
          "A Stock Broker shall not make any oral or written statement that misrepresents services it can perform, services rendered to another issuer company, or its underwriting commitment.",
          "A Stock Broker shall avoid conflicts of interest and make adequate disclosure of its interest.",
          "A Stock Broker shall put in place a mechanism to resolve conflict of interest situations in an equitable manner.",
          "A Stock Broker shall make appropriate disclosure to the client of possible sources or potential areas of conflict that would impair fair, objective and unbiased services while acting as underwriter.",
          "A Stock Broker shall not divulge confidential issuer-company information to other issuers, press or any party, and shall not deal in securities of an issuer company without required disclosures.",
          "A Stock Broker shall promptly inform clients of any change in registration status, penal action by the Board, or material financial change that may adversely affect client or investor interests.",
          "A Stock Broker or its employees shall not render public investment advice about any security unless required disclosures of interest, including long or short positions, have been made.",
          "A Stock Broker, its directors, partners or managers shall not indulge in insider trading through their own accounts or through associates, family members, relatives or friends.",
          "A Stock Broker acting as an underwriter shall not indulge in unfair competition likely to harm other underwriters or place them at a disadvantage.",
          "An underwriter shall not be party to creation of false market, price rigging or manipulation, or passing unpublished price-sensitive information for securities listed or proposed to be listed on any stock exchange.",
        ],
      },
    ],
  },
};
