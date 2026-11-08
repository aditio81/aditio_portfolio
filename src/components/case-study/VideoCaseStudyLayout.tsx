import VideoCaseStudyHero, { VideoCaseStudyData } from "./VideoCaseStudyHero";
import VideoCaseStudyEmbed from "./VideoCaseStudyEmbed";

export interface VideoCaseStudyContent {
  hero: VideoCaseStudyData;
  video: {
    youtubeId: string;
    title?: string;
  };
}

interface Props {
  content: VideoCaseStudyContent;
}

export default function VideoCaseStudyLayout({ content }: Props) {
  return (
    <>
      {/* 1. Hero Section */}
      <VideoCaseStudyHero data={content.hero} />
      
      {/* Divider */}
      <div className="w-full h-px bg-border my-8"></div>

      {/* 2. YouTube Video Embed */}
      <VideoCaseStudyEmbed 
        videoId={content.video.youtubeId} 
        title={content.video.title}
      />
    </>
  );
}