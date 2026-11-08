import { UICaseStudyData } from "./UICaseStudyHero";

// Kita tambahkan tipe data untuk narasi ini
export interface NarrativeData {
  challengeTitle: string;
  challengeSummary: string;
  challengePoints: string[];
  solutionTitle: string;
  solutionSummary: string;
  solutionPoints: string[];
}

interface Props {
  data: NarrativeData;
}

export default function UICaseStudyNarrative({ data }: Props) {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* === THE CHALLENGE === */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 flex flex-col h-full hover:border-accent-orange/30 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              01. The Challenge
            </span>
            <div className="h-px grow bg-border"></div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {data.challengeTitle}
          </h3>
          
          <p className="text-muted leading-relaxed mb-8 grow">
            {data.challengeSummary}
          </p>

          <ul className="space-y-4">
            {data.challengePoints.map((point, index) => (
              <li key={index} className="flex gap-3 text-sm text-foreground/80">
                <span className="text-accent-orange font-bold mt-1">✕</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* === THE SOLUTION === */}
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 flex flex-col h-full hover:border-accent-purple/30 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-bold text-accent-purple tracking-widest uppercase">
              02. The Solution
            </span>
            <div className="h-px grow bg-border"></div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {data.solutionTitle}
          </h3>
          
          <p className="text-muted leading-relaxed mb-8 grow">
            {data.solutionSummary}
          </p>

          <ul className="space-y-4">
            {data.solutionPoints.map((point, index) => (
              <li key={index} className="flex gap-3 text-sm text-foreground/80">
                <span className="text-accent-purple font-bold mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}