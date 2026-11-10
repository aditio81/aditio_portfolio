import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* === HEADER === */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-20 container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-muted tracking-widest uppercase block mb-4">
            03 // About & Background
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-6">
            The Human Behind the Pixels.
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            A brief look into my journey, my toolkit, and how I approach digital craftsmanship.
          </p>
        </div>
      </section>

      {/* === BIODATA SECTION (BARU) === */}
      <section className="pb-24 md:pb-32 container mx-auto px-6">
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm font-bold text-accent-orange">● PERSONAL PROFILE</span>
            <div className="h-px grow bg-border"></div>
            <span className="font-mono text-xs text-muted">BASIC INFO</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Photo + Name */}
            <div className="lg:col-span-1">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-linear-to-br from-accent-orange/20 via-accent-purple/20 to-blue-600/20 mb-6">
                {/* GANTI INI DENGAN FOTO ASLI KAMU */}
                <Image
                  src="/images/profile/aditio-photo.jpg"
                  alt="Aditio Dwi Novanto"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2">Aditio Dwi Novanto</h2>
              <p className="font-mono text-sm text-accent-orange mb-4">Product & Motion Designer</p>
              
              <div className="flex gap-3">
                <a 
                  href="mailto:aditiodwin@gmail.com"
                  className="px-4 py-2 bg-foreground text-background font-mono text-xs rounded-full hover:bg-accent-orange transition-colors"
                >
                  EMAIL ME
                </a>
                <Link
                  href="/cv"
                  className="px-4 py-2 border border-foreground text-foreground font-mono text-xs rounded-full hover:bg-foreground hover:text-background transition-colors"
                >
                  VIEW CV
                </Link>
              </div>
            </div>

            {/* Right: Info Grid */}
            <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Info Item 1 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Full Name</span>
                <p className="font-bold text-foreground">Aditio Dwi Novanto</p>
                </div>

                {/* Info Item 2 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Date of Birth</span>
                <p className="font-bold text-foreground">[21 November], 1999</p>
                </div>

                {/* Info Item 3 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Current Location</span>
                <p className="font-bold text-foreground">Malang, East Java</p>
                <p className="font-mono text-xs text-muted mt-1">Open to relocate to Jakarta</p>
                </div>

                {/* Info Item 4 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Marital Status</span>
                <p className="font-bold text-foreground">Single</p>
                </div>

                {/* Info Item 5: PENGGANTI EDUCATION - Lebih Powerful */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Core Focus</span>
                <p className="font-bold text-foreground">Product & Motion Designer</p>
                <p className="font-mono text-xs text-muted mt-1">UI/UX • Motion • Code</p>
                </div>

                {/* Info Item 6 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Languages</span>
                <p className="font-bold text-foreground">Indonesian (Native)</p>
                <p className="font-mono text-xs text-muted mt-1">English (Professional)</p>
                </div>

                {/* Info Item 7 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Nationality</span>
                <p className="font-bold text-foreground">Indonesian</p>
                </div>

                {/* Info Item 8 */}
                <div className="p-4 bg-background border border-border rounded-xl">
                <span className="font-mono text-[10px] text-muted uppercase tracking-wider block mb-2">Work Authorization</span>
                <p className="font-bold text-foreground">Eligible to work in Indonesia</p>
                </div>

            </div>
            </div>

          </div>
        </div>
      </section>

      {/* === NARRATIVE & TIMELINE === */}
      <section className="pb-24 md:pb-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Narrative Text (Spans 2 columns) */}
          <div className="lg:col-span-2 bg-surface border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm font-bold text-accent-purple">PHILOSOPHY // ORIGINS</span>
              <div className="h-px grow bg-border"></div>
              <span className="font-mono text-xs text-muted">REF. 2026-CHOREOGRAPHY</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              From Flash Games to Product Systems.
            </h2>
            
            <p className="text-lg text-muted leading-relaxed mb-6">
              My journey began in a vocational classroom, coding simple math quiz games in Macromedia Flash using ActionScript 3. That was my first taste of logic meeting creativity.
            </p>
            
            <p className="text-lg text-muted leading-relaxed mb-6">
              As I transitioned to After Effects, I found myself diving into Expressions, which naturally led me to explore HTML and CSS. When Figma emerged during my college years, it all clicked: I wasn&apos;t just a designer or a coder; I was a builder who understood both languages.
            </p>
            
            <p className="text-lg text-muted leading-relaxed mb-8">
              From internships to freelance projects, and now to building full-scale digital ecosystems, my path has been about bridging the gap between &apos;how it looks&apos; and &apos;how it works.&apos;
            </p>

            {/* Key Principles */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                ⚡ TIMING FIDELITY: 60 FPS
              </span>
              <span className="px-4 py-2 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                ⚙️ SYSTEM LOGIC: TOKENIZED MOTION
              </span>
              <span className="px-4 py-2 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                💻 FRONTEND SYNC: CODE-FIRST
              </span>
            </div>
                        {/* === TAMBAHKAN BAGIAN INI DI SINI === */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-accent-purple">MODERN WORKFLOW // AI SYNERGY</span>
                <div className="h-px grow bg-border"></div>
              </div>
              <p className="text-base text-muted leading-relaxed">
                AI is my tactical accelerator, not my autopilot. I leverage it to rapidly generate script variations, style references, and baseline copy. However, my years of design and animation experience act as the ultimate filter: I critically reject irrelevant outputs, curate the rest, and ensure every detail aligns with strict UX standards and brand identity.
              </p>
            </div>
          </div>

          {/* Right: Timeline Evolution (Spans 1 column) */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-sm font-bold text-accent-orange">CHRONOLOGY // EVOLUTION</span>
              <div className="h-px grow bg-border"></div>
              <span className="font-mono text-xs text-muted">CRAFT PATH</span>
            </div>

            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-accent-orange"></div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">Macromedia Flash</h3>
                    <span className="inline-block px-2 py-0.5 bg-accent-orange/10 text-accent-orange text-[10px] font-mono font-bold rounded mt-1">
                      GENESIS
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted">2015-2018</span>
                </div>
                <p className="text-sm text-muted">ActionScript 3 • Logic & Games</p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-accent-purple"></div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">After Effects</h3>
                    <span className="inline-block px-2 py-0.5 bg-accent-purple/10 text-accent-purple text-[10px] font-mono font-bold rounded mt-1">
                      MOTION
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted">2020</span>
                </div>
                <p className="text-sm text-muted">Expressions • Choreography & Timing</p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">Frontend Markup</h3>
                    <span className="inline-block px-2 py-0.5 bg-blue-600/10 text-blue-600 text-[10px] font-mono font-bold rounded mt-1">
                      CODE
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted">2022</span>
                </div>
                <p className="text-sm text-muted">HTML, CSS • Browser Architecture</p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-8 border-l-2 border-foreground">
                <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-foreground"></div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">Figma & Design Systems</h3>
                    <span className="inline-block px-2 py-0.5 bg-foreground/10 text-foreground text-[10px] font-mono font-bold rounded mt-1">
                      SYNTHESIS
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted">2022-PRES</span>
                </div>
                <p className="text-sm text-muted">Tokens • Scalable Digital Ecosystems</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <span className="font-mono text-xs text-muted">BRIDGE: HYBRID MINDSET</span>
              <span className="font-mono text-xs text-accent-orange">● PRODUCTION-READY</span>
            </div>
          </div>

        </div>
      </section>

      {/* === TOOLKIT / FOUNDATIONS === */}
      <section className="pb-24 md:pb-32 container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-sm font-bold text-accent-purple">● TECHNICAL STACK & FOUNDATIONS</span>
          <div className="h-px grow bg-border"></div>
          <span className="font-mono text-xs text-muted">CORE_TOOLS // 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Foundation 01: Design */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent-orange/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-muted">FOUNDATION 01</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Design & Systems</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Architecting cohesive multi-platform interfaces from atomic components to high-fidelity prototypes.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Prototyping", "Design Systems", "User Flows", "Wireframing"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Foundation 02: Code */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="font-mono text-xs text-muted">FOUNDATION 02</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Frontend & Code</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Bridging the gap between conceptual design and executable, responsive production architecture.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "HTML/CSS", "Git"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Foundation 03: Motion */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-mono text-xs text-muted">FOUNDATION 03</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Motion & Interaction</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Injecting kinetic life, feedback states, and spatial awareness into digital product workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Rive", "Lottie", "Framer Motion", "Micro-interactions", "After Effects"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* === AVAILABILITY & STATUS === */}
      <section className="pb-24 md:pb-32 container mx-auto px-6">
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-sm font-bold text-accent-orange">● OVERVIEW & ENGAGEMENT</span>
            <div className="h-px grow bg-border"></div>
            <span className="font-mono text-xs text-muted">STATUS // 2026</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Status Cards (Stacked) */}
            <div className="space-y-4">
              {/* Card 1: Experience */}
              <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent-orange/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">4+ Years in Digital Design & Motion.</h4>
                  <p className="text-xs font-mono text-muted">PRODUCTION-GRADE DELIVERY SINCE 2022</p>
                </div>
              </div>

              {/* Card 2: Availability */}
              <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Available for Select Freelance & Lead Roles.</h4>
                  <p className="text-xs font-mono text-muted">DESIGN SYSTEMS // PRODUCT ART DIRECTION</p>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Based in Malang, Open to Remote & Relocation.</h4>
                  <p className="text-xs font-mono text-muted">UTC+7 // ASYNC & REALTIME SYNC CAPABLE</p>
                </div>
              </div>
            </div>

            {/* Right: Current Focus & CTA (PENGGANTI TIMELINE RECAP) */}
            <div className="bg-background border border-border rounded-xl p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm font-bold text-accent-purple">● CURRENT FOCUS</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                Building scalable products with kinetic motion.
              </h3>
              <p className="text-muted leading-relaxed mb-8">
                I&apos;m currently open to select freelance projects and lead product design roles. Let&apos;s discuss how my hybrid skill set can bring tangible value to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:aditiodwin@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-orange text-white font-mono text-sm rounded-full hover:bg-foreground transition-colors duration-300"
                >
                  GET IN TOUCH ↗
                </a>
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-foreground font-mono text-sm rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  VIEW CV ↓
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}