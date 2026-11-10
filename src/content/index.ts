import type { CaseStudy } from "./types";
import { gjls } from "./projects/gjls";
import { vriq } from "./projects/vriq";
import { semvar } from "./projects/semvar";
import { pitchaero } from "./projects/pitchaero";
import { stockt } from "./projects/stockt";
import { patternsDemo } from "./projects/patterns-demo";

// Urutan di array ini = urutan tampil di /work dan tombol Prev/Next.
// Menambah proyek: buat 1 file di ./projects, lalu tambah 1 import + 1 baris di sini.
// Proyek demo pola showcase: hanya muncul saat `npm run dev`, tidak ikut build produksi.
const devOnly: CaseStudy[] = process.env.NODE_ENV === "development" ? [patternsDemo] : [];

export const caseStudies: CaseStudy[] = [gjls, vriq, semvar, pitchaero, stockt, ...devOnly];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
