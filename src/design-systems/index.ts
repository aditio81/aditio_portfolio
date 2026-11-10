import type { DesignSystem } from "./types";
import { gjlsDesignSystem } from "./gjls";

// Daftarkan design system baru di sini (1 import + 1 baris).
// Proyek memanggilnya lewat: { type: "designSystem", id: "gjls" }
export const designSystems = {
  gjls: gjlsDesignSystem,
} satisfies Record<string, DesignSystem>;

export type DesignSystemId = keyof typeof designSystems;
