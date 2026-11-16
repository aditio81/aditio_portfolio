import type { CaseStudy } from "../types";

export const aiAssistedPortfolio: CaseStudy = {
  slug: "ai-assisted-portfolio",
  title: "Building My Portfolio with AI",
  client: "Personal Project",
  category: "uiux",
  startingPoint: "from-scratch",
  domain: "AI-Assisted Product Development",

  role: "Product Designer, AI Workflow & Frontend",
  year: "2026",
  duration: "3 days to initial launch · Ongoing refinement",
  tools: [
    "GPT",
    "Gemini",
    "Qwen",
    "Google Stitch",
    "Claude",
    "Next.js",
    "Tailwind CSS",
    "Vercel",
  ],
  summary:
    "An experiment in building a personal portfolio from planning to live deployment in three days, using a multi-tool AI workflow while keeping product and design decisions human-led.",
  disclosure:
    "This is an ongoing personal experiment. The three-day milestone refers to the initial end-to-end launch, not a claim that every page or piece of content was finished. I am still refining the website and documenting the workflow before making quantified productivity claims.",
  cover: "/images/projects/ai-assisted-portfolio.svg",

  card: {
    description:
      "An end-to-end portfolio build using a role-based AI workflow, launched in three days and continuously refined.",
    teaser:
      "How I developed a repeatable way to work with multiple AI tools across planning, visual exploration, and frontend development.",
    image: "/images/projects/ai-assisted-portfolio.svg",
    imagePosition: "center",
  },

  story: {
    startingPoint: {
      title: "A Portfolio as a Practical AI Experiment",
      body:
        "I wanted my personal portfolio to demonstrate more than design output. I also wanted it to show how I could use AI as part of a real production workflow. The GJLS redesign took approximately one month while I was still discovering how to coordinate the tools. After finding a workflow that worked better, I applied it to my own portfolio project, which reached its initial live launch in three days.",
    },
    goal: {
      title: "From Initial Plan to a Live Website",
      body:
        "The goal was to complete the full process with AI support: planning the website, structuring its content, designing the interface, developing the frontend, and deploying it. I wanted to test whether a clearer division of responsibilities between AI tools could help me move through the process more effectively.",
      points: [
        "Use each AI tool for a defined role instead of asking one tool to do everything.",
        "Keep design direction, evaluation, and final product decisions under my responsibility.",
        "Turn the workflow into something repeatable that I could continue documenting and improving.",
      ],
    },
    challenge: {
      title: "Speed Did Not Automatically Mean Completeness",
      body:
        "The initial website went live in three days, but the speed came with trade-offs. Some page content still needed more work, and the quality and completeness of the content were not yet consistent across the site. The prompt-writing and review process also remained experimental and was not documented systematically during the first attempt.",
    },
    approach: {
      title: "A Role-Based Workflow with Human Review",
      body:
        "I separated the work across AI tools based on the kind of support I needed: mentoring and reasoning, project direction and revisions, visual layout exploration, research and placeholder imagery, and coding guidance. I then reviewed the outputs and made the final decisions before integrating them into the website.",
      points: [
        "Use AI suggestions as input, not as automatic approval.",
        "Treat generated layouts as references to evaluate and adapt, rather than final designs to copy blindly.",
        "Continue refining content and prompts after deployment instead of treating the first live version as finished.",
      ],
    },
  },

  showcase: [
    {
      type: "timeline",
      heading: {
        eyebrow: "Delivery Milestone",
        title: "Three Days from Plan to Live.",
        description:
          "The initial portfolio was taken through the full process in three days. The phases below describe the scope, not a claim that each phase took exactly one day.",
      },
      data: {
        total: "3 days to initial launch",
        phases: [
          {
            name: "Plan & structure",
            description:
              "Define the portfolio direction and organize the content and pages with AI support.",
          },
          {
            name: "Design & explore",
            description:
              "Explore visual references and develop the interface, with final design choices reviewed and made by me.",
          },
          {
            name: "Build & deploy",
            description:
              "Develop the website with coding guidance from AI and bring the initial version live.",
          },
        ],
      },
    },
    {
      type: "aiWorkflow",
      heading: {
        eyebrow: "AI Collaboration",
        title: "A Different Role for Each Tool.",
        description:
          "This role-based workflow was developed through the GJLS redesign and carried into my personal portfolio experiment. The tools supported the process; I remained responsible for evaluating and deciding what made it into the final product.",
      },
      data: {
        summary:
          "I found it more useful to assign each AI tool a clear responsibility than to treat every tool as a general-purpose assistant.",
        stages: [
          {
            stage: "Design mentoring & reasoning",
            tools: ["GPT"],
            aiDid:
              "Acted as a mentor, helping me think through the work and shape the case study toward a more professional product-design presentation.",
            iDecided:
              "Which recommendations were relevant, how to adapt them to the project, and what the final design should communicate.",
          },
          {
            stage: "Project direction & review",
            tools: ["Qwen"],
            aiDid:
              "Worked like a project manager by giving direction and revisions, helping me check that design elements had a clear purpose.",
            iDecided:
              "Which revisions to accept and how to resolve conflicting or unsuitable suggestions.",
          },
          {
            stage: "Visual exploration",
            tools: ["Google Stitch"],
            aiDid:
              "Generated visual layout references from prompts, reducing the need to spend hours manually browsing inspiration sites.",
            iDecided:
              "Which references were useful and how to reinterpret them within my own interface and design decisions.",
          },
          {
            stage: "Development guidance",
            tools: ["Claude"],
            aiDid:
              "Mentored me through vibe coding and the frontend development process.",
            iDecided:
              "How the implementation should fit the product, and what needed to be reviewed or refined before deployment.",
          },
          {
            stage: "Research & placeholder visuals",
            tools: ["Gemini"],
            aiDid:
              "Supported research and helped generate placeholder images during the process.",
            iDecided:
              "Which information and visual outputs were appropriate to keep in the portfolio.",
          },
        ],
        note:
          "The workflow is still being refined. I did not systematically capture every prompt or task duration during the initial build, so I am not presenting a quantified efficiency improvement yet.",
      },
    },
  ],

  outcome: {
    highlights: [
      { label: "Initial launch", value: "3 days" },
      { label: "Process coverage", value: "Plan → Design → Build → Deploy" },
      { label: "Current status", value: "Live · Refinement ongoing" },
    ],
    reflection:
      "The experiment showed me that AI can help accelerate the path from an initial idea to a live product, but speed alone is not a quality metric. I am continuing to improve the website, refine prompts, and document task-level time and decisions so future efficiency claims can be supported by evidence.",
  },

  links: [
    { label: "Visit live portfolio", href: "https://aditio-portfolio.vercel.app/", style: "primary" },
    { label: "View source code", href: "https://github.com/aditio81/aditio_portfolio", style: "secondary" },
  ],
};
