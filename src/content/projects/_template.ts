import type { CaseStudy } from "../types";

// ============================================================================
// TEMPLATE PROYEK BARU
// 1. Salin file ini, ganti namanya (contoh: nama-proyek.ts)
// 2. Isi field di bawah. Hapus bagian opsional yang tidak relevan.
// 3. Daftarkan di src/content/index.ts (1 import + 1 baris di array)
// 4. Taruh gambar/video/lottie di folder /public
// ============================================================================
export const template: CaseStudy = {
  slug: "nama-proyek",
  title: "Judul Proyek",
  client: "Nama Klien (opsional)",
  category: "uiux",              // "uiux" | "motion" | "video"
  startingPoint: "from-scratch", // "from-scratch" | "redesign" | "maintenance" (opsional)
  domain: "E-commerce",          // opsional

  role: "Product Designer",
  year: "2026",
  duration: "2 Months",          // opsional
  tools: ["Figma"],
  summary: "Satu kalimat: apa proyeknya dan apa kontribusimu.",
  cover: "/images/case-studies/nama-proyek-cover.png", // tampil di hero untuk UI/UX

  card: {
    description: "Deskripsi singkat untuk kartu di halaman /work.",
    image: "/images/projects/nama-proyek-thumb.png",
  },

  // Cerita: isi hanya yang relevan. Untuk Lottie/Explainer cukup 1-2 bagian.
  story: {
    startingPoint: { body: "Kondisi sebelum kamu masuk." },
    goal: { body: "Apa yang ingin dicapai." },
    approach: { body: "Apa yang kamu lakukan dan keputusan pentingnya.", points: ["Keputusan 1", "Keputusan 2"] },
  },

  // ==========================================================================
  // KARYA: pilih pola sesuai APA YANG INGIN DIBUKTIKAN proyek ini.
  // Boleh dipakai beberapa pola sekaligus. Contoh lengkap: proyek demo (npm run dev).
  //
  // POLA                  | KAPAN DIPAKAI                    | YANG HARUS DISIAPKAN
  // mockups (stacked)     | situs marketing, landing page    | 2-5 gambar layar penuh
  // mockups (device-row)  | layar aplikasi mobile            | 2-4 gambar layar mobile
  // flow                  | checkout, onboarding, alur app   | 2-6 gambar berurutan + judul tiap langkah
  // beforeAfter           | redesign / perawatan             | 2 gambar BERUKURAN SAMA (lama & baru)
  // spotlight             | dashboard, layar padat           | 1 gambar + 2-6 catatan (judul, alasan, posisi x/y %)
  // prototype             | proyek dengan prototipe Figma    | link prototipe publik (+ gambar pratinjau opsional)
  // designSystem          | proyek yang punya DS             | folder di src/design-systems
  // motionPlayer          | animasi Lottie dgn 1+ state      | file Lottie JSON per state (+ nama, loop atau sekali)
  // videoPlayer           | explainer / video promo          | link YouTube (Unlisted, bukan Private) + poster + chapter (waktu & judul)
  // credits               | proyek tim / dibantu AI          | daftar tugas + pemiliknya (aku, klien, AI, lainnya)
  // motionSet             | set animasi mandiri (7 popup)    | file Lottie per animasi + pemicu, mood, storyboard (spek dibaca otomatis)
  // motionSpec            | spec & handoff animasi           | durasi, fps, artboard, ukuran file (ukur dari file asli)
  // timeline              | tunjukkan fase & durasi kerja    | 3-5 fase: nama + lama (+ weeks untuk bilah)
  // sitemap               | redesign / proyek multi-halaman  | daftar halaman lama & baru
  // aiWorkflow            | tunjukkan cara kerja dgn AI      | 2-4 tahap: apa dikerjakan AI, apa kuputuskan (+ 1 contoh nyata)
  // motion / video        | Lottie / explainer               | file lottie/mp4 atau ID YouTube
  //
  // Tips: 3 layar yang kuat + alasan keputusan lebih meyakinkan daripada 8 layar tanpa penjelasan.
  // ==========================================================================
  showcase: [
    // { type: "mockups", heading: { title: "Final Screens" }, data: { layout: "stacked", pages: [{ title: "", image: "", label: "Homepage" }] } },
    // { type: "flow", heading: { title: "Checkout Flow" }, data: { steps: [{ title: "Cart", image: "" }, { title: "Pay", image: "" }] } },
    // { type: "beforeAfter", data: { before: { image: "" }, after: { image: "" }, caption: "Apa yang berubah dan kenapa" } },
    // { type: "spotlight", data: { image: "", notes: [{ title: "Keputusan", body: "Alasannya", x: 30, y: 40, zoom: 2 }] } },
    // { type: "prototype", data: { src: "https://www.figma.com/proto/...", poster: "" } },
    // { type: "designSystem", id: "nama-proyek" }, // daftarkan dulu di src/design-systems
    // { type: "motionPlayer", data: { states: [{ name: "intro", src: "/lotties/intro.json" }, { name: "loop", src: "/lotties/loop.json", loop: true }] } },
    // { type: "videoPlayer", data: { youtubeId: "XXXXXXXXXXX", poster: "/images/xxx.png", chapters: [{ time: "0:00", title: "Hook", note: "Kenapa dibuka begini" }] } },
    // { type: "credits", data: { rows: [{ task: "Script", owner: "me" }, { task: "Voice-over", owner: "ai" }] } },
    // { type: "motionSet", data: { items: [{ id: "a", title: "Judul", src: "/lotties/proyek/a.json", trigger: "Kapan muncul" }] } },
    // { type: "motionSpec", data: { files: [{ name: "intro.json", format: "Lottie JSON", duration: "2 s", fps: 60, size: "120 KB" }] } },
    // { type: "timeline", data: { total: "3 months", phases: [{ name: "Audit", duration: "2 weeks", weeks: 2 }] } },
    // { type: "sitemap", data: { before: { items: [{ label: "Home" }] }, after: { items: [{ label: "Home" }, { label: "Partnership", status: "new" }] } } },
    // { type: "aiWorkflow", data: { stages: [{ stage: "UX reasoning", tools: ["GPT"], aiDid: "...", iDecided: "..." }] } },
    // { type: "motion", data: { type: "hero", format: "video", videoSrc: "/videos/xxx.mp4" } },
    // { type: "video", youtubeId: "XXXXXXXXXXX", title: "Judul video" },
  ],

  // Link eksternal (opsional): tampil di akhir halaman
  // links: [{ label: "View Figma file", href: "https://..." }, { label: "Live site", href: "https://...", style: "secondary" }],

  // Outcome: isi HANYA yang benar-benar ada. Boleh dihapus seluruhnya.
  outcome: {
    // highlights: [{ label: "Ukuran file", value: "48 KB" }, { label: "Status", value: "Live" }],
    // testimonial: { quote: "...", author: "Nama", role: "Jabatan" },
    // reflection: "Jika dikerjakan lagi, saya akan ...",
  },
};
