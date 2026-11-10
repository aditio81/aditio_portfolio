import type { ReactNode } from "react";

// ============================================================================
// SKEMA DESIGN SYSTEM INTERAKTIF
// Token = data. Komponen = kode asli yang membaca token lewat CSS variable
// (var(--ds-<key>)), sehingga mengganti token langsung mengubah komponen.
// ============================================================================

export interface DSColor {
  key: string;   // dipakai sebagai CSS variable: key "pink" -> var(--ds-pink)
  name: string;
  hex: string;   // nilai tema terang (atau satu-satunya tema)
  dark?: string; // opsional: nilai tema gelap. Jika ada, tombol tema muncul.
  role: string;
}

export interface DSTypeStyle {
  name: string;
  size: number;  // px
  weight: number;
  lineHeight?: number;
}

export interface DSTypography {
  family: string; // nama untuk ditampilkan
  css: string;    // font-family CSS, contoh: "'Space Grotesk', sans-serif"
  weights: { label: string; value: number }[];
  styles: DSTypeStyle[];
  sample?: string; // teks awal pada pratinjau yang bisa diedit
}

export interface DSVariant {
  label: string;     // contoh: "Default", "Pressed", "Disabled"
  node: ReactNode;   // elemen React (BUKAN fungsi): <Button tone="pink" />
}

// Lebar ubin untuk varian satu komponen:
// "inline" = ubin mengikuti ukuran isi (badge, chip, tag, ikon)
// "grid"   = ubin lebar tetap sedang, default (tombol, input, toggle)
// "cards"  = ubin lebih lebar, isi rata atas (kartu, panel, item list)
export type DSLayout = "inline" | "grid" | "cards";

export interface DSComponent {
  name: string;
  description?: string;
  layout?: DSLayout;
  variants: DSVariant[];
  code?: string;     // opsional: potongan kode untuk tombol "View code"
}

export interface DesignSystem {
  title: string;
  description: string;
  version?: string;
  // Warna latar & teks kanvas pameran, mengacu ke key di colors. Default: "canvas" dan "ink".
  stage?: { background: string; text: string };
  colors: DSColor[];
  typography?: DSTypography;
  components: DSComponent[];
}
