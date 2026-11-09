"use client";

import { useState } from "react";
import Link from "next/link";

// === KAMUS BAHASA (ID & EN) ===
const content = {
  id: {
    role: "Product & UI/UX Designer · Multidisciplinary",
    summaryTitle: "Professional Summary",
    summaryText: "Product & UI/UX Designer dengan fondasi kuat di Motion Graphics dan pemahaman teknis Front-End (Next.js, Tailwind CSS). Berpengalaman menerjemahkan narasi brand yang kompleks menjadi produk digital yang terstruktur, user-centered, dan siap produksi. Terbiasa dipercaya klien untuk memperluas cakupan proyek dari aset motion menjadi desain antarmuka penuh (UI/UX) karena kemampuan membangun Design System yang kohesif. Kini mencari peran in-house untuk berfokus pada siklus hidup produk jangka panjang, iterasi berbasis data, dan kolaborasi lintas fungsi yang terstruktur.",
    compTitle: "Core Competencies",
    comp1Title: "Product & UX:",
    comp1Text: "User Research, User Flow, Wireframing, Prototyping, Usability Testing, Information Architecture",
    comp2Title: "UI & Visual:",
    comp2Text: "Design Systems, Responsive Design, Typography, Color Theory, Figma (Advanced)",
    comp3Title: "Technical:",
    comp3Text: "Next.js, Tailwind CSS, HTML/CSS, Web3Forms, Lottie/JSON Optimization",
    comp4Title: "Workflow:",
    comp4Text: "Cross-functional Collaboration, Stakeholder Management, Agile, SOP Documentation",
    expTitle: "Professional Experience",
    eduTitle: "Education",
    featuredTitle: "Featured Work",
    saveBtn: "Simpan sebagai PDF",
    backBtn: "← Kembali ke Portofolio",
    jobs: {
      gjls: {
        title: "Product Designer (Freelance/Contract)",
        company: "GJLS Entertainment · National Comedy & Entertainment Brand",
        points: [
          "Memimpin redesign end-to-end website portofolio resmi, mengubahnya menjadi Digital Media Kit interaktif untuk mempercepat siklus pitching tim Partnership.",
          "Merancang dan menerapkan Design System terukur (Space Grotesk + Soft Minimalist), menjaga konsistensi tone of voice brand di seluruh halaman.",
          "Mengintegrasikan sistem lead generation yang mengubah cold audience menjadi data terukur, memangkas waktu trust-building awal hingga 30-40%.",
          "Membangun front-end menggunakan Next.js dan Tailwind CSS, memastikan website 100% production-ready dan mudah dikelola tim non-teknis."
        ]
      },
      msgbox: {
        title: "UI/UX Designer (Pilot Project)",
        company: "MsgBox · Enterprise AI Communication Platform (Singapore Client)",
        points: [
          "Memperluas cakupan proyek dari pembuatan animasi Pitch Deck dan Lottie menjadi desain UI/UX penuh untuk Landing Page dan Dashboard SaaS.",
          "Merancang User Flow dan high-fidelity wireframe untuk fitur dashboard kompleks, termasuk alur automation workflow dan integrasi multi-channel (WhatsApp, WeChat, LINE).",
          "Mengembangkan Design System terpusat untuk menjembatani bahasa visual animasi dinamis ke dalam komponen antarmuka statis."
        ],
        note: "*Catatan: Proyek dihentikan di fase akhir pengembangan dashboard karena restrukturisasi prioritas strategis internal klien; seluruh aset landing page berhasil di-handover dengan dokumentasi lengkap."
      },
      bootsschule: {
        title: "Motion Graphic Designer",
        company: "Bootsschule 1.de · EdTech Platform",
        points: [
          "Menerjemahkan UX behavioral briefs menjadi spesifikasi motion yang presisi untuk setiap langkah user journey.",
          "Merancang dan menganimasikan 7 micro-interactions berbasis Lottie yang dipicu oleh perilaku pengguna spesifik.",
          "Mengoptimalkan output JSON secara agresif (43KB–333KB) untuk performa mobile yang mulus."
        ]
      },
      stockt: {
        title: "UI & Motion Designer",
        company: "Stockt · E-commerce Inventory SaaS Startup",
        points: [
          "Menciptakan hierarki visual yang selaras dengan identitas brand, menghasilkan desain high-fidelity yang berhasil di-deploy dan live."
        ]
      },
      zeus: {
        title: "Junior Motion Designer & Lead Intern Mentor",
        company: "ZEUS ANIMATION · Explainer Video Studio",
        points: [
          "Dipromosikan menjadi Lead Mentor untuk membimbing ~50 siswa SMK/mahasiswa dalam pipeline animasi 2D.",
          "Menyusun SOP komprehensif untuk pembuatan aset dan rigging, yang diadopsi studio untuk standarisasi workflow jangka panjang."
        ]
      }
    },
    edu: {
      d4: "D4 in Visual Communication Design (DKV) · Universitas Brawijaya, Malang, Indonesia",
      smk: "Vocational High School (SMK) in Animation · SMKN 5 Malang, Indonesia"
    },
    featured: {
      web: "🚀 Live Production Website: ",
      webDesc: "Portofolio interaktif ini, dibangun 100% dengan Next.js & Tailwind CSS.",
      lottie: "📦 Scalable Lottie UI Systems: ",
      lottieDesc: "Koleksi aset animasi Lottie & ikon UI yang konsisten, dirancang dengan pedoman motion yang ketat dan dioptimalkan untuk implementasi web/mobile skala global."
    }
  },
  en: {
    role: "Product & UI/UX Designer · Multidisciplinary",
    summaryTitle: "Professional Summary",
    summaryText: "Product & UI/UX Designer with a strong foundation in Motion Graphics and Front-End technical understanding (Next.js, Tailwind CSS). Experienced in translating complex brand narratives into structured, user-centered, and production-ready digital products. Trusted by clients to expand project scope from motion assets to full UI/UX interface design due to the ability to build cohesive Design Systems. Currently seeking an in-house role to focus on long-term product lifecycles, data-driven iteration, and structured cross-functional collaboration.",
    compTitle: "Core Competencies",
    comp1Title: "Product & UX:",
    comp1Text: "User Research, User Flow, Wireframing, Prototyping, Usability Testing, Information Architecture",
    comp2Title: "UI & Visual:",
    comp2Text: "Design Systems, Responsive Design, Typography, Color Theory, Figma (Advanced)",
    comp3Title: "Technical:",
    comp3Text: "Next.js, Tailwind CSS, HTML/CSS, Web3Forms, Lottie/JSON Optimization",
    comp4Title: "Workflow:",
    comp4Text: "Cross-functional Collaboration, Stakeholder Management, Agile, SOP Documentation",
    expTitle: "Professional Experience",
    eduTitle: "Education",
    featuredTitle: "Featured Work",
    saveBtn: "Save as PDF",
    backBtn: "← Back to Portfolio",
    jobs: {
      gjls: {
        title: "Product Designer (Freelance/Contract)",
        company: "GJLS Entertainment · National Comedy & Entertainment Brand",
        points: [
          "Led end-to-end redesign of the official portfolio website, transforming it into an interactive Digital Media Kit to accelerate the Partnership team's pitching cycle.",
          "Designed and implemented a measurable Design System (Space Grotesk + Soft Minimalist), maintaining brand tone of voice consistency across all pages.",
          "Integrated a lead generation system that converted cold audiences into measurable data, reducing initial trust-building time by 30-40%.",
          "Built the front-end using Next.js and Tailwind CSS, ensuring the website is 100% production-ready, responsive, and easily managed by non-technical teams."
        ]
      },
      msgbox: {
        title: "UI/UX Designer (Pilot Project)",
        company: "MsgBox · Enterprise AI Communication Platform (Singapore Client)",
        points: [
          "Expanded project scope from creating Pitch Deck and Lottie animations to full UI/UX design for SaaS Landing Pages and Dashboards.",
          "Designed User Flows and high-fidelity wireframes for complex dashboard features, including automation workflows and multi-channel integration (WhatsApp, WeChat, LINE).",
          "Developed a centralized Design System to bridge dynamic motion visual language into static interface components."
        ],
        note: "*Note: Project was halted in the final dashboard development phase due to internal client strategic priority restructuring; all landing page assets were successfully handed over with complete documentation."
      },
      bootsschule: {
        title: "Motion Graphic Designer",
        company: "Bootsschule 1.de · EdTech Platform",
        points: [
          "Translated UX behavioral briefs into precise motion specifications for every step of the user journey.",
          "Designed and animated 7 Lottie-based micro-interactions triggered by specific user behaviors.",
          "Aggressively optimized JSON outputs (43KB–333KB) to ensure smooth mobile performance."
        ]
      },
      stockt: {
        title: "UI & Motion Designer",
        company: "Stockt · E-commerce Inventory SaaS Startup",
        points: [
          "Created visual hierarchy aligned with brand identity, resulting in high-fidelity designs that were successfully deployed and went live."
        ]
      },
      zeus: {
        title: "Junior Motion Designer & Lead Intern Mentor",
        company: "ZEUS ANIMATION · Explainer Video Studio",
        points: [
          "Promoted to Lead Mentor to guide ~50 vocational/high school students in the 2D animation pipeline.",
          "Compiled comprehensive SOPs for asset creation and rigging, adopted by the studio for long-term workflow standardization."
        ]
      }
    },
    edu: {
      d4: "D4 in Visual Communication Design (DKV) · Universitas Brawijaya, Malang, Indonesia",
      smk: "Vocational High School (SMK) in Animation · SMKN 5 Malang, Indonesia"
    },
    featured: {
      web: "🚀 Live Production Website: ",
      webDesc: "This interactive portfolio, built 100% with Next.js & Tailwind CSS.",
      lottie: "📦 Scalable Lottie UI Systems: ",
      lottieDesc: "A consistent collection of Lottie animations & UI icons, designed with strict motion guidelines and optimized for global web/mobile implementation."
    }
  }
};

