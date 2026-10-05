export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  highlights: string[];
  tools?: string[];
}

export const experiences: Experience[] = [
  {
    id: "10alytics",
    position: "Business Analysis Trainee",
    company: "10Alytics",
    period: "2025 – Present",
    highlights: [
      "Requirements gathering",
      "BPMN process modelling",
      "BRD/FRD documentation",
      "Agile ceremonies",
    ],
    tools: ["JIRA", "Confluence"],
  },
  {
    id: "previous-role",
    position: "Previous Role (Placeholder)",
    company: "Company name",
    period: "Add dates",
    highlights: ["Stakeholder communication", "Data analysis", "Problem solving"],
  },
];
