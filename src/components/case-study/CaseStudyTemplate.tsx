import type { CaseStudy } from "@/content/types";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyStory, { getStorySections } from "./CaseStudyStory";
import CaseStudyOutcome, { hasOutcome } from "./CaseStudyOutcome";
import ShowcaseBlocks from "./ShowcaseBlocks";
import CaseStudyLinks from "./CaseStudyLinks";

// Satu template untuk SEMUA jenis proyek.
// Urutan: Hero → (Cerita ⇄ Karya) → Outcome → Links
// UI/UX: cerita dulu baru karya. Lottie & Explainer: karya dulu (karya adalah bintangnya).
export default function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  const workFirst = study.order ? study.order === "work-first" : study.category !== "uiux";

  const story = getStorySections(study.story).length > 0 ? <CaseStudyStory story={study.story} /> : null;
  const showcase = study.showcase.length > 0 ? <ShowcaseBlocks blocks={study.showcase} /> : null;
  const outcome = hasOutcome(study.outcome) ? <CaseStudyOutcome outcome={study.outcome} /> : null;

  const links = study.links && study.links.length > 0 ? <CaseStudyLinks links={study.links} /> : null;

  const sections = (workFirst ? [showcase, story, outcome, links] : [story, showcase, outcome, links]).filter(Boolean);

  return (
    <>
      <CaseStudyHero study={study} />
      {sections.map((section, i) => (
        <div key={i}>
          <div className="my-8 h-px w-full bg-border" />
          {section}
        </div>
      ))}
    </>
  );
}
