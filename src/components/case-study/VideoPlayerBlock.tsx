"use client";

import { useState } from "react";
import Image from "next/image";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

// Pemutar video YouTube yang RINGAN: yang dimuat awalnya hanya gambar sampul (poster).
// Video baru dimuat saat diklik, dan chapter di samping bisa melompat ke menit tertentu.
export interface VideoChapter {
  time: string;   // "0:12" atau "1:05" atau "1:02:30"
  title: string;
  note?: string;  // kenapa bagian ini ada di sini (keputusan struktur)
}

export interface VideoPlayerData {
  youtubeId: string;            // video bisa "Unlisted" (JANGAN "Private", karena tidak bisa di-embed)
  title?: string;
  poster?: string;              // gambar sampul di /public. Tanpa ini dipakai thumbnail YouTube
  aspect?: "16 / 9" | "9 / 16" | "1 / 1";
  chapters?: VideoChapter[];
  caption?: string;
}

function toSeconds(t: string): number {
  const parts = t.split(":").map(Number);
  if (parts.length === 0 || parts.some(Number.isNaN)) return 0;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}

export default function VideoPlayerBlock({ data, heading }: { data: VideoPlayerData; heading?: Heading }) {
  const [loaded, setLoaded] = useState(false);
  const [start, setStart] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [posterOk, setPosterOk] = useState(true);

  const id = data.youtubeId;
  // Jangan tampilkan apa pun jika ID belum diisi (hindari video palsu/acak)
  if (!id || id.startsWith("REPLACE")) return null;

  const chapters = data.chapters ?? [];
  const aspect = data.aspect ?? "16 / 9";
  const title = data.title ?? heading?.title ?? "Video";

  function play(seconds: number, chapterIndex: number | null) {
    setStart(seconds);
    setActive(chapterIndex);
    setLoaded(true);
    setRunKey((k) => k + 1);
  }

  const stage = (
    <div
      className="relative w-full overflow-hidden rounded-xl border-2 border-border bg-neutral-900 shadow-xl"
      style={{ aspectRatio: aspect }}
    >
      {loaded ? (
        <iframe
          key={runKey}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&start=${start}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <>
          {data.poster ? (
            <Image src={data.poster} alt="" fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
          ) : (
            posterOk && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => setPosterOk(false)}
              />
            )
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              type="button"
              onClick={() => play(0, null)}
              aria-label={`Play ${title}`}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-orange text-3xl text-white shadow-xl transition-transform hover:scale-105"
            >
              ▶
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      {chapters.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-10">
          <div>{stage}</div>
          <ol className="space-y-2">
            {chapters.map((c, i) => (
              <li key={`${c.time}-${c.title}`}>
                <button
                  type="button"
                  onClick={() => play(toSeconds(c.time), i)}
                  aria-pressed={active === i}
                  className={`w-full rounded-xl border-2 p-3 text-left transition-colors ${
                    active === i ? "border-accent-orange bg-surface" : "border-border hover:border-foreground/30"
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent-orange">{c.time}</span>
                    <span className="font-bold text-foreground">{c.title}</span>
                  </span>
                  {c.note && <span className="mt-1 block text-sm leading-relaxed text-muted">{c.note}</span>}
                </button>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl">{stage}</div>
      )}

      {data.caption && <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{data.caption}</p>}
    </section>
  );
}
