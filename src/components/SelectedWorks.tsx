import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function SelectedWorks() {
  // Pisahkan proyek berdasarkan kategori
  const uiuxProject = projects.find((p) => p.category === "uiux");
  const motionProject = projects.find((p) => p.category === "motion");
  const videoProject = projects.find((p) => p.category === "video");

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-xs text-muted tracking-widest uppercase block mb-4">
            01 // Archive & Commissions
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
            Selected Works
          </h2>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            A curated collection of scalable digital products, high-velocity design systems, and tactile motion studies.
          </p>
          
          {/* Tombol Navigasi ke Halaman Work */}
          <div className="mt-8">
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-accent-orange transition-colors group"
            >
              VIEW ALL PROJECTS 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Asymmetric Layout: Large Left + Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* KOLOM KIRI: Kartu UI/UX Besar (Spans 2 kolom) */}
          {uiuxProject && (
            <div className="lg:col-span-2">
              <ProjectCard project={uiuxProject} />
            </div>
          )}

          {/* KOLOM KANAN: Motion + Video Stacked Vertikal */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {motionProject && (
              <ProjectCard project={motionProject} />
            )}
            {videoProject && (
              <ProjectCard project={videoProject} />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}