"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================================================
// CV: sumber isi tunggal (ID & EN). Edit teks di kamus ini saja.
// Nomor telepon TIDAK ada di kode. Ia hanya tampil jika variabel lingkungan
// NEXT_PUBLIC_CV_PHONE diisi (lihat CARA_PAKAI.md), sehingga halaman web publik
// tidak memuatnya, sedangkan PDF yang kamu unduh/cetak secara lokal memuatnya.
// ============================================================================
const PHONE = process.env.NEXT_PUBLIC_CV_PHONE;

type Entry = { title: string; org: string; period: string; points: string[]; note?: string };

type Dict = {
  role: string;
  roleSub: string;
  location: string;
  backBtn: string;
  pdfBtn: string;
  pdfHref: string;
  summaryTitle: string;
  summary: string;
  skillsTitle: string;
  skills: { label: string; text: string }[];
  languages: { label: string; text: string };
  expTitle: string;
  freelance: { title: string; org: string; period: string; clients: Entry[] };
  zeus: Entry;
  projectsTitle: string;
  projects: Entry[];
  eduTitle: string;
  edu: { name: string; period: string }[];
};

const content: Record<"id" | "en", Dict> = {
  id: {
    role: "Product & Motion Designer",
    roleSub: "UI/UX · Animasi Lottie · Video Explainer",
    location: "Malang, Indonesia · Terbuka untuk relokasi ke Jakarta",
    backBtn: "← Kembali ke Portofolio",
    pdfBtn: "Unduh PDF",
    pdfHref: "/cv-aditio-dwi-novanto-id.pdf",
    summaryTitle: "Ringkasan",
    summary:
      "Product & Motion Designer lulusan D4 Desain Komunikasi Visual. Sejak 2021 bekerja freelance langsung dengan klien internasional (termasuk di Jerman): animasi Lottie, video, ilustrasi, dan UI landing page, hingga front-end Next.js. Satu klien (Stockt) memperluas kontrak saya tiga kali, dari animasi Lottie ke redesain UI dan video onboarding. Terbiasa menjadikan AI kolaborator proses (riset referensi, bedah logika UX, draf layout) dengan keputusan akhir di tangan saya. Mencari peran in-house tempat saya bisa mengerjakan produk dari ide hingga rilis.",
    skillsTitle: "Keahlian",
    skills: [
      { label: "Desain Produk", text: "Figma, Design System, Prototyping, Riset Pengguna" },
      { label: "Motion & Ilustrasi", text: "After Effects, Lottie, Rive, Illustrator, Premiere Pro" },
      { label: "Front-End", text: "Next.js, Tailwind CSS, HTML/CSS" },
      { label: "Alur Kerja AI", text: "ChatGPT, Gemini, Qwen, Claude, Google Stitch: riset referensi, bedah logika UX, draf layout" },
    ],
    languages: { label: "Bahasa", text: "Indonesia (native) · Inggris (membaca, menulis, mendengarkan: baik · berbicara: berkembang)" },
    expTitle: "Pengalaman",
    freelance: {
      title: "Freelance Product & Motion Designer",
      org: "Mandiri via Upwork · bekerja langsung dengan klien, tanpa agensi",
      period: "Akhir 2021 – Sekarang",
      clients: [
        {
          title: "Bootsschule1",
          org: "Sekolah mengemudi kapal, Jerman · Motion Designer & Illustrator",
          period: "2026",
          points: [
            "Menganimasikan 7 header popup Lottie untuk aplikasi web belajar SIM kapal rekreasi, berdasarkan storyboard klien.",
            "Mengingatkan klien akan risiko berat file pada karakter penuh outline sebelum produksi; klien setuju mendesain ulang maskot agar ramah Lottie, dibangun ulang di Illustrator.",
            "Mengirim 7 file Lottie 43–332 KB (total 801 KB), 60 fps, latar transparan.",
          ],
        },
        {
          title: "VRIQ",
          org: "Pengembang aplikasi · Illustrator & Motion Designer",
          period: "Okt 2026",
          points: [
            "Menggambar vektor dan menganimasikan van pengantar sebagai animasi loading screen Lottie dalam dua state (123 KB dan 122 KB), sesuai brief dan referensi klien.",
          ],
        },
        {
          title: "Stockt",
          org: "Startup SaaS manajemen inventori · Lottie Animator → UI Designer → Video Designer",
          period: "Akhir 2021 – Pertengahan 2022",
          points: [
            "Dipilih lewat Upwork untuk animasi Lottie; klien lalu menawarkan redesain UI dan video onboarding: tiga kontrak berturut-turut.",
            "Mendesain UI landing page desktop dan mobile di Figma, dan membuat video onboarding (storyboard, ilustrasi, animasi, penyuntingan; naskah dan suara dibuat dengan AI).",
          ],
          note: "Dikerjakan sambil magang. Stockt telah berhenti beroperasi.",
        },
      ],
    },
    zeus: {
      title: "Junior Motion Designer & Lead Intern Mentor",
      org: "ZEUS ANIMATION · Studio Video Explainer",
      period: "2021 – 2022",
      points: [
        "Dipromosikan menjadi Lead Mentor untuk membimbing ~50 siswa SMK/mahasiswa dalam pipeline animasi 2D.",
        "Menyusun SOP komprehensif untuk pembuatan aset dan rigging, yang diadopsi studio untuk standarisasi workflow jangka panjang.",
      ],
    },
    projectsTitle: "Proyek Mandiri",
    projects: [
      {
        title: "GJLS Entertainment: Redesain Website (proyek konsep)",
        org: "Product Designer & Frontend Developer",
        period: "2026",
        points: [
          "Proyek konsep mandiri; proposal resmi sudah dikirim ke GJLS dan menunggu respons. Premisnya: mengubah persepsi nama yang dibaca “Gak Jelas” menjadi perusahaan yang bisa dipercaya brand, sebagai bahan pendukung tim AE saat approach brand.",
          "Mengaudit situs lama (4 temuan), merancang halaman Partnership & Media Kit, dan menyederhanakan navigasi.",
          "Membangun design system di Figma dan front-end Next.js/Tailwind; live di Vercel dalam 4 minggu.",
        ],
      },
      {
        title: "Situs portofolio ini",
        org: "Next.js · Tailwind CSS",
        period: "2026",
        points: [
          "Membangun situs dengan template studi kasus berbasis data (satu file per proyek); deploy pertama dalam 3 hari dengan alur kerja dibantu AI, lalu dirapikan.",
        ],
      },
    ],
    eduTitle: "Pendidikan",
    edu: [
      { name: "D4 Desain Komunikasi Visual · Universitas Brawijaya, Malang", period: "2018 – 2022" },
      { name: "SMKN 5 Malang · Animasi", period: "2015 – 2018" },
    ],
  },
  en: {
    role: "Product & Motion Designer",
    roleSub: "UI/UX · Lottie Animation · Explainer Video",
    location: "Malang, Indonesia · Open to relocating to Jakarta",
    backBtn: "← Back to Portfolio",
    pdfBtn: "Download PDF",
    pdfHref: "/cv-aditio-dwi-novanto-en.pdf",
    summaryTitle: "Summary",
    summary:
      "Product & Motion Designer with a D4 degree in Visual Communication Design. Freelancing directly with international clients since 2021 (including in Germany): Lottie animation, video, illustration and landing-page UI, through to Next.js front-end. One client (Stockt) extended my contract three times, from Lottie animation to a UI redesign and an onboarding video. Used to treating AI as a process collaborator (reference research, stress-testing UX logic, layout drafts) while keeping the final decisions. Looking for an in-house role where I can work on a product from idea to release.",
    skillsTitle: "Skills",
    skills: [
      { label: "Product Design", text: "Figma, Design Systems, Prototyping, User Research" },
      { label: "Motion & Illustration", text: "After Effects, Lottie, Rive, Illustrator, Premiere Pro" },
      { label: "Front-End", text: "Next.js, Tailwind CSS, HTML/CSS" },
      { label: "AI Workflow", text: "ChatGPT, Gemini, Qwen, Claude, Google Stitch: reference research, UX logic review, layout drafts" },
    ],
    languages: { label: "Languages", text: "Indonesian (native) · English (reading, writing, listening: good · speaking: developing)" },
    expTitle: "Experience",
    freelance: {
      title: "Freelance Product & Motion Designer",
      org: "Self-employed via Upwork · working directly with clients, no agency",
      period: "Late 2021 – Present",
      clients: [
        {
          title: "Bootsschule1",
          org: "Boat driving school, Germany · Motion Designer & Illustrator",
          period: "2026",
          points: [
            "Animated 7 Lottie popup headers for a web app that helps people study for the recreational boating license, working from the client's storyboards.",
            "Warned the client about file weight from an outline-heavy character before production; they agreed to redesign the mascot to be Lottie-friendly, rebuilt in Illustrator.",
            "Delivered 7 Lottie files of 43–332 KB (801 KB total), 60 fps, transparent background.",
          ],
        },
        {
          title: "VRIQ",
          org: "App developer · Illustrator & Motion Designer",
          period: "Oct 2026",
          points: [
            "Drew the vector artwork and animated a delivery van as a two-state Lottie loading-screen animation (123 KB and 122 KB), following the client's brief and references.",
          ],
        },
        {
          title: "Stockt",
          org: "Inventory-management SaaS startup · Lottie Animator → UI Designer → Video Designer",
          period: "Late 2021 – Mid 2022",
          points: [
            "Hired through Upwork for Lottie animation; the client then offered a UI redesign and an onboarding video: three consecutive contracts.",
            "Designed the desktop and mobile landing-page UI in Figma, and made the onboarding video (storyboard, illustration, animation, editing; script and voice-over generated with AI).",
          ],
          note: "Done while interning. Stockt has since stopped operating.",
        },
      ],
    },
    zeus: {
      title: "Junior Motion Designer & Lead Intern Mentor",
      org: "ZEUS ANIMATION · Explainer Video Studio",
      period: "2021 – 2022",
      points: [
        "Promoted to Lead Mentor to guide ~50 vocational/high school students in the 2D animation pipeline.",
        "Compiled comprehensive SOPs for asset creation and rigging, adopted by the studio for long-term workflow standardization.",
      ],
    },
    projectsTitle: "Self-Initiated Projects",
    projects: [
      {
        title: "GJLS Entertainment: Website Redesign (concept project)",
        org: "Product Designer & Frontend Developer",
        period: "2026",
        points: [
          "Self-initiated concept project; a formal proposal has been sent to GJLS and is awaiting a response. The premise: change how a name read as “Gak Jelas” (“unclear”) is perceived into a company brands can trust, as supporting material for the account team when approaching brands.",
          "Audited the old site (4 findings), designed a Partnership & Media Kit page, and simplified the navigation.",
          "Built the design system in Figma and the Next.js/Tailwind front-end; live on Vercel in 4 weeks.",
        ],
      },
      {
        title: "This portfolio site",
        org: "Next.js · Tailwind CSS",
        period: "2026",
        points: [
          "Built with a data-driven case-study template (one file per project); first deploy in 3 days with an AI-assisted workflow, then refined.",
        ],
      },
    ],
    eduTitle: "Education",
    edu: [
      { name: "D4 Visual Communication Design · Universitas Brawijaya, Malang", period: "2018 – 2022" },
      { name: "SMKN 5 Malang · Animation", period: "2015 – 2018" },
    ],
  },
};

