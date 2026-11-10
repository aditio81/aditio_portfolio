import type { CaseStudy } from "../types";

// PROYEK DEMO: hanya muncul saat `npm run dev` (lihat src/content/index.ts), tidak ikut build produksi.
// Isinya memakai gambar GJLS dan TEKS CONTOH untuk memperlihatkan kelima pola showcase.
// Salin potongan yang kamu butuhkan ke proyek aslimu, lalu ganti teks dan gambarnya.
export const patternsDemo: CaseStudy = {
  slug: "patterns-demo",
  title: "Showcase Patterns (Demo)",
  category: "uiux",
  startingPoint: "redesign",
  domain: "Demo",

  role: "Product Designer",
  year: "2026",
  tools: ["Figma"],
  summary: "Halaman demo untuk mencoba pola showcase: Walkthrough, Flow, Before/After, Spotlight, dan Prototype. Hanya tampil saat development.",
  cover: "/images/case-studies/cover2.png",

  card: {
    description: "Demo pola showcase (hanya tampil saat development).",
    image: "/images/case-studies/cover1.png",
    imagePosition: "top",
    imageScale: 0.5,
  },

  story: {
    goal: { body: "Mencoba semua pola showcase dengan gambar yang sudah ada. Semua teks catatan di bawah adalah contoh, bukan isi proyek sungguhan." },
  },

  showcase: [
    {
      type: "mockups",
      heading: { eyebrow: "Pola 1 · Walkthrough", title: "Layar akhir berurutan", description: "Cocok untuk situs marketing dan landing page. Butuh: 2-5 gambar layar penuh." },
      data: {
        layout: "stacked",
        pages: [
          { title: "Homepage", description: "Contoh deskripsi layar.", image: "/images/case-studies/09.png", label: "Homepage" },
          { title: "Partnership", image: "/images/case-studies/06.png", label: "Inner Page" },
        ],
      },
    },
    {
      type: "flow",
      heading: { eyebrow: "Pola 2 · Flow", title: "Alur langkah demi langkah", description: "Cocok untuk checkout, onboarding, atau alur aplikasi. Butuh: 2-6 gambar berurutan + judul tiap langkah." },
      data: {
        steps: [
          { title: "Langkah 1: Temukan", description: "Contoh: pengguna menemukan produk.", image: "/images/case-studies/09.png" },
          { title: "Langkah 2: Pilih", description: "Contoh: pengguna memilih opsi.", image: "/images/case-studies/06.png" },
          { title: "Langkah 3: Selesai", description: "Contoh: pengguna menyelesaikan aksi.", image: "/images/case-studies/05.png" },
        ],
      },
    },
    {
      type: "beforeAfter",
      heading: { eyebrow: "Pola 3 · Before / After", title: "Lama vs baru", description: "Wajib untuk proyek redesign dan perawatan. Butuh: 2 gambar BERUKURAN SAMA." },
      data: {
        before: { image: "/images/case-studies/06.png" },
        after: { image: "/images/case-studies/09.png" },
        caption: "Demo: dua gambar ini berbeda ukuran hanya untuk contoh. Pada proyek asli, pakai layar yang sama sebelum dan sesudah.",
      },
    },
    {
      type: "spotlight",
      heading: { eyebrow: "Pola 4 · Spotlight", title: "Satu layar, banyak keputusan", description: "Cocok untuk dashboard atau layar padat. Butuh: 1 gambar + 2-6 catatan (judul, alasan, posisi x/y dalam persen)." },
      data: {
        image: "/images/case-studies/09.png",
        notes: [
          { title: "Contoh keputusan 1", body: "Tulis apa yang kamu putuskan dan kenapa.", x: 20, y: 25 },
          { title: "Contoh keputusan 2 (dengan zoom)", body: "Catatan dengan zoom memperbesar area ini tanpa gambar tambahan.", x: 70, y: 35, zoom: 2 },
          { title: "Contoh keputusan 3", body: "Tulis alasan di balik pilihan ini.", x: 50, y: 70 },
        ],
      },
    },
    {
      type: "prototype",
      heading: { eyebrow: "Pola 5 · Prototype", title: "Coba langsung", description: "Butuh: link prototipe Figma yang publik. Gambar pratinjau opsional." },
      data: {
        src: "https://www.figma.com/proto/eFQk4QzNOsLDAfOKfhzr2D/GJLS?page-id=55%3A295%3Fnode-id%3D165-2158%3Fviewport%3D137%2C150%2C0.11&t=KvXUT0lIBnseQqeR-1&scaling=min-zoom&content-scaling=fixed&node-id=165-2158",
        poster: "/images/case-studies/09.png",
        note: "Prototipe dimuat hanya saat tombol diklik.",
      },
    },
  ],
};
