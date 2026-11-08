import { UICaseStudyContent } from "@/data/case-studies";

// Import default harus PERSIS seperti nama file (case-sensitive)
import UICaseStudyHero from "./UICaseStudyHero";
import UICaseStudyNarrative from "./UICaseStudyNarrative";
import UICaseStudyDesignSystem from "./UICaseStudyDesignSystem";
import UICaseStudyMockups from "./UICaseStudyMockups";

interface Props {
  content: UICaseStudyContent;
}

export default function UICaseStudyLayout({ content }: Props) {
  return (
    <>
      {/* 1. Hero Section */}
      <UICaseStudyHero data={content.hero} />
      
      {/* Divider */}
      <div className="w-full h-px bg-border my-8"></div>

      {/* 2. Narrative Section */}
      <UICaseStudyNarrative data={content.narrative} />
      
      {/* Divider */}
      <div className="w-full h-px bg-border my-8"></div>

      {/* 3. Design System Section */}
      <UICaseStudyDesignSystem /> 
      
      {/* Divider */}
      <div className="w-full h-px bg-border my-8"></div>

      {/* 4. Mockups Section */}
      <UICaseStudyMockups data={content.mockups} />
    </>
  );
}