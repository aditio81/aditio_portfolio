"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export interface SpotlightNote {
  title: string;
  body: string;
  x: number;       // posisi penanda, persen dari lebar gambar (0-100)
  y: number;       // posisi penanda, persen dari tinggi gambar (0-100)
  zoom?: number;   // opsional: perbesar area ini saat dipilih (contoh: 2). Tanpa aset tambahan.
}

export interface SpotlightData {
  image: string;
  width?: number;
  height?: number;
  notes: SpotlightNote[]; // 2-6 catatan keputusan desain
  scroll?: boolean;       // untuk gambar halaman PANJANG: gambar bisa di-scroll di dalam bingkai,
                          // dan memilih catatan menggulung ke posisinya (zoom dinonaktifkan)
}

export default function SpotlightBlock({ data, heading }: { data: SpotlightData; heading?: Heading }) {
  const [active, setActive] = useState<number | null>(0);
  const note = active !== null ? data.notes[active] : null;
  const scrollMode = Boolean(data.scroll);
  const scale = scrollMode ? 1 : note?.zoom ?? 1;
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollMode || active === null) return;
    const el = frameRef.current;
    const n = data.notes[active];
    if (!el || !n) return;
    el.scrollTo({ top: (n.y / 100) * el.scrollHeight - el.clientHeight / 2, behavior: "smooth" });
  }, [active, scrollMode, data.notes]);

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <div
            ref={frameRef}
            className={`relative rounded-2xl border-2 border-border bg-surface shadow-xl ${scrollMode ? "max-h-[75vh] overflow-y-auto" : "overflow-hidden"}`}
          >
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{ transform: `scale(${scale})`, transformOrigin: note ? `${note.x}% ${note.y}%` : "50% 50%" }}
            >
              <Image src={data.image} alt={heading?.title ?? "Spotlight"} width={data.width ?? 1600} height={data.height ?? 1000} sizes="(min-width: 1024px) 66vw, 100vw" quality={85} className="h-auto w-full" />
              {data.notes.map((n, i) => (
                <button
                  key={n.title}
                  type="button"
                  onClick={() => setActive(active === i ? null : i)}
                  aria-label={`Note ${i + 1}: ${n.title}`}
                  aria-pressed={active === i}
                  className={`absolute flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-xs font-bold shadow-lg transition-colors ${
                    active === i ? "border-white bg-accent-orange text-white" : "border-foreground bg-background text-foreground hover:bg-accent-orange hover:text-white"
                  }`}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, transform: `translate(-50%, -50%) scale(${1 / scale})` }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">{scrollMode ? "Scroll the page, or click a number to jump to that decision" : "Click a number to focus on that decision"}</p>
        </div>

        <ol className="space-y-3">
          {data.notes.map((n, i) => (
            <li key={n.title}>
              <button
                type="button"
                onClick={() => setActive(active === i ? null : i)}
                aria-pressed={active === i}
                className={`w-full rounded-xl border-2 p-5 text-left transition-colors ${
                  active === i ? "border-accent-orange bg-surface" : "border-border hover:border-foreground/30"
                }`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${active === i ? "bg-accent-orange text-white" : "bg-foreground text-background"}`}>
                    {i + 1}
                  </span>
                  <span className="font-bold text-foreground">{n.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{n.body}</p>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
