import { Suspense } from "react";
import { projects } from "@/data/projects";
import { caseStudyRegistry } from "@/data/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UICaseStudyLayout from "@/components/case-study/UICaseStudyLayout";
import MotionCaseStudyLayout from "@/components/case-study/MotionCaseStudyLayout";
import VideoCaseStudyLayout from "@/components/case-study/VideoCaseStudyLayout";

// 1. Generate Static Params untuk SSG (Super Fast Loading)
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// 2. Helper untuk Navigasi Prev/Next
const getAdjacentProjects = (currentId: string) => {
  const index = projects.findIndex((p) => p.id === currentId);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
};

// 3. Komponen Terpisah untuk Konten (Mencegah Next.js 15 Instant Shell Warning)
function CaseStudyContent({ 
  project, 
  caseStudy 
}: { 
  project: typeof projects[0]; 
  caseStudy: any; 
}) {
  if (!caseStudy) {
    return (
      <div className="py-32 text-center text-muted font-mono container mx-auto px-6">
        Case study content for <span className="text-foreground font-bold">{project.title}</span> is currently being updated.
      </div>
    );
  }

  // Dispatcher Logic
  switch (project.category) {
    case "uiux":
      return <UICaseStudyLayout content={caseStudy} />;
    case "motion":
      return <MotionCaseStudyLayout content={caseStudy} />;
    case "video":
      return <VideoCaseStudyLayout content={caseStudy} />; // <-- TAMBAHKAN INI
    default:
      return (
        <section className="py-32 container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{project.title}</h1>
          <p className="text-muted max-w-xl mx-auto">
            This project format is currently under construction.
          </p>
        </section>
      );
  }
}

// 4. Main Page Component
export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const caseStudy = caseStudyRegistry[id];
  const { prev, next } = getAdjacentProjects(id);

  if (!project) {
    notFound();
  }

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
        <CaseStudyContent project={project} caseStudy={caseStudy} />
      </Suspense>

      {/* === NAVIGATION (Prev / Next) === */}
      <section className="py-24 border-t border-border container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Project */}
          {prev ? (
            <Link href={`/work/${prev.id}`} className="group p-6 bg-surface border border-border rounded-2xl hover:border-foreground/20 transition-colors">
              <span className="font-mono text-xs text-muted uppercase block mb-2">Previous Project</span>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent-orange transition-colors flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> {prev.title}
              </h3>
            </Link>
          ) : <div />}

          {/* Next Project */}
          {next ? (
            <Link href={`/work/${next.id}`} className="group p-6 bg-surface border border-border rounded-2xl hover:border-foreground/20 transition-colors md:text-right">
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