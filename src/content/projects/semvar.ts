import type { CaseStudy } from "../types";

export const semvar: CaseStudy = {
  slug: "semvar",
  title: "Semvar Digital Twin Hero",
  category: "motion",
  startingPoint: "from-scratch",
  domain: "B2B SaaS",

  role: "Motion Designer",
  year: "2025", // ⚠️ sebelumnya 2025 di kartu dan 2024 di halaman detail. Mohon dicek.
  tools: ["After Effects", "Premiere Pro", "Lottie"],
  summary:
    "An interactive hero animation demonstrating the real-time data visualization capabilities of the Semvar platform, featuring dynamic UI cards and robotic arm telemetry.",

  card: {
    description: "Interactive hero animation demonstrating real-time data visualization capabilities and robotic arm telemetry.",
    image: "/images/projects/semvar-thumb.jpg",
  },

  story: {
    goal: { body: "An interactive hero animation for a B2B SaaS platform, designed to immediately communicate the product's core value proposition." },
    challenge: { body: "Visualizing complex, abstract data telemetry in a way that is instantly understandable to non-technical stakeholders." },
    approach: { body: "Developed a dynamic UI card motion sequence paired with smooth easing curves, exported as a highly optimized MP4 for instant, silent autoplay on the web." },
  },

  showcase: [{ type: "motion", data: { type: "hero", format: "video", videoSrc: "/videos/semvar-hero.mp4" } }],
};
