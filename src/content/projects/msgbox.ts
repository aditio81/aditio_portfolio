import type { CaseStudy } from "../types";

export const msgbox: CaseStudy = {
  slug: "msgbox",
  title: "MsgBox — Omnichannel SaaS Platform",
  client: "MsgBox",
  category: "uiux",
  alsoIn: ["motion"],
  order: "story-first",
  domain: "AI Communication SaaS",

  role: "Brand Identity, Motion & UI Designer",
  year: "2025",
  duration: "Early 2025",
  tools: ["Figma", "Illustrator", "After Effects"],
  summary:
    "A freelance collaboration that grew from a Lottie explainer into brand identity, landing page design, and early dashboard component exploration for an omnichannel communication platform.",
  disclosure:
    "The project was discontinued while dashboard exploration was still in progress. The landing page and dashboard visuals shown here are design explorations; they were not implemented or launched.",
  cover: "/images/case-studies/msgbox/cover.webp",

  card: {
    description: "From a Lottie explainer to the visual foundation of an omnichannel SaaS product.",
    teaser:
      "How a motion design assignment expanded into brand identity, a marketing website, and early dashboard UI exploration.",
    image: "/images/case-studies/msgbox/cover.webp",
    imagePosition: "top",
  },

  story: {
    startingPoint: {
      title: "A Motion Project That Expanded",
      body:
        "The collaboration began through Fiverr in early 2025. The client first approached me to create Lottie animations that explained how MsgBox worked. After that assignment, the scope expanded: I was invited to design the product logo, landing page, and SaaS dashboard. What started as a motion design task became a broader collaboration across brand identity and digital product interfaces.",
    },
    goal: {
      title: "Make Multi-Channel Customer Communication Easier to Understand",
      body:
        "MsgBox was envisioned as an AI-powered communication platform for businesses that relied heavily on messaging apps to handle customer interactions. Its concept brought conversations from channels such as WhatsApp, WeChat, and LINE into a more centralized workspace, supported by automation and AI-assisted features.",
      points: [
        "Potential users included small and medium-sized businesses managing customer conversations directly.",
        "Another assumed audience was companies with dedicated customer service teams handling higher volumes of inquiries.",
        "These audience groups were working assumptions; formal user segmentation was not provided during the engagement.",
      ],
    },
    challenge: {
      title: "Establishing a Visual Direction With Limited Product Definition",
      body:
        "I was given full creative freedom, but the product's user segmentation and detailed dashboard requirements were not yet clearly defined. The client had team members working on UX planning, so I focused on establishing the visual foundation and exploring interface components in parallel, ready for further discussion when more product information became available.",
    },
    approach: {
      title: "From Brand Identity to Interface Exploration",
      body:
        "I designed the MsgBox logo and used that identity as the starting point for the product's visual language. I developed the core visual elements and UI components, using Google Icons for interface iconography. For the dashboard, I researched omnichannel interface references on Behance and Dribbble, then explored a set of components that could form a shared customer communication workspace.",
      points: [
        "Explored the landing page in both light and dark visual themes.",
        "Created dashboard components for navigation, conversation management, chat composition, customer details, channel selection, and translation.",
        "Worked in parallel with the client's UX planning; the dashboard concepts had not yet received stakeholder feedback.",
      ],
    },
  },

  showcase: [
    {
      type: "flow",
      heading: {
        eyebrow: "Visual Foundation",
        title: "One Identity, Multiple Touchpoints.",
        description:
          "The project expanded from the logo and motion work into the marketing website and early product interface exploration.",
      },
      data: {
        steps: [
          {
            title: "Brand identity",
            description: "The MsgBox logo became the starting point for the product's visual direction.",
            image: "/images/case-studies/msgbox/logo.png",
            width: 495,
            height: 132,
          },
          {
            title: "Marketing website",
            description: "A landing page structure introducing the product, its capabilities, integrations, audiences, and pricing.",
            image: "/images/case-studies/msgbox/cover.webp",
            width: 2000,
            height: 1125,
          },
          {
            title: "Dashboard components",
            description: "An early visual exploration of the omnichannel inbox and its supporting interface components.",
            image: "/images/case-studies/msgbox/desktop---1.webp",
            width: 1440,
            height: 1024,
          },
        ],
      },
    },
    {
      type: "mockups",
      heading: {
        eyebrow: "Landing Page · Visual Exploration",
        title: "Introducing the Product.",
        description:
          "The page structure guided visitors through the product introduction, company overview, core features, messaging integrations, business use cases, pricing, resources, and contact information. These are design explorations; no version was implemented or launched.",
      },
      data: {
        layout: "stacked",
        pages: [
          {
            title: "Light theme exploration",
            description: "A light visual direction with navy typography, green accents, and spacious content sections.",
            image: "/images/case-studies/msgbox/landing-light.webp",
            label: "Light theme",
            width: 2000,
            height: 8732,
            scroll: true,
          },
          {
            title: "Dark theme exploration",
            description: "An alternative dark direction using the same content structure with adapted surfaces and contrast.",
            image: "/images/case-studies/msgbox/landing-dark.webp",
            label: "Dark theme",
            width: 2000,
            height: 8732,
            scroll: true,
          },
          {
            title: "Earlier page exploration",
            description: "An earlier composition exploring the product story and supporting sections.",
            image: "/images/case-studies/msgbox/landing-exploration.webp",
            label: "Early exploration",
            width: 1440,
            height: 8490,
            scroll: true,
          },
        ],
      },
    },
    {
      type: "mockups",
      heading: {
        eyebrow: "Dashboard · Component Exploration",
        title: "Exploring the Omnichannel Workspace.",
        description:
          "I researched omnichannel dashboard references and created individual UI components while the client's team worked on UX planning. The assembled view below is a composition of those components, not a completed dashboard screen.",
      },
      data: {
        layout: "stacked",
        pages: [
          {
            title: "Component assembly",
            description: "A visual overview combining navigation, conversation list, chat workspace, and contact details to explore how the pieces might work together.",
            image: "/images/case-studies/msgbox/desktop---1.webp",
            label: "Exploration only",
            width: 1440,
            height: 1024,
          },
        ],
      },
    },
    {
      type: "flow",
      heading: {
        eyebrow: "Interface Components",
        title: "Breaking Down the Workspace.",
        description:
          "Individual components created as a starting point for further UX discussions. They had not yet been reviewed or validated by stakeholders.",
      },
      data: {
        steps: [
          {
            title: "Conversation list",
            description: "A channel-aware list of customer conversations, with message previews and activity information.",
            image: "/images/case-studies/msgbox/left-panel.webp",
            width: 400,
            height: 1024,
          },
          {
            title: "Customer details",
            description: "A contextual panel for contact details, tickets, contact fields, and conversation information.",
            image: "/images/case-studies/msgbox/right-panel.webp",
            width: 320,
            height: 1024,
          },
          {
            title: "Message composer",
            description: "Separate Chat and Comment modes, with AI Assist and AI Summarize interface elements.",
            image: "/images/case-studies/msgbox/message-composer.webp",
            width: 660,
            height: 382,
          },
          {
            title: "Message variations",
            description: "Message bubble styles and contextual options explored for the conversation interface.",
            image: "/images/case-studies/msgbox/bubble-chat.webp",
            width: 926,
            height: 1876,
          },
        ],
      },
    },
    {
      type: "flow",
      heading: {
        eyebrow: "Supporting Components",
        title: "Channels, Navigation & Translation.",
        description:
          "Additional component explorations for connecting channels and navigating the platform.",
      },
      data: {
        steps: [
          {
            title: "Channel selection",
            description: "A selection interface showing messaging and other communication channel options represented in the design.",
            image: "/images/case-studies/msgbox/channel-boarding.webp",
            width: 318,
            height: 546,
          },
          {
            title: "Sidebar navigation",
            description: "An exploration of the application's vertical navigation and its icon states.",
            image: "/images/case-studies/msgbox/sidebar-navigation.webp",
            width: 3004,
            height: 2106,
          },
          {
            title: "Translation options",
            description: "A translation menu concept with multiple language options.",
            image: "/images/case-studies/msgbox/bubble-option.webp",
            width: 923,
            height: 792,
          },
        ],
      },
    },
  ],

  outcome: {
    highlights: [
      { label: "Landing page", value: "Design exploration completed" },
      { label: "Dashboard", value: "Component exploration" },
      { label: "Project status", value: "Discontinued before feedback" },
    ],
    reflection:
      "The project reinforced the value of establishing a visual foundation early while keeping visual exploration distinct from validated product decisions. The dashboard work stopped before stakeholder feedback, so the concepts should be understood as an initial design direction rather than a shipped or validated interface.",
  },
};