export default function CVPage() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const t = content[lang];

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-foreground font-sans antialiased selection:bg-foreground selection:text-white">
      
      {/* Sticky Action Bar */}
      <div className="sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E5E5] py-4 px-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/" className="whitespace-nowrap text-sm font-medium text-[#666666] hover:text-foreground transition-colors flex items-center gap-2">
          {t.backBtn}
        </Link>
        
        <div className="ml-auto flex shrink-0 items-center gap-3">
          {/* Language Toggle */}
          <div className="flex bg-[#E5E5E5] rounded-md p-1">
            <button 
              type="button"
              onClick={() => setLang("id")}
              aria-pressed={lang === "id"}
              className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${lang === "id" ? "bg-white text-foreground shadow-sm" : "text-[#666666] hover:text-foreground"}`}
            >
              ID
            </button>
            <button 
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${lang === "en" ? "bg-white text-foreground shadow-sm" : "text-[#666666] hover:text-foreground"}`}
            >
              EN
            </button>
          </div>

          <button 
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 bg-foreground text-white text-sm font-medium rounded-md hover:bg-[#333333] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {t.saveBtn}
          </button>
        </div>
      </div>

      {/* Document Container */}
      <div className="py-12 px-4 md:px-8 flex justify-center print:p-0 print:m-0 print:py-0">
        <div className="w-full max-w-[210mm] bg-white shadow-sm print:shadow-none p-10 md:p-16 print:p-8">
          
          {/* HEADER */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Aditio Dwi Novanto</h1>
            <p className="text-base md:text-lg text-[#666666] mb-5">{t.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#555555]">
              <span>📍 Malang, Indonesia (Remote)</span>
              <span className="hidden md:inline text-[#D1D5DB]">•</span>
              <span>📧 aditiodwin@gmail.com</span>
              <span className="hidden md:inline text-[#D1D5DB]">•</span>
              <span>📱 +62 852-3593-6381</span>
              <span className="hidden md:inline text-[#D1D5DB]">•</span>
              <a href="https://linkedin.com/in/aditiodwin" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-[#D1D5DB] underline-offset-2 hover:decoration-foreground">LinkedIn</a>
              <span className="hidden md:inline text-[#D1D5DB]">•</span>
              <a href="https://iconscout.com/contributors/wizzard" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-[#D1D5DB] underline-offset-2 hover:decoration-foreground">Iconscout</a>
            </div>
          </header>

          {/* SUMMARY */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-3">{t.summaryTitle}</h2>
            <p className="text-[15px] text-[#333333] leading-relaxed">
              {t.summaryText}
            </p>
          </section>

          {/* CORE COMPETENCIES */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-3">{t.compTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-sm">
              <div className="flex">
                <span className="font-semibold w-28 shrink-0 text-foreground">{t.comp1Title}</span>
                <span className="text-[#444444]">{t.comp1Text}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28 shrink-0 text-foreground">{t.comp2Title}</span>
                <span className="text-[#444444]">{t.comp2Text}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28 shrink-0 text-foreground">{t.comp3Title}</span>
                <span className="text-[#444444]">{t.comp3Text}</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-28 shrink-0 text-foreground">{t.comp4Title}</span>
                <span className="text-[#444444]">{t.comp4Text}</span>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-4">{t.expTitle}</h2>
            
            <div className="space-y-6">
              {/* GJLS */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="font-semibold text-[15px] text-foreground">{t.jobs.gjls.title}</h3>
                  <span className="text-xs text-[#888888] font-mono">2026 – Present</span>
                </div>
                <p className="text-sm text-[#555555] mb-2">{t.jobs.gjls.company}</p>
                <ul className="list-disc list-outside ml-4 text-[14px] text-[#444444] space-y-1.5 leading-relaxed">
                  {t.jobs.gjls.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>

              {/* MsgBox */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="font-semibold text-[15px] text-foreground">{t.jobs.msgbox.title}</h3>
                  <span className="text-xs text-[#888888] font-mono">Early 2025</span>
                </div>
                <p className="text-sm text-[#555555] mb-2">{t.jobs.msgbox.company}</p>
                <ul className="list-disc list-outside ml-4 text-[14px] text-[#444444] space-y-1.5 leading-relaxed">
                  {t.jobs.msgbox.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
                <p className="text-xs text-[#888888] italic mt-2">{t.jobs.msgbox.note}</p>
              </div>

              {/* Bootsschule */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="font-semibold text-[15px] text-foreground">{t.jobs.bootsschule.title}</h3>
                  <span className="text-xs text-[#888888] font-mono">2023 – 2024</span>
                </div>
                <p className="text-sm text-[#555555] mb-2">{t.jobs.bootsschule.company}</p>
                <ul className="list-disc list-outside ml-4 text-[14px] text-[#444444] space-y-1.5 leading-relaxed">
                  {t.jobs.bootsschule.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>

              {/* Stockt */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="font-semibold text-[15px] text-foreground">{t.jobs.stockt.title}</h3>
                  <span className="text-xs text-[#888888] font-mono">Early 2023</span>
                </div>
                <p className="text-sm text-[#555555] mb-2">{t.jobs.stockt.company}</p>
                <ul className="list-disc list-outside ml-4 text-[14px] text-[#444444] space-y-1.5 leading-relaxed">
                  {t.jobs.stockt.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>

              {/* ZEUS */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                  <h3 className="font-semibold text-[15px] text-foreground">{t.jobs.zeus.title}</h3>
                  <span className="text-xs text-[#888888] font-mono">2021 – 2022</span>
                </div>
                <p className="text-sm text-[#555555] mb-2">{t.jobs.zeus.company}</p>
                <ul className="list-disc list-outside ml-4 text-[14px] text-[#444444] space-y-1.5 leading-relaxed">
                  {t.jobs.zeus.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-3">{t.eduTitle}</h2>
            <div className="space-y-2 text-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <span className="font-semibold text-foreground">{t.edu.d4}</span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <span className="font-semibold text-foreground">{t.edu.smk}</span>
              </div>
            </div>
          </section>

          {/* FEATURED WORK */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-3">{t.featuredTitle}</h2>
            <div className="space-y-3">
              <div className="text-sm">
                <span className="font-semibold text-foreground">{t.featured.web}</span>
                <a href="https://aditio-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-[#D1D5DB] underline-offset-2 hover:decoration-foreground">
                  aditio-portfolio.vercel.app
                </a>
                <p className="text-[#555555] mt-0.5">{t.featured.webDesc}</p>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{t.featured.lottie}</span>
                <a href="https://iconscout.com/contributors/wizzard" target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-[#D1D5DB] underline-offset-2 hover:decoration-foreground">
                  iconscout.com/contributors/wizzard
                </a>
                <p className="text-[#555555] mt-0.5">{t.featured.lottieDesc}</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* CSS KHUSUS UNTUK PRINT */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:p-0 { padding: 0 !important; }
          .print\\:m-0 { margin: 0 !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          a {
            text-decoration: none !important;
            color: black !important;
          }
          h1, h2, h3, span, p, li {
            color: black !important;
          }
          .text-\\[\\#666666\\], .text-\\[\\#555555\\], .text-\\[\\#444444\\], .text-\\[\\#888888\\] {
            color: #333333 !important;
          }
        }
      `}</style>
    </main>
  );
}