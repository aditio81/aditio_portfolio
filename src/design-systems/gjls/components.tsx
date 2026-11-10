import type { ReactNode } from "react";

// Semua warna dibaca dari CSS variable (var(--ds-*)) yang diisi oleh blok design system,
// jadi mengubah token di blok langsung mengubah komponen-komponen ini.

// ---------- BUTTON ----------
export type ButtonTone = "pink" | "teal" | "mustard" | "white";

const toneClass: Record<ButtonTone, string> = {
  pink: "bg-[color:var(--ds-pink)] text-white",
  teal: "bg-[color:var(--ds-teal)] text-white",
  mustard: "bg-[color:var(--ds-mustard)] text-[color:var(--ds-ink)]",
  white: "bg-[color:var(--ds-white)] text-[color:var(--ds-ink)]",
};

export function GjlsButton({ tone, pressed = false, children }: { tone: ButtonTone; pressed?: boolean; children: ReactNode }) {
  const state = pressed
    ? "translate-x-0.5 translate-y-0.5 shadow-[2px_2px_0_0_var(--ds-ink)]"
    : "shadow-[4px_4px_0_0_var(--ds-ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--ds-ink)]";
  return (
    <button
      type="button"
      className={`w-full rounded-lg border-2 border-[color:var(--ds-ink)] px-6 py-3 font-bold transition-all ${toneClass[tone]} ${state}`}
    >
      {children}
    </button>
  );
}

// ---------- BADGES ----------
function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--ds-ink)]">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-teal)] px-5 py-2.5 shadow-[5px_5px_0_0_var(--ds-ink)]">
      <Star />
      <span className="text-base font-bold text-white">{children}</span>
      <Star />
    </div>
  );
}

export function PillBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-pink)] px-5 py-2 shadow-[5px_5px_0_0_var(--ds-ink)]">
      <span className="text-sm font-bold text-white">{children}</span>
    </div>
  );
}

export function CircleBadge() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-mustard)] shadow-[5px_5px_0_0_var(--ds-ink)]">
      <Star />
    </div>
  );
}

// ---------- CARDS ----------
const cardBase =
  "h-fit self-start rounded-xl border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-white)] p-4 shadow-[4px_4px_0_0_var(--ds-ink)]";

export function FilmCard() {
  return (
    <div className={cardBase}>
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-lg border-2 border-[color:var(--ds-ink)] px-3 py-1 font-mono text-xs font-bold">2020</span>
        <span className="font-mono text-xs font-bold text-[color:var(--ds-pink)]">⏱ 12 MENIT</span>
      </div>
      <div
        className="relative mb-3 flex aspect-video items-center justify-center overflow-hidden rounded-lg border-2 border-[color:var(--ds-ink)]"
        style={{ backgroundImage: "linear-gradient(to bottom right, var(--ds-teal), var(--ds-ink))" }}
      >
        <span className="text-xl font-bold tracking-wider text-white">KUYUP</span>
      </div>
      <h5 className="mb-1 text-base font-bold uppercase">KUYUP</h5>
      <p className="text-xs leading-relaxed opacity-70">Kisah kehujanan di halte reot yang menguji batas kesabaran tiga sahabat.</p>
    </div>
  );
}

export function CrewCard() {
  return (
    <div className={`${cardBase} flex flex-col items-center`}>
      <div className="mb-3 inline-flex items-center rounded-lg border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-teal)] px-3 py-1 shadow-[2px_2px_0_0_var(--ds-ink)]">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-white">SOCMED SPECIALIST</span>
      </div>
      <div className="mb-3 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border-2 border-[color:var(--ds-ink)] bg-linear-to-br from-gray-200 to-gray-400">
        <svg className="h-12 w-12 opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="inline-flex items-center rounded-lg border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-mustard)] px-3 py-1 shadow-[2px_2px_0_0_var(--ds-ink)]">
        <span className="text-xs font-bold">Bilqis Safra</span>
      </div>
    </div>
  );
}

export function MerchCard() {
  return (
    <div className={`${cardBase} flex flex-col`}>
      <div className="mb-4 aspect-3/4 w-full overflow-hidden rounded-lg border-2 border-[color:var(--ds-ink)] bg-linear-to-br from-purple-200 via-purple-300 to-purple-400" />
      <h5 className="mb-0.5 text-base font-bold uppercase">AC ANGET</h5>
      <p className="mb-3 text-xs opacity-70">Vol 2 (Edisi Restock)</p>
      <div className="mt-auto flex items-center justify-between border-t-2 border-[color:var(--ds-ink)]/10 pt-3">
        <div>
          <div className="font-mono text-[10px] opacity-60">HARGA</div>
          <div className="text-lg font-bold">RP240.000</div>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-red)] px-4 py-2 text-xs font-bold text-white shadow-[3px_3px_0_0_var(--ds-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_var(--ds-ink)]"
        >
          CHECKOUT ↗
        </button>
      </div>
    </div>
  );
}
