"use client";

import { useState } from "react";
import Image from "next/image";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export interface BeforeAfterData {
  before: { image: string; label?: string };
  after: { image: string; label?: string };
  caption?: string;
  // Ukuran asli gambar "after". Gambar before & after sebaiknya berukuran SAMA agar slider sejajar.
  width?: number;
  height?: number;
}

type Mode = "slider" | "side";

function ModeButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
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

function Tag({ children, right = false }: { children: string; right?: boolean }) {
  return (
    <span className={`absolute top-4 ${right ? "right-4" : "left-4"} rounded-md bg-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-background shadow-lg`}>
      {children}
    </span>
  );
}

export default function BeforeAfterBlock({ data, heading }: { data: BeforeAfterData; heading?: Heading }) {
  const [mode, setMode] = useState<Mode>("slider");
  const [pos, setPos] = useState(50);
  const w = data.width ?? 1600;
  const h = data.height ?? 1000;
  const beforeLabel = data.before.label ?? "Before";
  const afterLabel = data.after.label ?? "After";

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      <div className="mb-6 flex gap-2">
        <ModeButton active={mode === "slider"} onClick={() => setMode("slider")}>Slider</ModeButton>
        <ModeButton active={mode === "side"} onClick={() => setMode("side")}>Side by side</ModeButton>
      </div>

      {mode === "slider" ? (
        <div className="relative select-none overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-xl">
          <Image src={data.after.image} alt={afterLabel} width={w} height={h} sizes="(min-width: 1024px) 1100px, 100vw" className="h-auto w-full" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image src={data.before.image} alt={beforeLabel} fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover object-top" />
          </div>

          <Tag>{beforeLabel}</Tag>
          <Tag right>{afterLabel}</Tag>

          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" style={{ left: `${pos}%` }}>
            <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-neutral-900 bg-white text-sm font-bold text-neutral-900 shadow-lg">
              ⇆
            </span>
          </div>

          {/* Input range tak terlihat: menangani drag, sentuh, dan keyboard */}
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {[{ ...data.before, label: beforeLabel }, { ...data.after, label: afterLabel }].map((side) => (
            <div key={side.label} className="relative overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-xl">
              <Image src={side.image} alt={side.label} width={w} height={h} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
              <Tag>{side.label}</Tag>
            </div>
          ))}
        </div>
      )}

      {data.caption && <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{data.caption}</p>}
    </section>
  );
}
