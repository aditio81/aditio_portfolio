import { STORY_LABEL, STORY_ORDER, type CaseStudy, type StoryKey, type StorySection } from "@/content/types";

export function getStorySections(story: CaseStudy["story"]) {
  return STORY_ORDER.map((key) => ({ key, section: story?.[key] })).filter(
    (s): s is { key: StoryKey; section: StorySection } => Boolean(s.section)
  );
}

export default function CaseStudyStory({ story }: { story: CaseStudy["story"] }) {
  const sections = getStorySections(story);
  if (sections.length === 0) return null;

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        {sections.map(({ key, section }, i) => {
          const isLastOdd = i === sections.length - 1 && sections.length % 2 === 1;
          return (
            <div
              key={key}
              className={`flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-accent-orange/30 md:p-10 ${
                isLastOdd ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-orange">
                  {String(i + 1).padStart(2, "0")}. {STORY_LABEL[key]}
                </span>
                <div className="h-px grow bg-border" />
              </div>

              {section.title && (
                <h3 className="mb-4 text-2xl font-bold leading-tight text-foreground md:text-3xl">{section.title}</h3>
              )}
              <p className="grow leading-relaxed text-muted">{section.body}</p>

              {section.points && section.points.length > 0 && (
                <ul className="mt-8 space-y-4">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
