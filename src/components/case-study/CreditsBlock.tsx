import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

// "Who did what": pembagian tugas yang jujur (kamu, klien, AI, pihak lain).
export type CreditOwner = "me" | "client" | "ai" | "me+ai" | "other";

export interface CreditRow {
  task: string;       // contoh: "Script"
  owner: CreditOwner;
  detail?: string;    // keterangan singkat
}

export interface CreditsData {
  rows: CreditRow[];
  note?: string;
}

const OWNER_LABEL: Record<CreditOwner, string> = {
  me: "Me",
  client: "Client",
  ai: "AI",
  "me+ai": "Me + AI",
  other: "Other",
};

function chipClass(owner: CreditOwner): string {
  if (owner === "me") return "bg-accent-orange text-white";
  if (owner === "ai" || owner === "me+ai") return "border border-dashed border-foreground/40 text-foreground";
  return "border border-border text-muted";
}

export default function CreditsBlock({ data, heading }: { data: CreditsData; heading?: Heading }) {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />
      <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
        {data.rows.map((r) => (
          <li key={r.task} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="min-w-0">
              <p className="font-bold text-foreground">{r.task}</p>
              {r.detail && <p className="mt-0.5 text-sm text-muted">{r.detail}</p>}
            </div>
            <span className={`shrink-0 rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${chipClass(r.owner)}`}>
              {OWNER_LABEL[r.owner]}
            </span>
          </li>
        ))}
      </ul>
      {data.note && <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{data.note}</p>}
    </section>
  );
}
