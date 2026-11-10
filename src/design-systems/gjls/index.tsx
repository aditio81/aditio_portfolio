import type { DesignSystem } from "../types";
import { GjlsButton, SectionBadge, PillBadge, CircleBadge, FilmCard, CrewCard, MerchCard } from "./components";

// ⚠️ NILAI WARNA DIREKONSILIASI: versi lama punya dua set nilai yang berbeda
// (tab Tokens vs komponen). Di sini dipakai nilai yang benar-benar dipakai komponen.
// Mohon cek ulang terhadap file Figma-mu dan ubah di sini jika perlu.
export const gjlsDesignSystem: DesignSystem = {
  title: "Figma Atoms & Molecules",
  version: "v2.4",
  description:
    "Documentation of the foundational tokens, typography scale, and modular tactile components built for the GJLS Entertainment digital ecosystem. Everything below is live code: edit a token and the components follow.",

  colors: [
    { key: "canvas", name: "Soft Canvas", hex: "#FCF8FB", role: "CANVAS GROUND" },
    { key: "ink", name: "Deep Charcoal", hex: "#1B1B1D", role: "3PX-4PX STROKES" },
    { key: "pink", name: "Electric Pink", hex: "#FD5179", role: "PRIMARY PUNCH" },
    { key: "teal", name: "Indo Studio Teal", hex: "#4A7C8C", role: "SECONDARY FOCUS" },
    { key: "mustard", name: "Mustard Yellow", hex: "#FFDF9B", role: "CERTIFICATE CALLOUT" },
    { key: "red", name: "Checkout Red", hex: "#C41E3A", role: "CHECKOUT ACTION" },
    { key: "white", name: "Paper White", hex: "#FFFFFF", role: "CARD SURFACE" },
  ],

  typography: {
    family: "Space Grotesk",
    css: "'Space Grotesk', sans-serif",
    weights: [
      { label: "Bold 700", value: 700 },
      { label: "Medium 500", value: 500 },
    ],
    styles: [
      { name: "Display", size: 56, weight: 700, lineHeight: 1.05 },
      { name: "Headline 1", size: 36, weight: 700, lineHeight: 1.15 },
      { name: "Body", size: 16, weight: 500, lineHeight: 1.5 },
    ],
    sample: "Komedi yang tertata rapi",
  },

  components: [
    {
      name: "Neo-Brutalist Buttons",
      description: "Tombol dengan stroke tebal dan hard shadow. Hover/klik menggeser tombol ke arah bayangannya.",
      variants: [
        { label: "Primary", node: <GjlsButton tone="pink">▶ TONTON SEKARANG</GjlsButton> },
        { label: "Secondary", node: <GjlsButton tone="teal">↓ PODCAST AUDIO</GjlsButton> },
        { label: "Highlight", node: <GjlsButton tone="mustard">🎟 BELI TIKET SHOW</GjlsButton> },
        { label: "Neutral", node: <GjlsButton tone="white">⊘ SIMULATED PRESS</GjlsButton> },
        { label: "Pressed (forced)", node: <GjlsButton tone="pink" pressed>▶ TONTON SEKARANG</GjlsButton> },
      ],
      code: `<button className="w-full rounded-lg border-2 border-[color:var(--ds-ink)] bg-[color:var(--ds-pink)] px-6 py-3 font-bold text-white shadow-[4px_4px_0_0_var(--ds-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--ds-ink)]">
  ▶ TONTON SEKARANG
</button>`,
    },
    {
      name: "Badges",
      layout: "inline",
      description: "Tiga pola badge untuk header section, label kartu, dan dekorasi.",
      variants: [
        { label: "Section header (large)", node: <SectionBadge>KATALOG KONTEN GJLS</SectionBadge> },
        { label: "Card label (medium)", node: <PillBadge>FILM PENDEK</PillBadge> },
        { label: "Accent / decorative", node: <CircleBadge /> },
      ],
    },
    {
      name: "Cards",
      layout: "cards",
      description: "Tiga pola kartu inti: film, kru, dan merchandise.",
      variants: [
        { label: "Film short", node: <FilmCard /> },
        { label: "Crew", node: <CrewCard /> },
        { label: "Merchandise", node: <MerchCard /> },
      ],
    },
  ],
};
