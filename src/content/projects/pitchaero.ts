import type { CaseStudy } from "../types";

export const pitchaero: CaseStudy = {
  slug: "pitchaero",
  title: "Pitchaero Dashboard Icons",
  category: "motion",
  startingPoint: "from-scratch",
  domain: "Dashboard",

  role: "Motion Designer",
  year: "2024",
  tools: ["After Effects", "Lottie", "Figma"],
  summary:
    "A scalable library of functional micro-animations designed to provide immediate visual feedback and enhance information hierarchy within the Pitchaero SaaS dashboard.",

  card: {
    description: "Scalable library of functional micro-animations enhancing user feedback and visual hierarchy in a SaaS dashboard.",
    image: "/images/projects/pitchaero-thumb.png",
  },

  story: {
    goal: { body: "A cohesive set of animated icons designed to provide immediate, delightful visual feedback for user actions within the Pitchaero platform." },
    challenge: { body: "Ensuring consistency in timing, easing, and visual weight across multiple different icon concepts without bloating the application bundle size." },
    approach: { body: "Established strict motion guidelines (duration, easing curves) in Figma before animating in After Effects. Exported as lightweight Lottie JSON files for seamless developer handoff." },
  },

  showcase: [
    {
      type: "motion",
      data: {
        type: "icon",
        icons: [
          { name: "Animation 1", cardTitle: "High Sensitive", src: "/lotties/Draft 1.json", format: "lottie" },
          { name: "Animation 2", cardTitle: "Alert System", src: "/lotties/Draft 2.json", format: "lottie" },
          { name: "Animation 3", cardTitle: "Operator System", src: "/lotties/Draft 3.json", format: "lottie" },
          { name: "Animation 4", cardTitle: "Save Wild Life", src: "/lotties/Draft 4.json", format: "lottie" },
        ],
      },
    },
  ],
};
