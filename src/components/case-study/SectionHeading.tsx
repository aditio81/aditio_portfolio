import type { Heading } from "@/content/types";

// Header section yang dipakai bersama oleh semua blok "Karya".
// Semua field opsional. Kalau kosong, tidak ada header sama sekali.
export default function SectionHeading({ heading }: { heading?: Heading }) {
  if (!heading || (!heading.eyebrow && !heading.title && !heading.description)) return null;
  return (
    <div className="mb-16 max-w-3xl">
      {heading.eyebrow && (
        <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-muted">{heading.eyebrow}</span>
      )}
      {heading.title && (
        <h2 className="mb-4 text-4xl font-bold tracking-tighter text-foreground md:text-6xl">{heading.title}</h2>
      )}
      {heading.description && <p className="text-xl text-muted">{heading.description}</p>}
    </div>
  );
}
