import type { CaseStudy } from "../types";

export const bootsschule1: CaseStudy = {
  slug: "bootsschule1",
  title: "Bootsschule1 Popup Animations",
  client: "Bootsschule1",
  category: "motion",
  domain: "E-learning",

  role: "Illustrator & Motion Designer",
  year: "2026",
  tools: ["Illustrator", "After Effects", "Lottie"], // ⚠️ After Effects adalah asumsi. Sesuaikan dengan alat animasimu.
  summary:
    "Seven looping Lottie animations for a German boating-license study app: five product tips and two break reminders, starring a mascot I redesigned to be Lottie-friendly.",
  disclosure:
    "Client work. The client supplied the original character art and the storyboards; I redesigned the character to be Lottie-friendly and animated all seven scenes.",

  card: {
    description: "Seven looping Lottie popup animations for a German boating-license study app, starring a mascot redesigned to be Lottie-friendly.",
    image: "/images/projects/bootsschule1-thumb.png",
  },

  story: {
    startingPoint: {
      title: "Seven Animations for a Study App",
      body: "A team building a web app that helps people study for the German recreational boating license asked for seven short looping Lottie animations for popups: five friendly product tips and two gentle break reminders. They already had a main character, supplied as an image, and wanted it animated across seven short scenes.",
    },
    goal: {
      body: "Deliver the seven animations as Lottie JSON files for the web, with transparent backgrounds.",
    },
    challenge: {
      title: "A Character Too Heavy for Lottie",
      body: "The supplied character had a lot of outlines, which would make every Lottie file heavier. Before starting, I warned the client about this, and they agreed to change the mascot's design to be Lottie-friendly.",
    },
    approach: {
      title: "Redesign, Then Animate",
      body: "I made several mascot drafts based on the shape of the original, with Gemini speeding up the drafting (the client knew). The chosen draft was rebuilt as clean vector artwork in Illustrator, and the client was very happy with it. They then sent a storyboard and a list of states, and I animated all seven scenes.",
    },
  },

  showcase: [
    {
      type: "motionSet",
      heading: {
        eyebrow: "The Animations",
        title: "Seven Scenes, One Mascot.",
        description: "Pick an animation to preview it in a popup, or on a transparent background as delivered.",
      },
      data: {
        items: [
          {
            id: "keep-reading-on-board", title: "Keep reading on board", src: "/lotties/bootsschule1/keep-reading-on-board.json", group: "Product tips",
            trigger: "Reading sample closed", loop: "Seamless", mood: "Friendly, inviting",
            frames: [
              { title: "Reads the sample", note: "holds open booklet, eyes down" },
              { title: "Sample closes", note: "booklet snaps shut" },
              { title: "Presents brochure", note: "raises the full brochure, smiles" },
            ],
          },
          {
            id: "welcome-to-the-crew", title: "Welcome to the crew", src: "/lotties/bootsschule1/welcome-to-the-crew.json", group: "Product tips",
            trigger: "25% milestone", loop: "Seamless", mood: "Upbeat, welcoming",
            frames: [
              { title: "Cap appears", note: "crew cap floats in above head" },
              { title: "Puts on the cap", note: "cap drops onto head" },
              { title: "Confident nod", note: "head tilt, small smile" },
              { title: "Milestone badge", note: "“25%” pops with a sparkle" },
            ],
          },
          {
            id: "now-we-navigate", title: "Now we navigate", src: "/lotties/bootsschule1/now-we-navigate.json", group: "Product tips",
            trigger: "Navigation video 8 finished", loop: "Seamless", mood: "Focused, hands-on",
            frames: [
              { title: "Leans over the chart", note: "bends toward nautical chart" },
              { title: "Sets the compass", note: "places bearing compass on chart" },
            ],
          },
          {
            id: "prefer-paper", title: "Prefer paper?", src: "/lotties/bootsschule1/prefer-paper.json", group: "Product tips",
            trigger: "2nd exam-sim attempt", loop: "Subtle, seamless", mood: "Calm, reassuring",
            frames: [
              { title: "Holds exam sheet", note: "paper in hand, pen ready" },
              { title: "Ticks an answer", note: "pen marks a checkbox" },
              { title: "Relaxed “got it”", note: "leans back, easy smile" },
            ],
          },
          {
            id: "ready-to-celebrate", title: "Ready to celebrate?", src: "/lotties/bootsschule1/ready-to-celebrate.json", group: "Product tips",
            trigger: "10 days to exam", loop: "One-shot + idle", mood: "Celebratory, motivating",
            frames: [
              { title: "Captain's hat appears", note: "peaked cap floats in" },
              { title: "Puts on the hat", note: "hat lands, proud look" },
              { title: "Confetti burst", note: "confetti pops around" },
              { title: "Proud smile (idle)", note: "gentle bob, sparkles" },
            ],
          },
          {
            id: "strong-session", title: "Strong session", src: "/lotties/bootsschule1/strong-session.json", group: "Break nudges",
            trigger: "45 min studied", loop: "Slow, seamless", mood: "Calm, soothing",
            frames: [
              { title: "Begins to stretch", note: "arms start rising" },
              { title: "Stretch + exhale", note: "arms up in a V, breathes out" },
              { title: "Relaxes", note: "leans back, eyes closed, calm" },
            ],
          },
          {
            id: "staying-on-it-pays-off", title: "Staying on it pays off", src: "/lotties/bootsschule1/staying-on-it-pays-off.json", group: "Break nudges",
            trigger: "3 days in a row", loop: "Seamless", mood: "Encouraging, positive",
            frames: [
              { title: "Day 1 marked", note: "first day box checked" },
              { title: "3-day streak", note: "all three boxes checked" },
              { title: "Warm thumbs-up", note: "encouraging, then loop" },
            ],
          },
        ],
      },
    },
    {
      type: "aiWorkflow",
      heading: {
        eyebrow: "Process",
        title: "Where AI Helped.",
        description: "AI sped up the early drafting. The client knew about it, and the choices and the final artwork were mine.",
      },
      data: {
        stages: [
          {
            stage: "Mascot drafts",
            tools: ["Gemini"],
            aiDid: "Generated draft mascot designs based on the shape of the original character, to speed up exploring options.",
            iDecided: "Which draft to take forward. I rebuilt the chosen one by hand as clean vector artwork in Illustrator, and told the client AI was used for the drafts.",
          },
        ],
      },
    },
  ],
};
