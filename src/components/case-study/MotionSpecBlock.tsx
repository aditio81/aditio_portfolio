import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

// Spec sheet animasi: angka yang kamu kendalikan sendiri (durasi, fps, ukuran file).
// Isi hanya yang benar-benar terukur dari file aslimu.
export interface MotionSpecFile {
  name: string;        // contoh: "van-in.json"
  behavior?: string;   // contoh: "Plays once" / "Loops"
  format: string;      // contoh: "Lottie JSON"
  duration?: string;   // contoh: "2.02 s (121 frames)"
  fps?: number;
  artboard?: string;   // contoh: "1000 × 1000"
  layers?: number;
  size?: string;       // contoh: "123 KB"
}

export interface MotionSpecData {
  files: MotionSpecFile[];
  principles?: { title: string; body: string }[]; // 2-3 prinsip gerak (opsional)
  handoff?: string;                                // catatan serah-terima ke developer (opsional)
}

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-2 last:border-b-0">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

export default function MotionSpecBlock({ data, heading }: { data: MotionSpecData; heading?: Heading }) {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      <div className="grid gap-6 md:grid-cols-2">
        {data.files.map((f) => (
          <div key={f.name} className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-mono text-sm font-bold text-foreground">{f.name}</h3>
              {f.behavior && (
                <span className="rounded-full bg-accent-orange px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  {f.behavior}
                </span>
              )}
            </div>
            <dl>
              <Row label="Format" value={f.format} />
              {f.duration && <Row label="Duration" value={f.duration} />}
              {f.fps !== undefined && <Row label="Frame rate" value={`${f.fps} fps`} />}
              {f.artboard && <Row label="Artboard" value={f.artboard} />}
              {f.layers !== undefined && <Row label="Layers" value={f.layers} />}
              {f.size && <Row label="File size" value={f.size} />}
            </dl>
          </div>
        ))}
      </div>

      {data.principles && data.principles.length > 0 && (
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {data.principles.map((p) => (
            <li key={p.title} className="rounded-2xl border border-border p-6">
              <h4 className="mb-2 font-bold text-foreground">{p.title}</h4>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      )}

      {data.handoff && (
        <p className="mt-6 max-w-3xl rounded-xl border border-dashed border-border px-4 py-3 text-sm leading-relaxed text-muted">
          <span className="mr-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-orange">Handoff</span>
          {data.handoff}
        </p>
      )}
    </section>
  );
}
