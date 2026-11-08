import Link from "next/link";
import Navbar from "@/components/Navbar";
import OrbiRive from "@/components/OrbiRive";
import SelectedWorks from "@/components/SelectedWorks";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      {/* Hero Section - Full Width Editorial */}
      <section id="hero-section" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        
        {/* === BACKGROUND GRADIENTS === */}
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-linear-to-bl from-accent-orange/15 via-accent-orange/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-linear-to-tr from-accent-purple/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-linear-to-r from-background via-orange-50/30 to-background rounded-full blur-3xl pointer-events-none"></div>

        {/* === DECORATIVE SPARKLES === */}
        <div className="absolute top-32 right-[35%] w-2 h-2 text-accent-orange opacity-60 animate-pulse">✦</div>
        <div className="absolute top-[45%] right-[25%] w-3 h-3 text-accent-purple opacity-40 animate-pulse" style={{ animationDelay: '1s' }}>✦</div>
        <div className="absolute top-20 left-[20%] w-1.5 h-1.5 text-foreground opacity-30">✦</div>

        {/* === MAIN CONTENT === */}
        <div className="container mx-auto px-6 relative z-10">
          
          {/* Tag - Top Left */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted bg-surface/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse"></span>
              Status: Available for Select Freelance & Lead Roles // Q2-Q3 2026
            </span>
          </div>

          {/* Massive Headline */}
          <h1 className="text-[12vw] md:text-[9rem] font-bold tracking-tighter leading-[0.85] mb-8">
            Product &<br />
            <span className="text-foreground">Motion</span> Designer
          </h1>

          {/* Sub-headline & Name */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Aditio Dwi Novanto
            </h2>
            <span className="inline-flex items-center px-3 py-1 bg-accent-orange text-white font-mono text-xs rounded-full w-fit">
              LEAD UI/UX & FRONTEND
            </span>
          </div>

          {/* Body Text */}
          <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed mb-12">
            Bridging complex UI systems, emotive micro-interactions, and high-performance front-end code into cohesive digital experiences that feel alive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link 
              href="/work" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-white font-mono text-sm rounded-full hover:bg-foreground transition-all duration-300 group hover:scale-105"
            >
              VIEW WORK 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            
            {/* UPDATED: Link to /cv page instead of direct PDF download */}
            <Link 
              href="/cv"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-mono text-sm rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              VIEW CV ↓
            </Link>
          </div>

          {/* Stats Row - Full Width */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 py-12 border-t-2 border-border">
            <div className="space-y-2">
              <p className="font-mono text-5xl md:text-6xl font-bold text-foreground">4+</p>
              <p className="font-mono text-xs md:text-sm text-muted uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-5xl md:text-6xl font-bold text-foreground">10+</p>
              <p className="font-mono text-xs md:text-sm text-muted uppercase tracking-wider">Systems Deployed</p>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-5xl md:text-6xl font-bold text-foreground">3</p>
              <p className="font-mono text-xs md:text-sm text-muted uppercase tracking-wider">Featured Case Studies</p>
            </div>
          </div>
        </div>

        {/* === FLOATING ORBI SECTION === */}
        <div className="hidden lg:block absolute top-0 right-0 w-[40%] h-full pointer-events-none">
          {/* FIXED: Menggunakan arbitrary value agar valid di Tailwind default */}
          <div className="sticky top-32 h-150">
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-linear-to-br from-accent-purple/30 via-accent-orange/20 to-pink-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              
              {/* The Actual Rive Animation Container */}
              {/* FIXED: Menggunakan arbitrary value agar valid di Tailwind default */}
              <div className="relative z-10 w-125 h-125 pointer-events-auto rive-wrapper">
                <OrbiRive />
              </div>
            </div>
          </div>
        </div>

      </section>
      
      <SelectedWorks />
      <ProcessSection />
      <Footer />
    
    </main>
  );
}