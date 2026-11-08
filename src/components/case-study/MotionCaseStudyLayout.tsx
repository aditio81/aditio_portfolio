import MotionCaseStudyHero, { MotionCaseStudyData } from "./MotionCaseStudyHero";
import MotionCaseStudyPreview, { MotionPreviewData } from "./MotionCaseStudyPreview";

export interface MotionCaseStudyContent {
  hero: MotionCaseStudyData;
  preview: MotionPreviewData;
}

interface Props {
  content: MotionCaseStudyContent;
}

export default function MotionCaseStudyLayout({ content }: Props) {
  return (
    <>
      {/* 1. Hero Section (Minimalis) */}
      <MotionCaseStudyHero data={content.hero} />
      
      {/* Divider */}
      <div className="w-full h-px bg-border my-8"></div>

      {/* 2. Preview Section (Lottie Mockup) */}
      <MotionCaseStudyPreview data={content.preview} />
    </>
  );
}