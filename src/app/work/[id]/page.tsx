import { Suspense } from "react";
import { caseStudies, getCaseStudy } from "@/content";
import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

// 1. Generate Static Params untuk SSG (Super Fast Loading)
export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.slug,
  }));
}

// 2. Helper untuk Navigasi Prev/Next
const getAdjacentProjects = (currentId: string) => {
  const index = caseStudies.findIndex((c) => c.slug === currentId);
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
};

// 4. Main Page Component
export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudy(id);

  if (!study) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(id);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-accent-orange selection:text-white">
      <Navbar />

      {/* Shell Instan: Muncul langsung tanpa menunggu data */}
      <div className="pt-32 pb-8 container mx-auto px-6">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent-orange transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO ALL WORK
        </Link>
      </div>

      {/* Streaming Content: Muncul setelah data siap, mencegah blocking */}
      <Suspense fallback={
        <div className="py-32 text-center text-muted font-mono container mx-auto px-6 animate-pulse">
          Loading case study data...
        </div>
      }>
        <CaseStudyTemplate study={study} />
      </Suspense>

      {/* === NAVIGATION (Prev / Next) === */}
      <section className="py-24 border-t border-border container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Project */}
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="group p-6 bg-surface border border-border rounded-2xl hover:border-foreground/20 transition-colors">
              <span className="font-mono text-xs text-muted uppercase block mb-2">Previous Project</span>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-orange transition-colors flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> {prev.title}
              </h3>
            </Link>
          ) : <div />}

          {/* Next Project */}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group p-6 bg-surface border border-border rounded-2xl hover:border-foreground/20 transition-colors md:text-right">
              <span className="font-mono text-xs text-muted uppercase block mb-2">Next Project</span>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-orange transition-colors flex items-center justify-end gap-2">
                {next.title} <span className="group-hover:translate-x-1 transition-transform">→</span>
              </h3>
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </main>
  );
}