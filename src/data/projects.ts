export type ProjectCategory = "uiux" | "motion" | "video";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  role: string;
  year: string;
  description: string; // Deskripsi singkat untuk kartu thumbnail di halaman /work
  teaser?: string;     // Narasi lebih panjang untuk hover state atau homepage
  stack: string[];     // Hanya berisi nama tools/teknologi
  imagePlaceholder: string; // Gambar utama (bisa GIF untuk motion atau PNG untuk UI)
  staticImage?: string;     // Gambar fallback saat hover (opsional)
  imagePosition?: string;   // "top" | "center" | "bottom" untuk object-position
  imageScale?: number;      // Scale gambar saat hover, default 1
  
  // Field opsional untuk detail case study (jika tidak pakai registry)
  overview?: string;
  challenge?: string;
  solution?: string;
  gallery?: string[]; 
}

export const projects: Project[] = [
  // ========================================================================
  // 1. UI/UX PROJECT
  // ========================================================================
  {
    id: "gjls",
    title: "GJLS Entertainment",
    category: "uiux",
    role: "Lead Product Designer & Frontend",
    year: "2026",
    description: "Transforming a chaotic brand image into a structured, high-performance digital ecosystem.",
    teaser: "How a structured design system and frontend architecture transformed brand perception and increased sponsor trust...",
    stack: ["Figma", "Next.js", "Tailwind CSS", "Rive", "Web3Forms"],
    imagePlaceholder: "/images/case-studies/cover1.png", // ⚠️ Pastikan file ini ada
    imagePosition: "top",
    imageScale: 0.5,
    
    overview: "GJLS needed a digital presence that reflected professionalism while shedding its previous chaotic brand image. The goal was to build a scalable, high-performance website that serves as the central hub for their entertainment services.",
    challenge: "Balancing rich visual storytelling with fast load times, while ensuring the UI remained intuitive for non-technical users managing their partnership inquiries.",
    solution: "Architected a component-based design system in Figma, then translated it into a Next.js application. Utilized Tailwind CSS for styling and optimized asset delivery to achieve a 60 FPS experience with sub-2-second load times.",
    gallery: [
      "/images/case-studies/gjls-1.png",
      "/images/case-studies/gjls-2.png",
      "/images/case-studies/gjls-3.png",
    ]
  },

  // ========================================================================
  // 2. MOTION PROJECT (Splash Screen)
  // ========================================================================
  {
    id: "vriq",
    title: "VRIQ Mobile App Splash",
    category: "motion",
    role: "Motion Designer",
    year: "2026",
    description: "Fluid, high-performance splash screen animation establishing brand identity within the first 2 seconds of app launch.",
    stack: ["After Effects", "Lottie", "React"],
    imagePlaceholder: "/images/projects/loading-states-thumbnail.gif", // ⚠️ Gunakan GIF pendek atau PNG statis
    staticImage: "/images/projects/loading-states-static.png",
    
    overview: "A custom micro-interaction designed to reduce perceived wait times and delight users during the app initialization phase.",
    challenge: "Creating an animation that is visually engaging but lightweight enough to not impact the main thread performance of the host mobile application.",
    solution: "Utilized Lottie with strict polygon limits and optimized JSON exports. Implemented a dual-state sequence (Entrance → Loop) to ensure seamless transition to the home screen.",
    gallery: [
      "/images/case-studies/vriq-1.gif",
      "/images/case-studies/vriq-2.gif",
    ]
  },

  // ========================================================================
  // 3. MOTION PROJECT (Hero Animation)
  // ========================================================================
  {
    id: "semvar",
    title: "Semvar Digital Twin Hero",
    category: "motion",
    role: "Motion Designer",
    year: "2025",
    description: "Interactive hero animation demonstrating real-time data visualization capabilities and robotic arm telemetry.",
    stack: ["After Effects", "Premiere Pro", "Lottie"],
    imagePlaceholder: "/images/projects/semvar-thumb.jpg", // ⚠️ Pastikan file ini ada
    
    overview: "An interactive hero animation for a B2B SaaS platform, designed to immediately communicate the product's core value proposition.",
    challenge: "Visualizing complex, abstract data telemetry in a way that is instantly understandable to non-technical stakeholders.",
    solution: "Developed a dynamic UI card motion sequence paired with smooth easing curves, exported as a highly optimized MP4 for instant, silent autoplay on the web.",
    gallery: [
      "/images/case-studies/semvar-1.jpg",
      "/images/case-studies/semvar-2.jpg",
    ]
  },

  // ========================================================================
  // 4. MOTION PROJECT (Icon System)
  // ========================================================================
  {
    id: "pitchaero",
    title: "Pitchaero Dashboard Icons",
    category: "motion",
    role: "Motion Designer",
    year: "2024",
    description: "Scalable library of functional micro-animations enhancing user feedback and visual hierarchy in a SaaS dashboard.",
    stack: ["After Effects", "Lottie", "Figma"],
    imagePlaceholder: "/images/projects/pitchaero-thumb.png", // ⚠️ Pastikan file ini ada
    
    overview: "A cohesive set of animated icons designed to provide immediate, delightful visual feedback for user actions within the Pitchaero platform.",
    challenge: "Ensuring consistency in timing, easing, and visual weight across multiple different icon concepts without bloating the application bundle size.",
    solution: "Established strict motion guidelines (duration, easing curves) in Figma before animating in After Effects. Exported as lightweight Lottie JSON files for seamless developer handoff.",
    gallery: [
      "/images/case-studies/pitchaero-1.jpg",
      "/images/case-studies/pitchaero-2.jpg",
    ]
  },

  // ========================================================================
  // 5. VIDEO PROJECT (Placeholder)
  // ========================================================================
  {
    id: "stockt",
    title: "Stockt Inventory Onboarding",
    category: "video",
    role: "UI Designer & Motion Specialist",
    year: "2025",
    description: "Animating tactile onboarding flows and explainer sequences to reduce B2B SaaS friction.",
    stack: ["Rive", "After Effects", "Premiere Pro"],
    imagePlaceholder: "/images/projects/stockt-thumbnail.png", // ⚠️ Pastikan file ini ada
    
    overview: "An explainer video and interactive onboarding sequence for a B2B SaaS inventory management tool.",
    challenge: "Explaining complex warehouse logic in under 60 seconds without overwhelming the viewer with technical jargon.",
    solution: "Developed a visual metaphor using isometric motion graphics, paired with rhythmic sound design to guide the viewer's attention through the user journey.",
    gallery: [
      "/images/case-studies/stockt-1.png",
      "/images/case-studies/stockt-2.png",
    ]
  },
];