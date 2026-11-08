import Link from "next/link";

export default function Footer() {
  // PERBAIKAN: Hardcode tahun untuk menghindari error prerendering Next.js.
  // Ini adalah praktik standar untuk static site agar tetap 100% static dan super cepat.
  const currentYear = "2026"; 

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Massive CTA Headline */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9] mb-6">
            Let's build something <br className="hidden md:block" />
            <span className="text-muted">impactful together.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mt-8">
            {/* Email Link styled as an interactive element */}
            <a 
              href="mailto:aditiodwin@gmail.com" 
              className="group flex items-center gap-3 text-xl md:text-2xl font-mono text-foreground hover:text-accent-orange transition-colors"
            >
              <span className="w-3 h-3 rounded-full bg-accent-orange group-hover:scale-125 transition-transform"></span>
              aditiodwin@gmail.com
            </a>
            
            {/* Book Call Button */}
            <a 
              href="https://calendly.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-mono text-sm rounded-full hover:bg-accent-orange transition-colors duration-300"
            >
              BOOK A CALL ↗
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border w-full mb-12"></div>

        {/* Bottom Row: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-6 font-mono text-sm text-muted">
            <Link href="https://www.linkedin.com/in/aditio-dwi-novanto-1660901b8/" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
              LINKEDIN <span className="text-xs">↗</span>
            </Link>
            <Link href="https://www.behance.net/aditiodwin" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
              BEHANCE <span className="text-xs">↗</span>
            </Link>
            <Link href="https://github.com/aditio81" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-2">
              GITHUB <span className="text-xs">↗</span>
            </Link>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-muted">
            © {currentYear} ADITIO DWI NOVANTO. Crafted with Next.js & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}