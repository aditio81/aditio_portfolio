import Link from "next/link";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-3 px-6 py-3 md:h-20 md:flex-nowrap md:py-0">
        {/* Logo */}
        <Link href="/" className="order-1 text-2xl font-bold tracking-tighter transition-colors hover:text-accent-orange">
          ADITIO
        </Link>

        {/* Navigation Links */}
        <div className="order-3 flex w-full items-center justify-between font-mono text-sm text-muted md:order-2 md:w-auto md:gap-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:aditiodwin@gmail.com" 
          className="order-2 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 font-mono text-xs text-background transition-colors duration-300 hover:bg-accent-orange md:order-3 md:px-6 md:py-2.5 md:text-sm"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}