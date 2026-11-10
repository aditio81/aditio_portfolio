"use client";

import { useState } from "react";
import Image from "next/image";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export interface PrototypeData {
  src: string;        // link prototipe Figma (boleh link "Share" biasa), HARUS publik
  poster?: string;    // gambar pratinjau sebelum prototipe dimuat
  ratio?: string;     // contoh: "16 / 10" (default) atau "9 / 19" untuk mobile
  maxWidth?: number;  // px, berguna untuk prototipe mobile (contoh: 380)
  note?: string;
}

// Link Figma biasa diubah ke format embed otomatis
function toEmbedUrl(src: string): string {
  try {
    const u = new URL(src);
    if (u.hostname.endsWith("figma.com") && !u.pathname.startsWith("/embed")) {
      return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(src)}`;
    }
  } catch {
    /* URL tidak valid: pakai apa adanya */
  }
  return src;
}

export default function PrototypeBlock({ data, heading }: { data: PrototypeData; heading?: Heading }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      <div className="mx-auto" style={{ maxWidth: data.maxWidth }}>
        <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-xl" style={{ aspectRatio: data.ratio ?? "16 / 10" }}>
          {loaded ? (
            <iframe src={toEmbedUrl(data.src)} title={heading?.title ?? "Interactive prototype"} allowFullScreen className="absolute inset-0 h-full w-full" />
          ) : (
            <>
              {data.poster && <Image src={data.poster} alt="" fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover object-top opacity-50" />}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <button
                  type="button"
                  onClick={() => setLoaded(true)}
                  className="rounded-full bg-accent-orange px-8 py-3 font-mono text-sm uppercase text-white transition-colors hover:bg-foreground"
                >
                  ▶ Try the interactive prototype
                </button>
                <p className="rounded-md bg-background/80 px-3 py-1 text-xs text-muted">Loads the Figma viewer inside this page</p>
              </div>
            </>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          {data.note ? <p className="max-w-xl text-sm text-muted">{data.note}</p> : <span />}
          <a href={data.src} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-wider text-foreground underline-offset-4 hover:underline">
            Open in new tab ↗
          </a>
        </div>
      </div>
    </section>
  );
}
