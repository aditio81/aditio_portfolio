import type { CaseLink } from "@/content/types";

export default function CaseStudyLinks({ links }: { links: CaseLink[] }) {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <span className="mb-8 block font-mono text-xs uppercase tracking-widest text-muted">Explore</span>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              link.style === "secondary"
                ? "rounded-full border-2 border-foreground px-8 py-3 text-center font-mono text-sm uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
                : "rounded-full bg-accent-orange px-8 py-3 text-center font-mono text-sm uppercase text-white transition-colors hover:bg-foreground"
            }
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
