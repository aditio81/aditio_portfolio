import Link from "next/link";

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-xs text-muted tracking-widest uppercase block mb-4">
            02 // My Process
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
            Design Thinking & Execution
          </h2>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            A structured approach to building cohesive digital experiences, blending user-centric design with kinetic motion.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Large (Spans 2 columns) */}
          <div className="md:col-span-2 bg-surface border border-border rounded-2xl p-8 md:p-10 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm font-bold text-accent-orange">PHASE 01</span>
              <div className="h-px grow bg-border"></div>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">01. Discover & Define</h3>
            <p className="text-muted leading-relaxed mb-8 max-w-lg">
              Mapping user pain points, business goals, and technical constraints before sketching a single pixel. Ensuring the &apos;why&apos; is solid before the &apos;how&apos;.
            </p>
            <div className="flex flex-wrap gap-2">
              {["User Journeys", "Information Architecture", "Strategic Scope"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Small */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm font-bold text-accent-purple">PHASE 02</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">02. Design & Systemize</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Crafting scalable design systems, typography, and intuitive UI flows in Figma that balance aesthetics with usability.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Tokens", "Figma", "Prototyping"].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-background border border-border rounded text-[10px] font-mono text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Small */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm font-bold text-accent-orange">PHASE 03</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">03. Animate & Interact</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Injecting life into the interface. Crafting micro-interactions and Lottie animations that guide user attention and provide feedback.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Rive", "Lottie", "Framer Motion"].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-background border border-border rounded text-[10px] font-mono text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Small */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm font-bold text-accent-purple">PHASE 04</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">04. Build & Deploy</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Translating designs into production-ready, responsive Next.js applications. Bridging the gap between Figma and the browser.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Tailwind", "React"].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-background border border-border rounded text-[10px] font-mono text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
            {/* TOMBOL NAVIGASI KE HALAMAN ABOUT */}
            <div className="mt-16 text-center">
            <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-mono text-sm rounded-full hover:bg-accent-orange transition-colors duration-300"
            >
                MORE ABOUT ME ↗
            </Link>
            </div>
        </div>

      </div>
    </section>
  );
}