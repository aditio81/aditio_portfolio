import Image from "next/image";
import { CATEGORY_LABEL, STARTING_POINT_LABEL, type CaseStudy } from "@/content/types";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  const tags = [
    CATEGORY_LABEL[study.category],
    study.startingPoint ? STARTING_POINT_LABEL[study.startingPoint] : null,
    study.domain ?? null,
  ].filter((t): t is string => Boolean(t));

  // Untuk Lottie & Explainer, karya langsung tampil setelah hero, jadi cover tidak perlu.
  const showCover = study.category === "uiux" && Boolean(study.cover);

  return (
    <section className="container mx-auto px-6 pb-16 md:pb-24">
      <div className="mb-10 max-w-4xl">
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent-orange">
          {study.client ?? CATEGORY_LABEL[study.category]} / Case Study
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter text-foreground md:text-7xl">
          {study.title}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{study.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted">
              {tag}
            </li>
          ))}
        </ul>

        {study.disclosure && (
          <p className="mt-6 max-w-3xl rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
            <span className="mr-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-orange">Note</span>
            {study.disclosure}
          </p>
        )}
      </div>

      <div className="grid gap-6 border-y border-border py-6 sm:grid-cols-3">
        <Meta label="Role" value={study.role} />
        <Meta label={study.duration ? "Year / Duration" : "Year"} value={study.duration ? `${study.year} / ${study.duration}` : study.year} />
        <Meta label="Tools" value={study.tools.join(" · ")} />
      </div>

      {showCover && study.cover && (
        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-surface">
          <Image
            src={study.cover}
            alt={`${study.title} cover`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">{label}</p>
      <p className="font-medium text-foreground">{value}</p>
    </div>
  );
}
