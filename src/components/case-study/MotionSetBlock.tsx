"use client";

import { useEffect, useRef, useState } from "react";
import { Lottie, type LottieHandle } from "lottie-react";
import type { Heading } from "@/content/types";
import type { LottieSpec } from "@/lib/lottie-spec";
import SectionHeading from "./SectionHeading";

// Blok untuk SEKUMPULAN animasi yang berdiri sendiri-sendiri (contoh: 7 header popup),
// masing-masing dengan pemicu, mood, dan storyboard sendiri. Spesifikasi file dibaca otomatis.
export interface MotionSetFrame {
  title: string;
  note?: string;
}

export interface MotionSetItem {
  id: string;
  title: string;      // juga dipakai sebagai judul pada bingkai popup
  src: string;        // path file Lottie JSON di /public
  group?: string;     // contoh: "Product tips" / "Break nudges"
  trigger?: string;   // kapan animasi ini muncul di produk
  loop?: string;      // jenis loop dari brief, contoh: "Seamless"
  mood?: string;
  frames?: MotionSetFrame[]; // storyboard dari brief
}

export interface MotionSetData {
  items: MotionSetItem[];
  caption?: string;
}

const SPEEDS = [0.5, 1, 2];
const CHECKER = {
  backgroundImage: "conic-gradient(#e6e6e6 25%, #cfcfcf 0 50%, #e6e6e6 0 75%, #cfcfcf 0)",
  backgroundSize: "24px 24px",
};

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
        active ? "border-foreground bg-foreground text-background" : "border-border text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border py-2 last:border-b-0">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="text-right text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

const fileName = (src: string) => src.split("/").pop() ?? src;
const kb = (n: number) => `${Math.round(n)} KB`;

