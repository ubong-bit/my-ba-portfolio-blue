export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Business Analysis Techniques",
    description: "How I discover, define, and validate what the business needs.",
    items: [
      "Requirements Elicitation",
      "Stakeholder Analysis & Management",
      "BPMN 2.0 Process Mapping",
      "User Stories & Acceptance Criteria",
      "BRD/FRD Documentation",
      "UAT",
      "GAP Analysis",
      "SWOT Analysis",
      "Process Improvement",
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "What I use to document, model, and analyse.",
    items: [
      "JIRA",
      "Confluence",
      "Lucidchart",
      "Balsamiq",
      "Microsoft Excel (Advanced)",
      "SQL",
      "Power BI",
      "Draw.io",
      "Microsoft Visio",
    ],
  },
  {
    title: "Methodologies",
    description: "The delivery frameworks I work within.",
    items: ["Agile Scrum", "Waterfall", "SDLC", "Design Thinking", "Lean"],
  },
];
