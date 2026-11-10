import type { CaseStudy } from "../types";

export const stockt: CaseStudy = {
  slug: "stockt",
  title: "Stockt Inventory Onboarding",
  category: "video",
  startingPoint: "from-scratch",
  domain: "B2B SaaS",

  role: "UI Designer & Motion Specialist",
  year: "2025",
  tools: ["Rive", "After Effects", "Premiere Pro"],
  summary: "Animating tactile onboarding flows and explainer sequences to reduce B2B SaaS friction.",

  card: {
    description: "Animating tactile onboarding flows and explainer sequences to reduce B2B SaaS friction.",
    image: "/images/projects/stockt-thumbnail.png",
  },

  story: {
    goal: { body: "An explainer video and interactive onboarding sequence for a B2B SaaS inventory management tool." },
    challenge: { body: "Explaining complex warehouse logic in under 60 seconds without overwhelming the viewer with technical jargon." },
    approach: { body: "Developed a visual metaphor using isometric motion graphics, paired with rhythmic sound design to guide the viewer's attention through the user journey." },
  },

  // ⚠️ youtubeId sebelumnya masih contoh/placeholder. Ganti dengan video aslimu.
  showcase: [{ type: "video", youtubeId: "ebHDN9hrItE", title: "Stockt Inventory Onboarding Explainer" }],
};