export default function MotionSetBlock({
  data,
  specs,
  heading,
}: {
  data: MotionSetData;
  specs: Record<string, LottieSpec | null>;
  heading?: Heading;
}) {
  const { items } = data;
  const [sel, setSel] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [view, setView] = useState<"popup" | "transparent">("popup");
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);

  const stageRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieHandle>(null);
  const live = useRef({ playing, visible });
  live.current = { playing, visible };

  const item = items[sel];
  const spec = specs[item.id];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const h = lottieRef.current;
    if (!h) return;
    if (playing && visible) h.play();
    else h.pause();
  }, [playing, visible]);

  function select(i: number) {
    setSel(i);
    setRunKey((k) => k + 1);
    setPlaying(true);
  }

  const anim = (
    <Lottie
      key={`${view}-${sel}-${runKey}`}
      src={item.src}
      autoplay
      loop
      speed={speed}
      lottieRef={lottieRef}
      subscriptions={{
        ready: () => {
          if (!(live.current.playing && live.current.visible)) lottieRef.current?.pause();
        },
      }}
      className="h-full w-full"
    />
  );

  // Kelompokkan item (urutan asli dipertahankan)
  const groups: { name: string; entries: { item: MotionSetItem; index: number }[] }[] = [];
  items.forEach((it, index) => {
    const name = it.group ?? "";
    let g = groups.find((x) => x.name === name);
    if (!g) {
      g = { name, entries: [] };
      groups.push(g);
    }
    g.entries.push({ item: it, index });
  });

  const totalKB = items.reduce((sum, it) => sum + (specs[it.id]?.sizeKB ?? 0), 0);

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
        {/* Panggung + kontrol */}
        <div ref={stageRef} className="lg:sticky lg:top-24 lg:self-start">
          {view === "popup" ? (
            <div className="mx-auto w-full max-w-[340px] rounded-3xl bg-white p-6 text-neutral-900 shadow-xl ring-1 ring-black/10">
              <div className="mx-auto aspect-square w-[78%]">{anim}</div>
              <h4 className="mt-2 text-center text-xl font-bold">{item.title}</h4>
              <div className="mt-4 space-y-2" aria-hidden>
                <div className="h-2.5 rounded-full bg-neutral-200" />
                <div className="mx-auto h-2.5 w-4/5 rounded-full bg-neutral-200" />
              </div>
              <div className="mt-6 h-11 rounded-xl bg-neutral-200" aria-hidden />
            </div>
          ) : (
            <div className="mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-2xl border-2 border-border shadow-xl" style={CHECKER}>
              {anim}
            </div>
          )}
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
            {view === "popup" ? "Illustrative popup, not the client's actual UI" : "Transparent background, as delivered"}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Chip active={false} onClick={() => setPlaying((p) => !p)}>{playing ? "Pause" : "Play"}</Chip>
            <Chip active={false} onClick={() => select(sel)}>Restart</Chip>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-muted">Speed</span>
            {SPEEDS.map((s) => (
              <Chip key={s} active={speed === s} onClick={() => setSpeed(s)}>{s}×</Chip>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-muted">View</span>
            <Chip active={view === "popup"} onClick={() => setView("popup")}>Popup</Chip>
            <Chip active={view === "transparent"} onClick={() => setView("transparent")}>Transparent</Chip>
          </div>
          {reduced && (
            <p className="mt-4 text-center text-xs text-muted">Your device prefers reduced motion, so playback starts paused. Press Play to watch.</p>
          )}
        </div>

        {/* Daftar + detail */}
        <div>
          <div className="space-y-6">
            {groups.map((g) => (
              <div key={g.name || "all"}>
                {g.name && <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-accent-orange">{g.name}</p>}
                <ul className="grid gap-2 sm:grid-cols-2">
                  {g.entries.map(({ item: it, index }) => (
                    <li key={it.id}>
                      <button
                        type="button"
                        onClick={() => select(index)}
                        aria-pressed={index === sel}
                        className={`w-full rounded-xl border-2 p-3 text-left transition-colors ${
                          index === sel ? "border-accent-orange bg-surface" : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                        <span className="block font-bold leading-tight text-foreground">{it.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-4 text-lg font-bold text-foreground">{item.title}</h3>

            {(item.trigger || item.loop || item.mood) && (
              <dl className="mb-6">
                {item.trigger && <Row label="Trigger" value={item.trigger} />}
                {item.loop && <Row label="Loop" value={item.loop} />}
                {item.mood && <Row label="Mood" value={item.mood} />}
              </dl>
            )}

            {item.frames && item.frames.length > 0 && (
              <div className="mb-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted">Storyboard from the brief</p>
                <ol className="space-y-2">
                  {item.frames.map((f, i) => (
                    <li key={f.title} className="flex gap-3 text-sm">
                      <span className="font-mono text-xs text-accent-orange">{i + 1}</span>
                      <span className="text-foreground">
                        <span className="font-medium">{f.title}</span>
                        {f.note && <span className="text-muted"> · {f.note}</span>}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {spec && (
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted">Measured from the file</p>
                <dl>
                  <Row label="Length" value={`${spec.durationSec.toFixed(2)} s (${spec.frames} frames)`} />
                  <Row label="Frame rate" value={`${spec.fps} fps`} />
                  <Row label="Artboard" value={`${spec.width} × ${spec.height}`} />
                  <Row label="Layers" value={String(spec.layers)} />
                  <Row label="File size" value={kb(spec.sizeKB)} />
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabel semua file */}
      <div className="mt-14 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-border font-mono text-[11px] uppercase tracking-wider text-muted">
              <th className="px-4 py-3 font-normal">File</th>
              <th className="px-4 py-3 font-normal">Length</th>
              <th className="px-4 py-3 font-normal">Layers</th>
              <th className="px-4 py-3 text-right font-normal">Size</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => {
              const s = specs[it.id];
              return (
                <tr key={it.id} className="border-b border-border last:border-b-0">
                  <td className="px-4 py-2.5 font-mono text-xs text-foreground">{fileName(it.src)}</td>
                  <td className="px-4 py-2.5 text-muted">{s ? `${s.durationSec.toFixed(2)} s` : "–"}</td>
                  <td className="px-4 py-2.5 text-muted">{s ? s.layers : "–"}</td>
                  <td className="px-4 py-2.5 text-right text-foreground">{s ? kb(s.sizeKB) : "–"}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="font-medium text-foreground">
              <td className="px-4 py-3" colSpan={3}>{items.length} files · total</td>
              <td className="px-4 py-3 text-right">{kb(totalKB)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {data.caption && <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{data.caption}</p>}
    </section>
  );
}
