import type { Outcome } from "@/content/types";

export function hasOutcome(outcome?: Outcome): outcome is Outcome {
  return Boolean(outcome && (outcome.highlights?.length || outcome.testimonial || outcome.reflection));
}

export default function CaseStudyOutcome({ outcome }: { outcome: Outcome }) {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <span className="mb-8 block font-mono text-xs uppercase tracking-widest text-muted">Outcome</span>

      {outcome.highlights && outcome.highlights.length > 0 && (
        <dl className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcome.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-border bg-surface p-6">
              <dt className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">{h.label}</dt>
              <dd className="text-2xl font-bold text-foreground">{h.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {outcome.testimonial && (
        <figure className="mb-12 max-w-3xl">
          <blockquote className="text-2xl font-medium leading-snug text-foreground md:text-3xl">
            “{outcome.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-4 font-mono text-sm text-muted">
            {outcome.testimonial.author}
            {outcome.testimonial.role ? `, ${outcome.testimonial.role}` : ""}
          </figcaption>
        </figure>
      )}

      {outcome.reflection && (
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-orange">Reflection</p>
          <p className="leading-relaxed text-muted">{outcome.reflection}</p>
        </div>
      )}
    </section>
  );
}
