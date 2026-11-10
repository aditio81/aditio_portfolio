import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export type SitemapStatus = "new" | "empty" | "removed" | "renamed";

export interface SitemapNode {
  label: string;
  note?: string;           // catatan kecil di bawah label
  status?: SitemapStatus;  // lencana: New / Empty / Removed / Renamed
  children?: SitemapNode[];
}

export interface SitemapData {
  before: { label?: string; items: SitemapNode[] };
  after: { label?: string; items: SitemapNode[] };
  caption?: string;
}

const STATUS_LABEL: Record<SitemapStatus, string> = {
  new: "New",
  empty: "Empty",
  removed: "Removed",
  renamed: "Renamed",
};

function Tree({ nodes }: { nodes: SitemapNode[] }) {
  return (
    <ul className="space-y-3">
      {nodes.map((n) => (
        <li key={n.label}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange" />
            <span className="font-medium text-foreground">{n.label}</span>
            {n.status && (
              <span
                className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                  n.status === "new" ? "bg-accent-orange text-white" : "border border-dashed border-border text-muted"
                }`}
              >
                {STATUS_LABEL[n.status]}
              </span>
            )}
          </div>
          {n.note && <p className="ml-3.5 mt-1 text-xs leading-relaxed text-muted">{n.note}</p>}
          {n.children && n.children.length > 0 && (
            <div className="ml-[3px] mt-3 border-l border-border pl-5">
              <Tree nodes={n.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function SitemapBlock({ data, heading }: { data: SitemapData; heading?: Heading }) {
  const columns = [
    { key: "before", title: data.before.label ?? "Before", items: data.before.items },
    { key: "after", title: data.after.label ?? "After", items: data.after.items },
  ];
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />
      <div className="grid gap-6 md:grid-cols-2">
        {columns.map((c) => (
          <div key={c.key} className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <span className="mb-6 block font-mono text-xs font-bold uppercase tracking-widest text-accent-orange">{c.title}</span>
            <Tree nodes={c.items} />
          </div>
        ))}
      </div>
      {data.caption && <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{data.caption}</p>}
    </section>
  );
}
