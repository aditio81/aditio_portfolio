"use client";

import { useState } from "react";
import { projects, ProjectCategory } from "@/data/projects";
import BehanceCard from "@/components/BehanceCard"; // GANTI INI
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects = 
    activeFilter === "all" 
      ? projects 
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* === HEADER & FILTERS === */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-20 container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-muted tracking-widest uppercase block mb-4">
            01 // Archive & Commissions
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-6">
            Selected Works
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed mb-12">
            A curated collection of scalable digital products, high-velocity design systems, and tactile motion studies.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            <FilterButton 
              label="All Projects" 
              count={projects.length} 
              isActive={activeFilter === "all"} 
              onClick={() => setActiveFilter("all")} 
            />
            <FilterButton 
              label="UI/UX Design" 
              count={projects.filter(p => p.category === "uiux").length} 
              isActive={activeFilter === "uiux"} 
              onClick={() => setActiveFilter("uiux")} 
            />
            <FilterButton 
              label="Motion & Lottie" 
              count={projects.filter(p => p.category === "motion").length} 
              isActive={activeFilter === "motion"} 
              onClick={() => setActiveFilter("motion")} 
            />
            <FilterButton 
              label="Explainer Video" 
              count={projects.filter(p => p.category === "video").length} 
              isActive={activeFilter === "video"} 
              onClick={() => setActiveFilter("video")} 
            />
          </div>
        </div>
      </section>

      {/* === BEHANCE-STYLE GALLERY GRID === */}
      <section className="pb-24 md:pb-32 container mx-auto px-6">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <BehanceCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted font-mono">
            No projects found in this category.
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

// Komponen Tombol Filter (tetap sama)
function FilterButton({ 
  label, 
  count, 
  isActive, 
  onClick 
}: { 
  label: string; 
  count: number; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 border
        ${isActive 
          ? "bg-foreground text-background border-foreground" 
          : "bg-surface text-muted border-border hover:border-foreground hover:text-foreground"
        }
      `}
    >
      {label}
      <span className={`
        text-[10px] px-1.5 py-0.5 rounded-full font-bold
        ${isActive ? "bg-background/20 text-background" : "bg-background text-muted"}
      `}>
        {count}
      </span>
    </button>
  );
}