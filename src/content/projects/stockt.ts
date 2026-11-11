import type { CaseStudy } from "../types";

export const stockt: CaseStudy = {
  slug: "stockt",
  title: "Stockt: Explainer, Website UI & Lottie",
  client: "Stockt",
  category: "video",
  alsoIn: ["uiux", "motion"], // proyek ini mencakup tiga jenis pekerjaan, jadi muncul di tiga filter
  order: "story-first",       // cerita "bagaimana pekerjaan merambat" dibaca dulu, baru karyanya
  domain: "Inventory SaaS", // diambil dari judul desain Figma-mu ("Inventory Management for Small E-commerce Sellers"). Mohon dikonfirmasi.

  role: "Product & Motion Designer",
  year: "2022", // dari ingatanmu (awal 2022). Cocokkan dengan tanggal unggah video / kontrak Upwork.
  tools: ["Illustrator", "After Effects", "Premiere Pro", "Figma"],
  summary:
    "One of my first freelance projects: an explainer video for an early-stage startup that grew into the website's UI design and Lottie animations. The company is no longer operating, so the work is shown as an archive.",
  disclosure:
    "Freelance work found through Upwork. Stockt is no longer operating, so its website is no longer live and the work is shown here as an archive.",

  card: {
    description: "An early-stage startup's explainer video, website UI and Lottie animations, all from one freelance engagement.",
    image: "/images/projects/stockt-thumbnail.png",
  },

  story: {
    startingPoint: {
      title: "A First Project Between Two Beginners",
      body: "I found Stockt's founder through a job post on Upwork. He was a developer launching his first business on his own, and I was just starting out as a freelancer. The first job was an explainer video.",
    },
    goal: {
      title: "A UI With the Same Vibe",
      body: "The founder had already built the website himself, as a developer. After seeing the explainer video, he asked me to design a UI with the same vibe as the video.",
    },
    approach: {
      body: "It began with an explainer video, which I made on my own: the storyboard, illustration, animation and final edit were mine, while AI generated the script and the voice-over. It grew into the website's UI design and into Lottie animations that made the site feel more alive.",
    },
  },

  showcase: [
    {
      type: "timeline",
      heading: { eyebrow: "Scope", title: "How the Work Grew." },
      data: {
        phases: [
          { name: "Explainer video", description: "Where it started: storyboard, illustration, animation and final edit by me, with an AI-generated script and voice-over." },
          { name: "Website UI", description: "The founder, a developer, had already built the site. After seeing the explainer he asked for a UI with the same vibe." },
          { name: "Lottie animations", description: "Lottie animations that made the website feel more alive. The original files are gone; a preview remains." },
        ],
      },
    },
    {
      // Video disimpan di YouTube sebagai "Unlisted" (bukan Private) agar bisa di-embed.
      type: "videoPlayer",
      heading: { eyebrow: "Part 1 · Explainer Video", title: "Stockt Explainer." },
      data: {
        youtubeId: "ebHDN9hrItE",
        title: "Stockt Explainer Video",
        // poster: "/images/projects/stockt-poster.png",
        // chapters: [{ time: "0:00", title: "Hook", note: "Kenapa dibuka begini" }],
      },
    },
    {
      type: "credits",
      heading: { eyebrow: "Part 1 · Credits", title: "Who Did What." },
      data: {
        rows: [
          { task: "Script", owner: "ai", detail: "Generated with AI." },
          { task: "Voice-over", owner: "ai", detail: "AI-generated voice-over." },
          { task: "Storyboard", owner: "me" },
          { task: "Illustration", owner: "me" },
          { task: "Animation", owner: "me" },
          { task: "Final editing", owner: "me" },
        ],
        note: "Made solo: AI wrote the script and generated the voice-over, and I handled everything else.",
      },
    },

    {
      type: "mockups",
      heading: {
        eyebrow: "Part 2 · Website UI",
        title: "The Landing Page.",
        description: "Designed after the explainer, with the same vibe. Scroll inside the frame to see the full page.",
      },
      data: {
        layout: "stacked",
        pages: [
          {
            title: "Landing page",
            description: "Hero, value props, integrations, feature cards, a comparison with competitors, pricing and an FAQ, all in one page.",
            image: "/images/case-studies/stockt-ui-desktop.webp",
            label: "Desktop",
            width: 1440,
            height: 5345,
            scroll: true,
          },
        ],
      },
    },
    {
      type: "mockups",
      heading: { eyebrow: "Part 2 · Mobile", title: "The Mobile Version." },
      data: {
        layout: "device-row",
        pages: [
          {
            title: "Landing page, mobile",
            image: "/images/case-studies/stockt-ui-mobile.webp",
            label: "Mobile",
            width: 345,
            height: 8000,
            scroll: true,
          },
        ],
      },
    },
    {
      type: "videoFile",
      heading: {
        eyebrow: "Part 3 · Lottie Animation",
        title: "Shipping Process.",
        description: "The hero illustration, animated as a shipping process.",
      },
      data: {
        src: "/videos/stockt-lottie-preview.mp4",
        poster: "/images/case-studies/stockt-lottie-poster.webp",
        aspect: "1000 / 666",
        maxWidth: 960,
        caption:
          "A preview of the animation placed in a hero layout, made for my Behance presentation. The original Lottie file is no longer available.",
      },
    },
    {
      type: "credits",
      heading: { eyebrow: "Part 2 and 3 · Credits", title: "Who Did What." },
      data: {
        rows: [
          { task: "Website development", owner: "client", detail: "The founder, a developer, had already built the site himself." },
          { task: "UI design", owner: "me", detail: "Designed in Figma, after the explainer." },
          { task: "Lottie animation", owner: "me", detail: "Created in After Effects and exported as Lottie." },
        ],
      },
    },
  ],

  // links: [{ label: "View on Behance", href: "https://www.behance.net/...", style: "secondary" }], // ← isi URL Behance-mu

  outcome: {
    highlights: [
      { label: "Status", value: "No longer operating, shown as an archive" },
      { label: "Scope", value: "Explainer video, website UI, Lottie animations" },
    ],
  },
};
