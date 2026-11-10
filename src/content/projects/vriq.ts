import type { CaseStudy } from "../types";

export const vriq: CaseStudy = {
  slug: "vriq",
  title: "VRIQ Loading Animation",
  client: "VRIQ",
  category: "motion",
  startingPoint: "from-scratch",
  domain: "App",

  role: "Illustrator & Motion Designer",
  year: "2026",
  tools: ["Illustrator", "After Effects", "Lottie"],
  summary:
    "A Lottie loading animation of a delivery van for VRIQ's app, delivered as two states: van-in and van-loop. I drew the vector artwork and animated it to the client's brief.",
  disclosure:
    "Client work through Fiverr. The client supplied the visual references and specified every movement; I drew the vector artwork in Illustrator and animated it.",

  card: {
    description: "A delivery van loading animation for an app, delivered as two Lottie states: van-in and van-loop.",
    image: "/images/projects/loading-states-thumbnail.gif",
    staticImage: "/images/projects/loading-states-static.png",
  },

  story: {
    startingPoint: {
      title: "A Brief With References",
      body: "VRIQ, a company building its own app, reached out through Fiverr. They asked for a Lottie loading animation of a van driving along to deliver their products, and they came with their own visual references and a brief describing every movement.",
    },
    goal: {
      body: "Deliver the van as two animation states for use as a loading animation: van-in, where the van arrives, and van-loop, where it keeps driving.",
    },
    approach: {
      body: "Every movement was already specified in the client's brief, so the work was precise execution: I drew the van as vector artwork in Illustrator from their references, animated both states to match the brief, and exported them as Lottie files.",
    },
  },

  showcase: [
    {
      type: "motionPlayer",
      heading: {
        eyebrow: "The Animation",
        title: "Van In, Van Loop.",
        description: "Two states: the van arrives, then keeps driving. Replay it, change the speed, or jump between states.",
      },
      data: {
        background: "#FFFFFF",
        states: [
          { name: "van-in", label: "Van in", src: "/lotties/van-in.json", loop: false, note: "The entrance. Plays once, then hands over to the loop." },
          { name: "van-loop", label: "Van loop", src: "/lotties/van-loop.json", loop: true, note: "The van keeps driving. Repeats continuously while loading." },
        ],
      },
    },
    {
      type: "motionSpec",
      heading: {
        eyebrow: "Specs",
        title: "What Was Delivered.",
        description: "Measured from the delivered files.",
      },
      data: {
        files: [
          { name: "van-in.json", behavior: "Plays once", format: "Lottie JSON", duration: "2.02 s (121 frames)", fps: 60, artboard: "1000 × 1000", layers: 59, size: "123 KB" },
          { name: "van-loop.json", behavior: "Loops", format: "Lottie JSON", duration: "5.03 s (302 frames)", fps: 60, artboard: "1000 × 1000", layers: 58, size: "122 KB" },
        ],
        handoff: "Delivered as two Lottie JSON files, one per state, so the app can play the entrance once and then loop the drive.",
      },
    },
  ],
};
