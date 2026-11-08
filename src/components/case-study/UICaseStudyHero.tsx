import Image from "next/image";

export interface UICaseStudyData {
  slug: string;
  clientName: string;
  projectTitle: string;
  role: string;
  year: string;
  duration: string;
  stack: string[];
  oneLiner: string;
  heroImage: string;
}

interface Props {
  data: UICaseStudyData;
}

export default function UICaseStudyHero({ data }: Props) {
  return (
    <section className="container mx-auto px-6 pb-20 md:pb-28">
      <div className="mb-10 max-w-4xl">
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent-orange">
          {data.clientName} / Case Study
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tighter text-foreground md:text-7xl">
          {data.projectTitle}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
          {data.oneLiner}
        </p>
      </div>

      <div className="mb-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Role</p>
          <p className="font-medium text-foreground">{data.role}</p>
        </div>
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Year / Duration</p>
          <p className="font-medium text-foreground">{data.year} / {data.duration}</p>
        </div>
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">Tools</p>
          <p className="font-medium text-foreground">{data.stack.join(" · ")}</p>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface">
        <Image
          src={data.heroImage}
          alt={`${data.clientName} — ${data.projectTitle}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