function EntryBlock({ e }: { e: Entry }) {
  return (
    <div className="break-inside-avoid">
      <div className="mb-0.5 flex flex-col md:flex-row md:items-baseline md:justify-between print:flex-row print:items-baseline print:justify-between">
        <h3 className="text-[15px] font-semibold text-foreground print:text-[13.5px]">{e.title}</h3>
        <span className="font-mono text-xs text-[#888888]">{e.period}</span>
      </div>
      <p className="mb-1.5 text-sm text-[#555555] print:mb-1 print:text-[12px]">{e.org}</p>
      <ul className="ml-4 list-outside list-disc space-y-1 text-[14px] leading-relaxed text-[#444444] print:space-y-0.5 print:text-[12px] print:leading-snug">
        {e.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {e.note && <p className="mt-1.5 text-xs italic text-[#888888] print:mt-1 print:text-[11px]">{e.note}</p>}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 break-after-avoid text-xs font-bold print:mb-2 print:text-[10.5px] uppercase tracking-widest text-[#888888]">{children}</h2>;
}

const linkClass =
  "text-foreground underline decoration-[#D1D5DB] underline-offset-2 hover:decoration-foreground";

export default function CVPage() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-foreground antialiased selection:bg-foreground selection:text-white">
      {/* Sticky Action Bar */}
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] bg-[#FAFAFA]/90 px-6 py-4 backdrop-blur-md print:hidden">
        <Link href="/" className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[#666666] transition-colors hover:text-foreground">
          {t.backBtn}
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <div className="flex rounded-md bg-[#E5E5E5] p-1">
            {(["id", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded px-3 py-1.5 text-xs font-bold uppercase transition-all ${
                  lang === l ? "bg-white text-foreground shadow-sm" : "text-[#666666] hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {process.env.NODE_ENV !== "production" && (
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-md border border-[#D1D5DB] px-3 py-2 text-sm font-medium text-[#555555] transition-colors hover:bg-white"
            >
              Cetak (dev)
            </button>
          )}

          <a
            href={t.pdfHref}
            download
            rel="nofollow"
            className="flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#333333]"
          >
            {t.pdfBtn}
          </a>
        </div>
      </div>

      {/* Document */}
      <div className="flex justify-center px-4 py-12 md:px-8 print:m-0 print:p-0 print:py-0">
        <div className="w-full max-w-[210mm] bg-white p-10 shadow-sm md:p-16 print:px-10 print:py-2 print:shadow-none">
          {/* HEADER */}
          <header className="mb-8 print:mb-5">
            <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-4xl">Aditio Dwi Novanto</h1>
            <p className="text-base font-medium text-foreground md:text-lg">{t.role}</p>
            <p className="mb-4 text-sm text-[#666666] print:mb-2.5 print:text-[12px]">{t.roleSub}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-[#555555] print:gap-y-0.5 print:text-[11.5px]">
              <span>{t.location}</span>
              <span className="text-[#D1D5DB]">•</span>
              <a href="mailto:aditiodwin@gmail.com" className={linkClass}>aditiodwin@gmail.com</a>
              {PHONE && (
                <>
                  <span className="text-[#D1D5DB]">•</span>
                  <span>{PHONE}</span>
                </>
              )}
            </div>
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-[#555555] print:mt-0.5 print:gap-y-0.5 print:text-[11.5px]">
              <a href="https://aditio-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className={linkClass}>aditio-portfolio.vercel.app</a>
              <span className="text-[#D1D5DB]">•</span>
              <a href="https://www.linkedin.com/in/aditio-dwi-novanto-1660901b8/" target="_blank" rel="noopener noreferrer" className={linkClass}>linkedin.com/in/aditio-dwi-novanto-1660901b8</a>
            </div>
            <div className="mt-1.5 text-sm text-[#555555] print:mt-0.5 print:text-[11.5px]">
              <a href="https://www.upwork.com/freelancers/~017c511ecf47e233b3" target="_blank" rel="noopener noreferrer" className={linkClass}>upwork.com/freelancers/~017c511ecf47e233b3</a>
            </div>
          </header>

          {/* SUMMARY */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>{t.summaryTitle}</SectionTitle>
            <p className="text-[15px] leading-relaxed text-[#333333] print:text-[12.5px] print:leading-snug">{t.summary}</p>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>{t.expTitle}</SectionTitle>
            <div className="space-y-6 print:space-y-3.5">
              <div>
                <div className="mb-0.5 flex flex-col md:flex-row md:items-baseline md:justify-between print:flex-row print:items-baseline print:justify-between">
                  <h3 className="text-[15px] font-semibold text-foreground print:text-[13.5px]">{t.freelance.title}</h3>
                  <span className="font-mono text-xs text-[#888888]">{t.freelance.period}</span>
                </div>
                <p className="text-sm text-[#555555] print:text-[12px]">{t.freelance.org}</p>
                <div className="mt-4 space-y-5 border-l-2 border-[#E5E5E5] pl-4 print:mt-2.5 print:space-y-3">
                  {t.freelance.clients.map((c) => (
                    <EntryBlock key={c.title} e={c} />
                  ))}
                </div>
              </div>
              <EntryBlock e={t.zeus} />
            </div>
          </section>

          {/* SELF-INITIATED PROJECTS */}
          <section className="mb-7 print:mb-4">
            <SectionTitle>{t.projectsTitle}</SectionTitle>
            <div className="space-y-5 print:space-y-3">
              {t.projects.map((p) => (
                <EntryBlock key={p.title} e={p} />
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section className="mb-7 break-inside-avoid print:mb-4">
            <SectionTitle>{t.skillsTitle}</SectionTitle>
            <div className="space-y-2 text-sm print:space-y-1 print:text-[12px]">
              {[...t.skills, t.languages].map((s) => (
                <div key={s.label} className="flex">
                  <span className="w-36 shrink-0 font-semibold text-foreground">{s.label}</span>
                  <span className="text-[#444444]">{s.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="break-inside-avoid">
            <SectionTitle>{t.eduTitle}</SectionTitle>
            <div className="space-y-1.5 text-sm print:space-y-1 print:text-[12px]">
              {t.edu.map((e) => (
                <div key={e.name} className="flex flex-col md:flex-row md:items-baseline md:justify-between print:flex-row print:items-baseline print:justify-between">
                  <span className="font-semibold text-foreground">{e.name}</span>
                  <span className="font-mono text-xs text-[#888888]">{e.period}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden { display: none !important; }
          a { text-decoration: none !important; color: black !important; }
          h1, h2, h3, span, p, li { color: black !important; }
          .text-\\[\\#666666\\], .text-\\[\\#555555\\], .text-\\[\\#444444\\], .text-\\[\\#888888\\] { color: #333333 !important; }
        }
      `}</style>
    </main>
  );
}
