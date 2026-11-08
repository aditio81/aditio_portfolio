import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-accent-orange transition-colors">
          ADITIO
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:aditiodwin@gmail.com" 
          className="hidden md:flex items-center justify-center px-6 py-2.5 bg-foreground text-background font-mono text-sm rounded-full hover:bg-accent-orange transition-colors duration-300"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}