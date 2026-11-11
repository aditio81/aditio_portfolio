import type { ShowcaseBlock } from "@/content/types";
import UICaseStudyMockups from "./UICaseStudyMockups";
import DesignSystemBlock from "./DesignSystemBlock";
import { designSystems } from "@/design-systems";
import MotionPlayerBlock from "./MotionPlayerBlock";
import MotionSpecBlock from "./MotionSpecBlock";
import MotionSetBlock from "./MotionSetBlock";
import VideoPlayerBlock from "./VideoPlayerBlock";
import CreditsBlock from "./CreditsBlock";
import VideoFileBlock from "./VideoFileBlock";
import { readLottieSpec } from "@/lib/lottie-spec";
import TimelineBlock from "./TimelineBlock";
import SitemapBlock from "./SitemapBlock";
import AIWorkflowBlock from "./AIWorkflowBlock";
import FlowBlock from "./FlowBlock";
import BeforeAfterBlock from "./BeforeAfterBlock";
import SpotlightBlock from "./SpotlightBlock";
import PrototypeBlock from "./PrototypeBlock";
import MotionCaseStudyPreview from "./MotionCaseStudyPreview";
import VideoCaseStudyEmbed from "./VideoCaseStudyEmbed";

function Block({ block }: { block: ShowcaseBlock }) {
  switch (block.type) {
    case "mockups":
      return <UICaseStudyMockups data={block.data} heading={block.heading} />;
    case "flow":
      return <FlowBlock data={block.data} heading={block.heading} />;
    case "beforeAfter":
      return <BeforeAfterBlock data={block.data} heading={block.heading} />;
    case "spotlight":
      return <SpotlightBlock data={block.data} heading={block.heading} />;
    case "prototype":
      return <PrototypeBlock data={block.data} heading={block.heading} />;
    case "motionPlayer":
      return <MotionPlayerBlock data={block.data} heading={block.heading} />;
    case "videoPlayer":
      return <VideoPlayerBlock data={block.data} heading={block.heading} />;
    case "videoFile":
      return <VideoFileBlock data={block.data} heading={block.heading} />;
    case "credits":
      return <CreditsBlock data={block.data} heading={block.heading} />;
    case "motionSet": {
      const specs = Object.fromEntries(block.data.items.map((i) => [i.id, readLottieSpec(i.src)]));
      return <MotionSetBlock data={block.data} specs={specs} heading={block.heading} />;
    }
    case "motionSpec":
      return <MotionSpecBlock data={block.data} heading={block.heading} />;
    case "timeline":
      return <TimelineBlock data={block.data} heading={block.heading} />;
    case "sitemap":
      return <SitemapBlock data={block.data} heading={block.heading} />;
    case "aiWorkflow":
      return <AIWorkflowBlock data={block.data} heading={block.heading} />;
    case "motion":
      return <MotionCaseStudyPreview data={block.data} heading={block.heading} />;
    case "video":
      return <VideoCaseStudyEmbed videoId={block.youtubeId} title={block.title} heading={block.heading} />;
    case "designSystem":
      return <DesignSystemBlock system={designSystems[block.id]} heading={block.heading} />;
  }
}

export default function ShowcaseBlocks({ blocks }: { blocks: ShowcaseBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <div key={`${block.type}-${i}`}>
          {i > 0 && <div className="my-8 h-px w-full bg-border" />}
          <Block block={block} />
        </div>
      ))}
    </>
  );
}
