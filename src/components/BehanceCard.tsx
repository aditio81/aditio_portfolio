import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BehanceCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  const isUIUX = project.category === "uiux";
  const isMotion = project.category === "motion";
  const isVideo = project.category === "video";

  const imageSize = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  // Tentukan gambar yang ditampilkan
  const displayImage = 
    isMotion && project.staticImage && !isHovered 
      ? project.staticImage  // Tampilkan PNG statis saat tidak di-hover
      : project.imagePlaceholder; // Tampilkan GIF saat hover (atau untuk kategori lain)

  const badgeColor = {
    uiux: "bg-accent-orange",
    motion: "bg-accent-purple",
    video: "bg-blue-600",
  }[project.category];

  const badgeLabel = {
    uiux: "UI/UX",
    motion: "MOTION",
    video: "VIDEO",
  }[project.category];

  return (
    <Link 
      href={`/work/${project.id}`} 
      className="group block relative overflow-hidden rounded-xl bg-surface"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* === THUMBNAIL IMAGE === */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={displayImage}
          alt={project.title}
          fill
          sizes={imageSize}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* === HOVER OVERLAY === */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        
        {/* Badge Kategori */}
        <div className={`absolute top-4 right-4 px-2.5 py-1 ${badgeColor} text-white text-[10px] font-mono font-bold rounded-md uppercase tracking-wider`}>
          {badgeLabel}
        </div>

        {/* Info Proyek */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-white/70 font-mono mb-3">
            {project.role} • {project.year}
          </p>
          
          {/* Stack Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="text-[9px] font-mono text-white/80 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}