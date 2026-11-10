import type { MockupData } from "@/components/case-study/UICaseStudyMockups";
import type { MotionPreviewData } from "@/components/case-study/MotionCaseStudyPreview";
import type { DesignSystemId } from "@/design-systems";
import type { FlowData } from "@/components/case-study/FlowBlock";
import type { BeforeAfterData } from "@/components/case-study/BeforeAfterBlock";
import type { SpotlightData } from "@/components/case-study/SpotlightBlock";
import type { PrototypeData } from "@/components/case-study/PrototypeBlock";
import type { AIWorkflowData } from "@/components/case-study/AIWorkflowBlock";
import type { SitemapData } from "@/components/case-study/SitemapBlock";
import type { TimelineData } from "@/components/case-study/TimelineBlock";

// ============================================================================
// SKEMA SATU-UNTUK-SEMUA CASE STUDY
// Semua proyek (UI/UX, Lottie, Explainer) memakai bentuk data yang SAMA.
// Yang membedakan hanya isi "showcase" (bagian karya).
// ============================================================================

// Kategori tetap bernama "motion" & "video" agar halaman /work tidak berubah.
export type Category = "uiux" | "motion" | "video";

export const CATEGORY_LABEL: Record<Category, string> = {
  uiux: "UI/UX",
  motion: "Lottie Animation",
  video: "Explainer Video",
};

// Titik awal proyek (opsional, tampil sebagai tag)
export type StartingPoint = "from-scratch" | "redesign" | "maintenance";

export const STARTING_POINT_LABEL: Record<StartingPoint, string> = {
  "from-scratch": "From Scratch",
  redesign: "Redesign",
  maintenance: "Ongoing Maintenance",
};

// Bagian cerita. Semua opsional: isi hanya yang relevan untuk proyekmu.
export type StoryKey = "startingPoint" | "goal" | "challenge" | "approach";

export const STORY_ORDER: StoryKey[] = ["startingPoint", "goal", "challenge", "approach"];

export const STORY_LABEL: Record<StoryKey, string> = {
  startingPoint: "The Starting Point",
  goal: "The Goal",
  challenge: "The Challenge",
  approach: "The Approach",
};

export interface StorySection {
  title?: string;     // judul kecil, opsional
  body: string;       // paragraf utama
  points?: string[];  // poin-poin, opsional
}

// Header section opsional untuk setiap blok. Kosong = tanpa header.
export interface Heading {
  eyebrow?: string;
  title?: string;
  description?: string;
}

// Link eksternal proyek (Figma, live site, prototype, LottieFiles, dst.)
export interface CaseLink {
  label: string;
  href: string;
  style?: "primary" | "secondary";
}

// Bagian "Karya": satu proyek boleh memakai beberapa blok, urut sesuai array.
export type ShowcaseBlock =
  | { type: "mockups"; data: MockupData; heading?: Heading }  // walkthrough layar akhir (stacked / device-row)       // galeri halaman/layar (UI/UX)
  | { type: "flow"; data: FlowData; heading?: Heading }               // alur berurutan (checkout, onboarding)
  | { type: "beforeAfter"; data: BeforeAfterData; heading?: Heading } // perbandingan lama vs baru
  | { type: "spotlight"; data: SpotlightData; heading?: Heading }     // satu layar + catatan keputusan bernomor
  | { type: "prototype"; data: PrototypeData; heading?: Heading }     // prototipe Figma interaktif
  | { type: "timeline"; data: TimelineData; heading?: Heading }       // fase proses & durasi
  | { type: "sitemap"; data: SitemapData; heading?: Heading }         // struktur situs lama vs baru
  | { type: "aiWorkflow"; data: AIWorkflowData; heading?: Heading }   // pembagian peran AI vs kamu (How I used AI)
  | { type: "motion"; data: MotionPreviewData; heading?: Heading }   // Lottie / video animasi
  | { type: "video"; youtubeId: string; title?: string; heading?: Heading } // YouTube (explainer)
  | { type: "designSystem"; id: DesignSystemId; heading?: Heading };  // design system interaktif (lihat src/design-systems)

// Outcome: isi apa saja yang kamu punya. Semua opsional, JANGAN mengarang angka.
export interface Outcome {
  highlights?: { label: string; value: string }[]; // spesifikasi / status / metrik jika ada
  testimonial?: { quote: string; author: string; role?: string };
  reflection?: string; // pelajaran: apa yang akan diubah jika dikerjakan lagi
}

export interface CaseStudy {
  // --- Identitas ---
  slug: string;              // dipakai di URL: /work/<slug>
  title: string;
  client?: string;
  category: Category;
  startingPoint?: StartingPoint;
  domain?: string;           // contoh: "E-commerce", "Dashboard", "Entertainment"

  // --- Ringkasan ---
  role: string;
  year: string;
  duration?: string;
  tools: string[];
  summary: string;           // satu kalimat di hero
  disclosure?: string;       // catatan transparansi di hero (proyek konsep, NDA, status, dll.)
  cover?: string;            // gambar besar di hero (hanya ditampilkan untuk UI/UX)

  // --- Kartu di halaman /work & homepage ---
  card: {
    description: string;
    teaser?: string;
    image: string;
    staticImage?: string;
    imagePosition?: string;
    imageScale?: number;
  };

  // --- Isi halaman ---
  story?: Partial<Record<StoryKey, StorySection>>;
  showcase: ShowcaseBlock[];
  outcome?: Outcome;
  links?: CaseLink[]; // tampil di akhir halaman
}
