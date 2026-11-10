import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

// Blok "How I used AI": menunjukkan pembagian peran AI vs kamu, bukan daftar alat.
// Semua field opsional kecuali stage + aiDid. Jangan isi bagian yang belum kamu punya buktinya.
export interface AIStage {
  stage: string;          // contoh: "Reference research"
  tools?: string[];       // contoh: ["GPT", "Gemini"]
  aiDid: string;          // apa yang dikerjakan AI
  iDecided?: string;      // apa yang tetap kamu putuskan
  howIChecked?: string;   // cara kamu memeriksa hasilnya (isi hanya jika benar-benar ada)
}

export interface AIExample {
  title: string;
  idea: string;           // ide / situasi awal
  aiFlagged: string;      // apa yang dikatakan atau ditemukan AI
  decision: string;       // keputusan akhirmu
}

export interface AIWorkflowData {
  summary?: string;       // satu kalimat prinsip kerja
  stages: AIStage[];
  example?: AIExample;    // satu contoh nyata AI menemukan celah
  note?: string;          // catatan kecil, contoh: durasi proyek
}

function Row({ label, text, accent = false }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr] gap-3">
      <dt className={`pt-0.5 font-mono text-[11px] font-bold uppercase tracking-wider ${accent ? "text-accent-orange" : "text-muted"}`}>
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-foreground">{text}</dd>
    </div>
  );
}

export default function AIWorkflowBlock({ data, heading }: { data: AIWorkflowData; heading?: Heading }) {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      {data.summary && <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">{data.summary}</p>}

      <ol className="grid gap-6 md:grid-cols-2">
        {data.stages.map((s, i) => (
          <li key={s.stage} className="rounded-2xl border border-border bg-surface p-6">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="mb-1 block font-mono text-xs text-accent-orange">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold text-foreground">{s.stage}</h3>
              </div>
              {s.tools && s.tools.length > 0 && (
                <ul className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <li key={t} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">{t}</li>
                  ))}
                </ul>
              )}
            </div>
            <dl className="space-y-3">
              <Row label="AI" text={s.aiDid} />
              {s.iDecided && <Row label="Me" text={s.iDecided} accent />}
              {s.howIChecked && <Row label="Check" text={s.howIChecked} />}
            </dl>
          </li>
        ))}
      </ol>

      {data.example && (
        <div className="mt-10 rounded-2xl border-2 border-accent-orange/40 bg-surface p-8 md:p-10">
          <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-accent-orange">
            A gap the AI caught
          </span>
          <h3 className="mb-6 text-2xl font-bold text-foreground">{data.example.title}</h3>
          <dl className="space-y-4">
            <Row label="Idea" text={data.example.idea} />
            <Row label="AI said" text={data.example.aiFlagged} />
            <Row label="I chose" text={data.example.decision} accent />
          </dl>
        </div>
      )}

      {data.note && <p className="mt-6 font-mono text-xs text-muted">{data.note}</p>}
    </section>
  );
}
