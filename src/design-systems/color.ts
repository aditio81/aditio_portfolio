// Perhitungan kontras WCAG 2.x (dipakai untuk badge kontras otomatis di token warna)

export function normalizeHex(input: string): string {
  let h = input.trim().replace(/^#/, "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return /^[0-9a-fA-F]{6}$/.test(h) ? `#${h.toLowerCase()}` : "#000000";
}

function channel(v: number): number {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function luminance(hex: string): number {
  const h = normalizeHex(hex).slice(1);
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

export type ContrastGrade = "AAA" | "AA" | "AA Large" | "Fail";

export function gradeContrast(ratio: number): ContrastGrade {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return "AA Large";
  return "Fail";
}

// Pilih warna teks (dari kandidat) yang paling terbaca di atas background
export function bestTextOn(bg: string, candidates: string[]): { color: string; ratio: number } {
  return candidates
    .map((color) => ({ color: normalizeHex(color), ratio: contrastRatio(bg, color) }))
    .reduce((best, c) => (c.ratio > best.ratio ? c : best));
}
