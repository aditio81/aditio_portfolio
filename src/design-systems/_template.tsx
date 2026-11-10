import type { DesignSystem } from "./types";

// ============================================================================
// TEMPLATE DESIGN SYSTEM BARU
// 1. Salin file ini jadi folder: src/design-systems/nama-proyek/index.tsx
//    (taruh komponen kodenya di components.tsx di folder yang sama)
// 2. Komponen WAJIB memakai warna lewat CSS variable: bg-[color:var(--ds-primary)]
//    agar tokennya bisa diubah live. Gunakan ukuran/layout fleksibel (flex-wrap, grid)
//    agar pratinjau Tablet/Mobile berfungsi.
// 3. Daftarkan di src/design-systems/index.ts, lalu panggil dari proyek:
//    { type: "designSystem", id: "nama-proyek" }
// ============================================================================
export const templateDesignSystem: DesignSystem = {
  title: "Nama Design System",
  description: "Satu-dua kalimat tentang sistem ini.",
  version: "v1.0",
  colors: [
    // key "canvas" = latar kanvas, "ink" = warna teks (default). Tambahkan dark: "#..." untuk tema gelap.
    { key: "canvas", name: "Canvas", hex: "#FFFFFF", role: "BACKGROUND" },
    { key: "ink", name: "Ink", hex: "#111111", role: "TEXT" },
    { key: "primary", name: "Primary", hex: "#2563EB", role: "PRIMARY ACTION" },
  ],
  typography: {
    family: "Inter",
    css: "'Inter', sans-serif",
    weights: [{ label: "Bold 700", value: 700 }],
    styles: [{ name: "Body", size: 16, weight: 400 }],
  },
  components: [
    {
      name: "Button",
      description: "Aksi utama.",
      layout: "grid", // "inline" (badge/chip/ikon) | "grid" (tombol/input, default) | "cards" (kartu/panel)
      variants: [
        {
          label: "Default",
          node: (
            <button className="rounded-lg bg-[color:var(--ds-primary)] px-5 py-2 font-bold text-white">Label</button>
          ),
        },
      ],
    },
  ],
};
