import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  const isUIUX = project.category === "uiux";
  const isMotion = project.category === "motion";
  const isVideo = project.category === "video";
  const imageLoading = project.id === "gjls" ? "eager" : "lazy";

  const imageSize = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <Link href={`/work/${project.id}`} className="group block h-full">
      <article className="flex flex-col h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
        
        {/* === THUMBNAIL AREA === */}
        <div className={`relative w-full overflow-hidden ${
            isUIUX ? "aspect-10/9" : 
            isMotion ? "aspect-square" : 
            "aspect-video"
            }`}>
          
          {/* --- VARIAN 1: UI/UX --- */}
          {isUIUX && (
            <>
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-accent-orange text-white text-[10px] font-mono font-bold rounded-md uppercase tracking-wider z-20">
                UI/UX
              </div>
              <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-100 border-b border-border flex items-center px-3 gap-1.5 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              </div>
              <div className="relative w-full h-full mt-8 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image src={project.imagePlaceholder} alt={project.title} fill sizes={imageSize} loading={imageLoading} className="object-cover" />
              </div>
            </>
          )}

          {/* --- VARIAN 2: MOTION (Tetap Sama) --- */}
          {isMotion && (
            <>
              <div className="relative w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image src={project.imagePlaceholder} alt={project.title} fill sizes={imageSize} loading={imageLoading} className="object-cover" />
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-accent-purple text-white text-[10px] font-mono font-bold rounded-md uppercase tracking-wider flex items-center gap-1 z-20">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                MOTION
              </div>
            </>
          )}

          {/* --- VARIAN 3: VIDEO (Play Button on Hover) --- */}
          {isVideo && (
            <>
              <div className="relative w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Image src={project.imagePlaceholder} alt={project.title} fill sizes={imageSize} loading={imageLoading} className="object-cover" />
                
                {/* Overlay & Play Button: Muncul hanya saat Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                
                {/* Progress Bar (Opsional, bisa dihilangkan jika terlalu ramai) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="h-full w-1/3 bg-accent-orange"></div>
                </div>
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-blue-600 text-white text-[10px] font-mono font-bold rounded-md uppercase tracking-wider z-20">
                VIDEO
              </div>
            </>
          )}
        </div>

        {/* === TEXT CONTENT === */}
        <div className="p-6 flex flex-col grow">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent-orange transition-colors">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          
          {/* Konten Teks Berbeda Tiap Kategori */}
          <div className="mb-4 grow">
            {isUIUX && project.teaser ? (
              <>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.teaser}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-accent-orange group-hover:translate-x-1 transition-transform">
                  READ CASE STUDY <span className="ml-1">→</span>
                </span>
              </>
            ) : (
              <p className="text-sm text-muted leading-relaxed">
                {project.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] font-mono text-foreground/70 bg-background px-2 py-1 rounded border border-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}