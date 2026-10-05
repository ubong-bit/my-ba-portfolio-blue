export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  problem: string;
  role: string;
  deliverables: string[];
  impact: string[];
  tools: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-checkout-optimization",
    title: "E-Commerce Checkout Optimization",
    summary:
      "Cut a 12-step checkout to 5 steps for a retail platform losing 70% of carts.",
    tags: ["BPMN", "JIRA", "BRD"],
    problem:
      "A retail platform was losing 70% of shoppers between cart and payment. Stakeholders disagreed on the cause, and no one had mapped the checkout end to end.",
    role: "Business Analyst",
    deliverables: [
      "5 stakeholder interviews covering product, support, and operations",
      "AS-IS and TO-BE process maps in Lucidchart (12 steps reduced to 5)",
      "Business Requirements Document (BRD)",
      "20 user stories with acceptance criteria in JIRA",
    ],
    impact: ["About 60% fewer checkout steps (12 to 5)", "Requirements ready for sprint planning"],
    tools: ["Lucidchart", "JIRA"],
    github: "#",
    demo: "#",
  },
  {
    id: "support-analytics-dashboard",
    title: "Customer Support Analytics Dashboard",
    summary:
      "Defined requirements, wireframes, and KPIs for a support team's reporting dashboard.",
    tags: ["FRD", "Wireframes", "Power BI"],
    problem:
      "Support leads tracked performance across scattered spreadsheets, so they could not see ticket volume, response times, or backlog in one place.",
    role: "Business Analyst",
    deliverables: [
      "Functional Requirements Document (FRD) with 15 functional requirements",
      "Balsamiq wireframes for each dashboard view",
      "KPI definitions and data requirements for Power BI",
    ],
    impact: [
      "One agreed set of support KPIs",
      "Build-ready requirements and wireframes for the BI developer",
    ],
    tools: ["Balsamiq", "Power BI", "Microsoft Excel"],
    github: "#",
    demo: "#",
  },
  {
    id: "loan-application-transformation",
    title: "Loan Application Digital Transformation",
    summary:
      "Moved a bank's manual loan process online and reduced manual approvals by 40%.",
    tags: ["BPMN", "BRD", "UAT"],
    problem:
      "A bank's loan applications relied on paper forms and manual approval steps, which slowed decisions and made status hard to track.",
    role: "Business Analyst",
    deliverables: [
      "Requirements workshops with credit, operations, and compliance stakeholders",
      "Business Requirements Document (BRD)",
      "BPMN 2.0 process models (AS-IS and TO-BE)",
      "UAT test cases and sign-off criteria",
    ],
    impact: ["40% reduction in manual approvals"],
    tools: ["Microsoft Visio", "JIRA", "Confluence"],
    github: "#",
    demo: "#",
  },
];
