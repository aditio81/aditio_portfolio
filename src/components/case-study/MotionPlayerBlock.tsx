"use client";

import { useEffect, useRef, useState } from "react";
import { Lottie, type LottieHandle } from "lottie-react";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

// Pemutar animasi dengan kontrol: untuk proyek Lottie yang punya satu atau beberapa STATE
// (contoh: "intro" diputar sekali, lalu "loop" diulang terus).
export interface MotionState {
  name: string;     // nama file/state, contoh: "van-in"
  label?: string;   // label tampil, contoh: "Van in"
  src: string;      // path file Lottie JSON di /public
  loop?: boolean;   // true = diulang terus; false/kosong = diputar sekali lalu lanjut ke state berikutnya
  note?: string;    // catatan singkat tentang state ini
}

export interface MotionPlayerData {
  states: MotionState[];  // diputar berurutan; state terakhir boleh loop
  background?: string;    // warna latar kanvas (hex)
  caption?: string;
}

const SPEEDS = [0.5, 1, 2];

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

export default function MotionPlayerBlock({ data, heading }: { data: MotionPlayerData; heading?: Heading }) {
  const { states } = data;
  const [index, setIndex] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [finished, setFinished] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [frame, setFrame] = useState<"phone" | "plain">("phone");
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);

  const stageRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieHandle>(null);
  const live = useRef({ playing, visible });
  live.current = { playing, visible };
  const advance = useRef<() => void>(() => {});

  const current = states[index];

  // Hormati preferensi "reduced motion": mulai dalam keadaan berhenti
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setPlaying(false);
    }
  }, []);

  // Animasi hanya berjalan saat terlihat di layar (hemat CPU)
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
    if (playing && visible && !finished) h.play();
    else h.pause();
  }, [playing, visible, finished]);

  advance.current = () => {
    if (current.loop) return;
    if (index < states.length - 1) {
      setIndex(index + 1);
      setRunKey((k) => k + 1);
    } else {
      setFinished(true);
    }
  };

  function restartFrom(i: number) {
    setIndex(i);
    setFinished(false);
    setPlaying(true);
    setRunKey((k) => k + 1);
  }

  const anim = (
    <Lottie
      key={`${frame}-${index}-${runKey}`}
      src={current.src}
      autoplay
      loop={current.loop ?? false}
      speed={speed}
      lottieRef={lottieRef}
      subscriptions={{
        ready: () => {
          if (!(live.current.playing && live.current.visible)) lottieRef.current?.pause();
        },
        complete: () => advance.current(),
      }}
      className="h-full w-full"
    />
  );

  const status = finished
    ? "Finished. Press Replay to watch again."
    : `Now playing: ${current.label ?? current.name} · ${current.loop ? "loops" : "plays once"}`;

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div ref={stageRef}>
          {frame === "phone" ? (
            <div className="mx-auto w-full max-w-[300px] rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl">
              <div className="flex aspect-[9/19] items-center justify-center overflow-hidden rounded-[2rem]" style={{ background: data.background ?? "#ffffff" }}>
                <div className="aspect-square w-full">{anim}</div>
              </div>
            </div>
          ) : (
            <div className="mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl border-2 border-border shadow-xl" style={{ background: data.background ?? "#ffffff" }}>
              {anim}
            </div>
          )}
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted" aria-live="polite">{status}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            <Chip
              active={false}
              onClick={() => (finished ? restartFrom(0) : setPlaying((p) => !p))}
            >
              {finished ? "Replay" : playing ? "Pause" : "Play"}
            </Chip>
            <Chip active={false} onClick={() => restartFrom(0)}>Restart</Chip>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-muted">Speed</span>
            {SPEEDS.map((s) => (
              <Chip key={s} active={speed === s} onClick={() => setSpeed(s)}>{s}×</Chip>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[11px] uppercase tracking-wider text-muted">View</span>
            <Chip active={frame === "phone"} onClick={() => setFrame("phone")}>Phone frame</Chip>
            <Chip active={frame === "plain"} onClick={() => setFrame("plain")}>Isolated</Chip>
          </div>

          <ol className="space-y-3">
            {states.map((s, i) => (
              <li key={s.name}>
                <button
                  type="button"
                  onClick={() => restartFrom(i)}
                  aria-pressed={i === index && !finished}
                  className={`w-full rounded-xl border-2 p-4 text-left transition-colors ${
                    i === index && !finished ? "border-accent-orange bg-surface" : "border-border hover:border-foreground/30"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-foreground">{String(i + 1).padStart(2, "0")} · {s.label ?? s.name}</span>
                    <span className="font-mono text-[11px] uppercase text-muted">{s.loop ? "loops" : "plays once"}</span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted">{s.name}</p>
                  {s.note && <p className="mt-2 text-sm leading-relaxed text-muted">{s.note}</p>}
                </button>
              </li>
            ))}
          </ol>

          {reduced && (
            <p className="mt-4 text-xs text-muted">Your device prefers reduced motion, so playback starts paused. Press Play to watch.</p>
          )}
        </div>
      </div>

      {data.caption && <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{data.caption}</p>}
    </section>
  );
}
