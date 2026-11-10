import type { CaseStudy } from "../types";

export const gjls: CaseStudy = {
  slug: "gjls",
  title: "GJLS Entertainment",
  client: "GJLS Entertainment",
  category: "uiux",
  startingPoint: "redesign",
  domain: "Entertainment",

  role: "Lead Product Designer & Frontend",
  year: "2026",
  duration: "1 Month",
  tools: ["Figma", "Next.js", "Tailwind CSS", "Rive", "Web3Forms"],
  summary:
    "A concept redesign that turns a name people read as “Gak Jelas” into a company brands can trust, built to give the GJLS account team stronger footing when they pitch.",
  disclosure:
    "This is a self-initiated concept redesign, not an official GJLS project. A formal proposal has been sent to GJLS and is awaiting a response.",
  cover: "/images/case-studies/cover2.png",

  card: {
    description: "A concept redesign that turns “Gak Jelas” into a company brands can trust.",
    teaser: "How a structured design system and frontend architecture can turn a scattered brand image into a coherent digital presence...",
    image: "/images/case-studies/cover1.png",
    imagePosition: "top",
    imageScale: 0.5,
  },

  story: {
    startingPoint: {
      title: "A Dead Website Behind a Living Brand",
      body: "GJLS Entertainment had built a thriving community on YouTube and Instagram, but their official website told a different story—outdated, incomplete, and still carrying a 2024 copyright. For potential sponsors conducting due diligence, this digital disconnect created a credibility gap that threatened to undermine years of high-quality content production.",
      points: [
        "The footer still read 'Copyright © 2024' and the homepage was still promoting GJLS Fest 2025 (7 Dec 2025), signaling abandonment to potential partners.",
        "There were no Partnership or Media Kit pages, and the Merch page was empty, leaving sponsors without a clear, professional way to get in touch.",
        "Visual inconsistency and empty placeholders failed to represent the high production value of their actual YouTube events.",
      ],
    },
    goal: {
      title: "From “Gak Jelas” to Trusted",
      body: "GJLS is often read as shorthand for “Gak Jelas”, Indonesian for “unclear”. The premise of this redesign is to change that perception: to present GJLS as a company brands can trust, while keeping the playful energy that makes the brand what it is. The site is meant to be an extra tool for GJLS's account executives (AEs) when they approach brands.",
    },
    challenge: {
      title: "A Pitch That Stalls at “Hello”",
      body: "GJLS has talked publicly about how its pitches to brands often fall through at the introduction stage, the moment the team says “Halo, perkenalkan kami dari GJLS”. Before anyone looks at the work, the name itself raises doubt, so the website has to answer that doubt at first sight.",
    },
    approach: {
      title: "Rebuilding Trust Through Complete Digital Infrastructure",
      body: "Rather than a superficial visual refresh, the redesign focused on architectural completeness—ensuring every page served a strategic purpose for both fans and business partners. The goal was to create a digital headquarters that matched the energy of their social media presence.",
      points: [
        "Designed a dedicated Partnership & Media Kit page with clear collaboration tiers and audience demographics.",
        "Architected a comprehensive multi-page structure (Events, Merch, About) to ensure 100% information availability for due diligence.",
        "Implemented a cohesive, modern design system with dynamic content blocks to project a professional, production-ready brand image.",
      ],
    },
  },

  showcase: [
    {
      type: "timeline",
      heading: { eyebrow: "Process at a Glance", title: "Four Weeks, Start to Deploy." },
      data: {
        total: "1 month",
        phases: [
          { name: "Research & design system", duration: "Week 1", weeks: 1, description: "Research, and building the design system." },
          { name: "Pages & sections", duration: "Week 2", weeks: 1, description: "Building the pages and their sections." },
          { name: "Evaluation", duration: "Week 3", weeks: 1, description: "Reviewing the design. An AI acting as project manager gave revisions and notes on the first draft." },
          { name: "Deploy", duration: "Week 4", weeks: 1, description: "Deploying through Git and Vercel." },
        ],
      },
    },
    {
      type: "spotlight",
      heading: {
        eyebrow: "Discovery",
        title: "What Wasn't Working.",
        description: "Findings from auditing the previous homepage. Select a number to look closer.",
      },
      data: {
        image: "/images/case-studies/homepage-before-full.webp",
        width: 1600,
        height: 1534,
        notes: [
          { title: "Hard-to-read headline font", body: "The headline typeface is decorative and not very user-friendly.", x: 63, y: 12, zoom: 2 },
          { title: "Background pattern is too sharp", body: "The background pattern is too sharp to work comfortably as a backdrop.", x: 12, y: 31, zoom: 2 },
          { title: "YouTube embeds have no titles", body: "The videos are embedded without a title label, so visitors can't tell what each one is.", x: 33, y: 83, zoom: 2 },
          { title: "Search bar with no clear purpose", body: "The navbar includes a search bar, but it isn't clear what it is meant to search.", x: 77.2, y: 2.9, zoom: 2 },
        ],
      },
    },
    {
      type: "beforeAfter",
      heading: {
        eyebrow: "Before / After",
        title: "The Homepage, Reborn.",
        description: "Drag the slider to compare the previous site with the redesign.",
      },
      data: {
        before: { image: "/images/case-studies/homepage-before.png", label: "Before" },
        after: { image: "/images/case-studies/homepage-after.png", label: "After" },
        width: 1280,
        height: 960,
        caption:
          "Left: the previous homepage, still promoting GJLS Fest 2025. Right: the redesign establishes immediate brand recognition with bold typography, dynamic episode highlights, and clear CTAs for both fans and potential sponsors.",
      },
    },
    {
      type: "sitemap",
      heading: {
        eyebrow: "Information Architecture",
        title: "Site Structure.",
        description: "The main navigation before and after the redesign.",
      },
      data: {
        before: {
          label: "Before",
          items: [
            { label: "Yuk Kenalan" },
            { label: "Artikel", status: "removed", note: "A blog mainly serves SEO, which matters little here: GJLS's reach comes from YouTube and social media." },
            { label: "Youtube" },
            { label: "Event" },
            { label: "Merch", status: "empty" },
            { label: "Digital Download" },
            { label: "Hubungi Kami" },
          ],
        },
        after: {
          label: "After",
          items: [
            { label: "About Us" },
            { label: "Events" },
            { label: "Content" },
            { label: "Merch" },
            { label: "Digital" },
            { label: "Partnership & Media Kit", status: "new" },
          ],
        },
        caption: "The new navigation adds a dedicated Partnership entry for sponsors.",
      },
    },
    { type: "designSystem", id: "gjls" },
    {
      type: "spotlight",
      heading: {
        eyebrow: "Design Decisions",
        title: "Why It's Built This Way.",
        description: "Scroll the page, or select a number to jump to a decision.",
      },
      data: {
        image: "/images/case-studies/homepage-after-full.webp",
        width: 1280,
        height: 6857,
        scroll: true,
        notes: [
          { title: "A hero for what's new", body: "The hero is built specifically to show the latest from GJLS, so visitors see what's current the moment they arrive.", x: 57, y: 6.2 },
          { title: "Partners and numbers for credibility", body: "Logos of brands GJLS has worked with sit alongside its achievement metrics to build credibility.", x: 6, y: 27.5 },
          { title: "A dedicated CTA section", body: "A call-to-action section gives brands a clear next step to collaborate with GJLS.", x: 5.2, y: 88.6 },
        ],
      },
    },
    {
      type: "mockups",
      heading: {
        eyebrow: "Final Mockups & Page Showcase",
        title: "From System to Reality.",
        description:
          "The complete digital ecosystem—each page designed with intention, consistency, and the signature GJLS absurdity.",
      },
      data: {
        layout: "stacked",
        pages: [
          {
            title: "Partnership & Media Kit Page",
            description: "A dedicated B2B page showcasing audience demographics, collaboration tiers, past brand partnerships, and a streamlined inquiry form—addressing the critical gap in sponsor due diligence.",
            image: "/images/case-studies/06.png",
            label: "Partnership",
            highlight: "Streamlined Inquiry Form",
          },
          {
            title: "Episode Archive & Bento Grid",
            description: "Interactive episode cards with view counts, duration, and category tags. The bento grid layout allows quick scanning while maintaining visual hierarchy.",
            image: "/images/case-studies/05.png",
            label: "Feature",
            highlight: "1.2M+ Views Display",
          },
        ],
      },
    },
    {
      type: "aiWorkflow",
      heading: {
        eyebrow: "Process",
        title: "How I Worked With AI.",
        description: "AI drafts and challenges. I execute and make the final call.",
      },
      data: {
        summary:
          "I treat AI as a collaborator on the process, not the author of the result: it helps me think and explore faster, while the decisions and the final design stay mine.",
        stages: [
          {
            stage: "Reference research",
            tools: ["GPT", "Qwen", "Gemini"],
            aiDid: "Wrote prompts to surface visual references that fit the brand, instead of browsing Behance and Dribbble by hand.",
            iDecided: "Which references to keep and the visual direction to take.",
          },
          {
            stage: "UX reasoning",
            tools: ["GPT", "Qwen", "Gemini"],
            aiDid: "Challenged my thinking to find gaps in the logic, so the design had to hold up beyond looking good.",
            iDecided: "Which gaps were real and how the design changed because of them.",
          },
          {
            stage: "Layout production",
            tools: ["Claude", "Google Stitch"],
            aiDid: "Generated section layouts to react to, instead of imagining each layout from scratch.",
            iDecided: "Its design system output was inconsistent, so I used it only as layout reference and rebuilt everything on the design system I made in Figma.",
          },
          {
            stage: "Design review",
            aiDid: "Acted as a project manager, giving revisions and notes on the first draft of the design.",
            iDecided: "The final call on which revisions to apply.",
          },
          {
            stage: "Build & deploy",
            aiDid: "Helped me through the build and the deployment to Vercel.",
          },
        ],
        example: {
          title: "Embedding the latest YouTube uploads",
          idea: "For the Content page I wanted to embed GJLS's newest YouTube uploads, so the site would always feel alive with the four videos they publish every week.",
          aiFlagged:
            "The AI agreed it could help channel engagement, but warned that several video players would weigh the page down and slow it for other visitors.",
          decision:
            "I embedded only three singles GJLS has released, and gave each content series a short description with a button to its YouTube playlist.",
        },
        note: "Timeline: about one month from start to deployment on Vercel, including working out this AI workflow itself.",
      },
    },
    {
      type: "prototype",
      heading: {
        eyebrow: "Interactive Prototype",
        title: "Try It Yourself.",
        description: "Click through the design exactly as it was prototyped in Figma.",
      },
      data: {
        src: "https://www.figma.com/proto/eFQk4QzNOsLDAfOKfhzr2D/GJLS?node-id=165-2158&scaling=min-zoom&content-scaling=fixed",
        poster: "/images/case-studies/homepage-after.png",
        note: "Best experienced on desktop.",
      },
    },
  ],

  outcome: {
    highlights: [
      { label: "Status", value: "Concept project, proposal sent to GJLS" },
      { label: "Live demo", value: "Deployed on Vercel" },
      { label: "Timeline", value: "4 weeks, research to deploy" },
    ],
  },

  links: [{ label: "Visit live site", href: "https://gjls-portfolio.vercel.app/" }],
};
