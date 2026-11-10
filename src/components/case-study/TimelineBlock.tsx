import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export interface TimelinePhase {
  name: string;
  duration?: string;     // teks bebas, contoh: "2 weeks"
  weeks?: number;        // jika SEMUA fase mengisi weeks, muncul bilah proporsional
  description?: string;
}

export interface TimelineData {
  total?: string;        // contoh: "3 months"
  phases: TimelinePhase[];
}

const COLS = ["md:grid-cols-1", "md:grid-cols-1", "md:grid-cols-2", "md:grid-cols-3", "md:grid-cols-4"];

export default function TimelineBlock({ data, heading }: { data: TimelineData; heading?: Heading }) {
  const { phases } = data;
  const proportional = phases.every((p) => (p.weeks ?? 0) > 0);

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      {data.total && (
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
          Total: <span className="font-bold text-foreground">{data.total}</span>
        </p>
      )}

      {proportional && (
        <div className="mb-10 flex h-3 gap-1 overflow-hidden rounded-full" aria-hidden>
          {phases.map((p, i) => (
            <div
              key={p.name}
              className="bg-accent-orange"
              style={{ flexGrow: p.weeks, flexBasis: 0, opacity: 0.35 + (0.65 * i) / Math.max(phases.length - 1, 1) }}
            />
          ))}
        </div>
      )}

      <ol className={`grid gap-6 ${COLS[Math.min(phases.length, 4)]}`}>
        {phases.map((p, i) => (
          <li key={p.name} className="rounded-2xl border border-border bg-surface p-6">
            <span className="mb-3 block font-mono text-xs text-accent-orange">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mb-1 text-lg font-bold text-foreground">{p.name}</h3>
            {p.duration && <p className="mb-3 font-mono text-xs text-muted">{p.duration}</p>}
            {p.description && <p className="text-sm leading-relaxed text-muted">{p.description}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
