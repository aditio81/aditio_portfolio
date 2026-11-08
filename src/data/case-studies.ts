import type { UICaseStudyData } from "@/components/case-study/UICaseStudyHero";
import type { NarrativeData } from "@/components/case-study/UICaseStudyNarrative";
import type { MockupData } from "@/components/case-study/UICaseStudyMockups";
import type { MotionCaseStudyContent } from "@/components/case-study/MotionCaseStudyLayout";
import type { VideoCaseStudyContent } from "@/components/case-study/VideoCaseStudyLayout";

// Interface gabungan untuk UI/UX Case Study
export interface UICaseStudyContent {
  hero: UICaseStudyData;
  narrative: NarrativeData;
  mockups: MockupData;
}

// ============================================================================
// 1. UI/UX CASE STUDY: GJLS ENTERTAINMENT
// ============================================================================
export const gjlsCaseStudy: UICaseStudyContent = {
  hero: {
    slug: "gjls",
    clientName: "GJLS Entertainment",
    projectTitle: "Digital Ecosystem Redesign",
    role: "Lead Product Designer & Frontend Developer",
    year: "2026",
    duration: "3 Months",
    stack: ["Figma", "Next.js", "Tailwind CSS", "Web3Forms", "Rive"],
    oneLiner: "Transforming a chaotic brand image into a structured, high-performance digital ecosystem that increased user engagement and sponsor trust.",
    heroImage: "/images/case-studies/cover2.png", // ⚠️ GANTI DENGAN GAMBAR ASLI
  },
  narrative: {
    challengeTitle: "A Dead Website Behind a Living Brand",
    challengeSummary: "GJLS Entertainment had built a thriving community on YouTube and Instagram, but their official website told a different story—outdated, incomplete, and last updated in 2024. For potential sponsors conducting due diligence, this digital disconnect created a credibility gap that threatened to undermine years of high-quality content production.",
    challengePoints: [
      "Website footer displayed 'Last Updated 2024', signaling abandonment to potential partners.",
      "Critical business pages (Media Kit, Partnership, Merch) were completely missing, forcing sponsors to rely on unprofessional DM inquiries.",
      "Visual inconsistency and empty placeholders failed to represent the high production value of their actual YouTube events."
    ],
    solutionTitle: "Rebuilding Trust Through Complete Digital Infrastructure",
    solutionSummary: "Rather than a superficial visual refresh, the redesign focused on architectural completeness—ensuring every page served a strategic purpose for both fans and business partners. The goal was to create a digital headquarters that matched the energy of their social media presence.",
    solutionPoints: [
      "Designed a dedicated Partnership & Media Kit page with clear collaboration tiers and audience demographics.",
      "Architected a comprehensive multi-page structure (Events, Merch, About) to ensure 100% information availability for due diligence.",
      "Implemented a cohesive, modern design system with dynamic content blocks to project a professional, production-ready brand image."
    ]
  },
  mockups: {
    pages: [
      {
        title: "Homepage - The Digital Front Door",
        description: "The main landing page establishes immediate brand recognition with bold typography, dynamic episode highlights, and clear CTAs for both fans and potential sponsors.",
        image: "/images/case-studies/09.png", // ⚠️ GANTI DENGAN GAMBAR ASLI
        category: "Homepage",
        highlight: "Above Fold Optimization"
      },
      {
        title: "Partnership & Media Kit Page",
        description: "A dedicated B2B page showcasing audience demographics, collaboration tiers, past brand partnerships, and a streamlined inquiry form—addressing the critical gap in sponsor due diligence.",
        image: "/images/case-studies/06.png", // ⚠️ GANTI DENGAN GAMBAR ASLI
        category: "Partnership",
        highlight: "Conversion Optimized"
      },
      {
        title: "Episode Archive & Bento Grid",
        description: "Interactive episode cards with view counts, duration, and category tags. The bento grid layout allows quick scanning while maintaining visual hierarchy.",
        image: "/images/case-studies/05.png", // ⚠️ GANTI DENGAN GAMBAR ASLI
        category: "Feature",
        highlight: "1.2M+ Views Display"
      }
    ]
  }
};

