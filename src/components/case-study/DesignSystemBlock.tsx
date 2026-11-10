"use client";

import { useMemo, useState, type CSSProperties, type ReactNode } from "react";
import type { DesignSystem, DSLayout } from "@/design-systems/types";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";
import { bestTextOn, gradeContrast, normalizeHex } from "@/design-systems/color";

type Tab = "tokens" | "components";
type Theme = "light" | "dark";

const WIDTHS: { label: string; value: number | null }[] = [
  { label: "Full", value: null },
  { label: "Tablet", value: 768 },
  { label: "Mobile", value: 375 },
];

// Lebar ubin per layout. Ubin disusun flex-wrap rata tengah, jadi baris terakhir pun tetap di tengah.
const TILE_WIDTH: Record<DSLayout, string> = {
  inline: "w-auto min-w-40",
  grid: "w-60",
  cards: "w-70",
};

const TILE_BORDER = "color-mix(in srgb, var(--ds-ink) 30%, transparent)";
const TILE_BG = "color-mix(in srgb, var(--ds-ink) 4%, transparent)";

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export default function DesignSystemBlock({ system, heading }: { system: DesignSystem; heading?: Heading }) {
  const [tab, setTab] = useState<Tab>("tokens");
  const [theme, setTheme] = useState<Theme>("light");
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [sample, setSample] = useState(system.typography?.sample ?? "The quick brown fox jumps over the lazy dog");
  const [width, setWidth] = useState<number | null>(null);
  const [openCode, setOpenCode] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<string | null>(null);

  const hasDark = system.colors.some((c) => c.dark);
  const bgKey = system.stage?.background ?? "canvas";
  const fgKey = system.stage?.text ?? "ink";

  // Nilai token yang berlaku sekarang (tema + perubahan dari pengunjung)
  const values = useMemo(() => {
    const out: Record<string, string> = { canvas: "#ffffff", ink: "#111111" };
    for (const c of system.colors) {
      const base = theme === "dark" && c.dark ? c.dark : c.hex;
      out[c.key] = normalizeHex(overrides[`${theme}:${c.key}`] ?? base);
    }
    return out;
  }, [system.colors, theme, overrides]);

  const stageStyle = {
    ...Object.fromEntries(Object.entries(values).map(([k, v]) => [`--ds-${k}`, v])),
    "--ds-font": system.typography?.css ?? "inherit",
    background: values[bgKey] ?? "#ffffff",
    color: values[fgKey] ?? "#111111",
    fontFamily: "var(--ds-font)",
  } as CSSProperties;

  const modified = Object.keys(overrides).length > 0;

  async function copy(text: string, id: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1500);
    } catch {
      /* clipboard bisa diblokir browser; abaikan */
    }
  }

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      {heading ? (
        <SectionHeading heading={heading} />
      ) : (
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-muted">
            Design System{system.version ? ` · ${system.version}` : ""}
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tighter text-foreground md:text-6xl">{system.title}</h2>
          <p className="text-lg leading-relaxed text-muted">{system.description}</p>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-3">
          <div className="flex gap-2">
            <Chip active={tab === "tokens"} onClick={() => setTab("tokens")}>Tokens</Chip>
            <Chip active={tab === "components"} onClick={() => setTab("components")}>Components</Chip>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {hasDark && (
              <>
                <Chip active={theme === "light"} onClick={() => setTheme("light")}>Light</Chip>
                <Chip active={theme === "dark"} onClick={() => setTheme("dark")}>Dark</Chip>
              </>
            )}
            {tab === "components" &&
              WIDTHS.map((w) => (
                <Chip key={w.label} active={width === w.value} onClick={() => setWidth(w.value)}>
                  {w.label}
                </Chip>
              ))}
            {modified && (
              <button
                type="button"
                onClick={() => setOverrides({})}
                className="rounded-full border border-accent-orange px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-orange transition-colors hover:bg-accent-orange hover:text-white"
              >
                Reset tokens
              </button>
            )}
          </div>
        </div>

        {/* Stage: semua isi di dalam sini memakai token design system */}
        <div style={stageStyle} className="p-6 md:p-10">
          {tab === "tokens" && (
            <div className="space-y-14">
              {/* ---- COLORS ---- */}
              <div>
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider">Color tokens</h3>
                  <span className="font-mono text-[11px] opacity-60">Click a swatch to edit it live</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {system.colors.map((c) => {
                    const value = values[c.key];
                    const text = bestTextOn(value, [values[fgKey] ?? "#111111", "#ffffff"]);
                    const grade = gradeContrast(text.ratio);
                    const edited = overrides[`${theme}:${c.key}`] !== undefined;
                    return (
                      <div key={c.key} className="overflow-hidden rounded-xl border-2 border-[color:var(--ds-ink)]">
                        <label className="relative flex h-28 cursor-pointer items-end justify-between p-3" style={{ background: value, color: text.color }}>
                          <input
                            type="color"
                            value={value}
                            onChange={(e) => setOverrides((o) => ({ ...o, [`${theme}:${c.key}`]: e.target.value }))}
                            aria-label={`Edit ${c.name}`}
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                          />
                          <span className="text-3xl font-bold leading-none">Aa</span>
                          <span className="rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold" style={{ borderColor: text.color }}>
                            {grade} {text.ratio.toFixed(1)}:1
                          </span>
                        </label>
                        <div className="border-t-2 border-[color:var(--ds-ink)] p-3">
                          <p className="text-sm font-bold">{c.name}{edited ? " •" : ""}</p>
                          <p className="font-mono text-[11px] opacity-70">{value.toUpperCase()} · --ds-{c.key}</p>
                          <p className="mt-2 font-mono text-[10px] font-bold opacity-60">{c.role}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ---- TYPOGRAPHY ---- */}
              {system.typography && (
                <div>
                  <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider">Typography</h3>
                  <div className="rounded-xl border-2 border-[color:var(--ds-ink)] p-6">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-3xl font-bold">{system.typography.family}</span>
                      <div className="flex gap-2">
                        {system.typography.weights.map((w) => (
                          <span key={w.label} className="rounded border-2 border-[color:var(--ds-ink)] px-2 py-1 font-mono text-xs">{w.label}</span>
                        ))}
                      </div>
                    </div>
                    <input
                      value={sample}
                      onChange={(e) => setSample(e.target.value)}
                      aria-label="Preview text"
                      placeholder="Type to preview"
                      className="mb-6 w-full rounded-lg border-2 border-[color:var(--ds-ink)] bg-transparent px-4 py-3 font-mono text-sm outline-none"
                    />
                    {system.typography.styles.map((s) => (
                      <div key={s.name} className="border-t-2 border-[color:var(--ds-ink)] py-4">
                        <div className="mb-2 flex items-baseline justify-between font-mono text-[10px] uppercase opacity-60">
                          <span>{s.name}</span>
                          <span>{s.size}px / {s.weight}</span>
                        </div>
                        <p className="wrap-break-word" style={{ fontSize: s.size, fontWeight: s.weight, lineHeight: s.lineHeight ?? 1.2 }}>
                          {sample || "\u00A0"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "components" && (
            <div
              className="mx-auto space-y-8 transition-[max-width] duration-300"
              style={{ maxWidth: width ?? undefined }}
            >
              {system.components.map((comp) => (
                <article key={comp.name} className="rounded-xl border-2 border-[color:var(--ds-ink)] p-6">
                  <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold">{comp.name}</h4>
                      {comp.description && <p className="mt-1 max-w-xl text-sm opacity-70">{comp.description}</p>}
                    </div>
                    {comp.code && (
                      <button
                        type="button"
                        onClick={() => setOpenCode((o) => ({ ...o, [comp.name]: !o[comp.name] }))}
                        className="rounded-lg border-2 border-[color:var(--ds-ink)] px-3 py-1 font-mono text-xs font-bold"
                      >
                        {openCode[comp.name] ? "Hide code" : "View code"}
                      </button>
                    )}
                  </header>

                  <div className="flex flex-wrap justify-center gap-5">
                    {comp.variants.map((v) => {
                      const layout = comp.layout ?? "grid";
                      return (
                        <figure
                          key={v.label}
                          className={`flex max-w-full flex-col overflow-hidden rounded-lg border border-dashed ${TILE_WIDTH[layout]}`}
                          style={{ borderColor: TILE_BORDER, background: TILE_BG }}
                        >
                          <div className={`flex flex-1 justify-center p-5 ${layout === "cards" ? "items-start" : "items-center"}`}>
                            <div className={layout === "inline" ? "" : "w-full"}>{v.node}</div>
                          </div>
                          <figcaption
                            className="border-t border-dashed px-3 py-2 text-center font-mono text-[10px] uppercase"
                            style={{ borderColor: TILE_BORDER }}
                          >
                            <span className="opacity-60">{v.label}</span>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>

                  {comp.code && openCode[comp.name] && (
                    <div className="relative mt-6">
                      <pre
                        className="overflow-x-auto rounded-lg p-4 pr-24 font-mono text-xs leading-relaxed"
                        style={{ background: "var(--ds-ink)", color: "var(--ds-canvas)" }}
                      >
                        {comp.code}
                      </pre>
                      <button
                        type="button"
                        onClick={() => copy(comp.code ?? "", comp.name)}
                        className="absolute right-3 top-3 rounded border px-2 py-1 font-mono text-[10px] font-bold"
                        style={{ borderColor: "var(--ds-canvas)", color: "var(--ds-canvas)" }}
                      >
                        {copied === comp.name ? "Copied" : "Copy"}
                      </button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
