"use client";

import { useEffect, useRef, useState } from "react";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

// Pemutar MP4 ringan untuk pratinjau animasi: tanpa suara, berulang, dan hanya berjalan saat terlihat.
export interface VideoFileData {
  src: string;          // MP4 di /public (sebaiknya tanpa audio dan di bawah beberapa MB)
  poster?: string;
  aspect?: string;      // contoh: "16 / 9" atau "1000 / 666"
  maxWidth?: number;
  caption?: string;
}

export default function VideoFileBlock({ data, heading }: { data: VideoFileData; heading?: Heading }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing && visible) v.play().catch(() => {});
    else v.pause();
  }, [playing, visible]);

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />
      <div className="mx-auto" style={{ maxWidth: data.maxWidth }}>
        <div
          ref={frameRef}
          className="overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-xl"
          style={{ aspectRatio: data.aspect ?? "16 / 9" }}
        >
          <video
            ref={videoRef}
            src={data.src}
            poster={data.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-pressed={playing}
            className="rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            {playing ? "Pause" : "Play"}
          </button>
          {reduced && <p className="text-xs text-muted">Your device prefers reduced motion, so playback starts paused.</p>}
        </div>
      </div>
      {data.caption && <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted">{data.caption}</p>}
    </section>
  );
}