// ============================================================================
// 2. MOTION CASE STUDY: VRIQ (Splash Screen)
// ============================================================================
export const vriqCaseStudy: MotionCaseStudyContent = {
  hero: {
    slug: "vriq",
    projectTitle: "VRIQ Mobile App Splash",
    role: "Motion Designer",
    year: "2024",
    tools: ["Lottie", "After Effects"],
    description: "A fluid, high-performance splash screen animation designed to establish brand identity within the first 2 seconds of app launch, ensuring a seamless transition to the home screen."
  },
  preview: {
    type: "splash",
    introLottieData: "/lotties/van-in.json",   // ⚠️ PASTIKAN FILE INI ADA
    lottieData: "/lotties/van-loop.json",      // ⚠️ PASTIKAN FILE INI ADA
    backgroundColor: "#FFFFFF"
  }
};

// ============================================================================
// 3. MOTION CASE STUDY: SEMVAR (Hero Animation)
// ============================================================================
export const semvarCaseStudy: MotionCaseStudyContent = {
  hero: {
    slug: "semvar",
    projectTitle: "Semvar Digital Twin Hero",
    role: "Motion Designer",
    year: "2024",
    tools: ["After Effects", "Premiere Pro"],
    description: "An interactive hero animation demonstrating the real-time data visualization capabilities of the Semvar platform, featuring dynamic UI cards and robotic arm telemetry."
  },
  preview: {
    type: "hero",
    format: "video", 
    videoSrc: "/videos/semvar-hero.mp4", // ⚠️ PASTIKAN FILE INI ADA
  }
};

// ============================================================================
// 4. MOTION CASE STUDY: PITCHAERO (Icon Animation System)
// ============================================================================
export const pitchaeroCaseStudy: MotionCaseStudyContent = {
  hero: {
    slug: "pitchaero",
    projectTitle: "Pitchaero Dashboard Icon System",
    role: "Motion Designer",
    year: "2024",
    tools: ["After Effects", "Lottie", "Figma"],
    description: "A scalable library of functional micro-animations designed to provide immediate visual feedback and enhance information hierarchy within the Pitchaero SaaS dashboard."
  },
  preview: {
    type: "icon",
    // ⚠️ GANTI NAMA FILE JSON DI BAWAH INI DENGAN FILE ASLI KAMU
    icons: [
      { name: "Animation 1", cardTitle: "High Sensitive", src: "/lotties/Draft 1.json", format: "lottie" },
      { name: "Animation 2", cardTitle: "Alert System", src: "/lotties/Draft 2.json", format: "lottie" },
      { name: "Animation 3", cardTitle: "Operator System", src: "/lotties/Draft 3.json", format: "lottie" },
      { name: "Animation 4", cardTitle: "Save Wild Life", src: "/lotties/Draft 4.json", format: "lottie" }
    ]
  }
};

// ============================================================================
// 5. VIDEO CASE STUDY: STOCKT (Contoh)
// ============================================================================
export const stocktCaseStudy: VideoCaseStudyContent = {
  hero: {
    slug: "stockt",
    projectTitle: "Stockt Inventory Onboarding",
    role: "UI Designer & Motion Specialist",
    year: "2025",
    tools: ["Rive", "After Effects", "Premiere Pro"],
    description: "Animating tactile onboarding flows and explainer sequences to reduce B2B SaaS friction."
  },
  video: {
    youtubeId: "ebHDN9hrItE", // ⚠️ GANTI DENGAN VIDEO ID YOUTUBE KAMU
    title: "Stockt Inventory Onboarding Explainer"
  }
};

// ============================================================================
// REGISTRY (Pusat Data untuk Dispatcher di [id]/page.tsx)
// ============================================================================
export const caseStudyRegistry: Record<string, UICaseStudyContent | MotionCaseStudyContent | VideoCaseStudyContent> = {
  gjls: gjlsCaseStudy,
  vriq: vriqCaseStudy,
  semvar: semvarCaseStudy,
  pitchaero: pitchaeroCaseStudy,
  stockt: stocktCaseStudy,
};