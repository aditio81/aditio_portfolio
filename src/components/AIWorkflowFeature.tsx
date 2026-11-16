import Link from "next/link";

const roles = [
  { tool: "GPT", role: "Design mentor" },
  { tool: "Qwen", role: "Project manager" },
  { tool: "Stitch", role: "Visual exploration" },
  { tool: "Claude", role: "Coding mentor" },
  { tool: "Gemini", role: "Research & visuals" },
];

export default function AIWorkflowFeature() {
  return (
    <section className="border-y border-border bg-surface py-24 md:py-32">
      <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-accent-orange">
            02 // AI-assisted product development
          </span>
          <h2 className="mb-6 max-w-3xl text-5xl font-bold leading-[0.95] tracking-tighter text-foreground md:text-7xl">
            Built with AI.<br />Directed by me.
          </h2>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            I experimented with a role-based AI workflow to take my personal portfolio from planning to a live website in three days. The first launch was fast; the ongoing work is about improving content quality, prompts, and the process itself.
          </p>
          <Link
            href="/work/ai-assisted-portfolio"
            className="inline-flex items-center gap-3 rounded-full bg-accent-orange px-7 py-4 font-mono text-sm font-bold text-white transition-all hover:bg-foreground hover:translate-x-1"
          >
            EXPLORE THE CASE STUDY <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">My AI workflow</p>
              <p className="mt-1 text-xl font-bold text-foreground">Five tools, clear roles.</p>
            </div>
            <span className="rounded-full border border-accent-orange/30 bg-accent-orange/10 px-3 py-1 font-mono text-xs text-accent-orange">3-DAY LAUNCH</span>
          </div>
          <ul className="space-y-3">
            {roles.map((item, index) => (
              <li key={item.tool} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground font-mono text-xs font-bold text-background">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground">{item.tool}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
                <span className="text-accent-orange" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted">
            AI supports the process. I remain responsible for the decisions, evaluation, and final experience.
          </p>
        </div>
      </div>
    </section>
  );
}
