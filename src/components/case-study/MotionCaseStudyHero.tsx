import Link from "next/link";

export interface MotionCaseStudyData {
  slug: string;
  projectTitle: string;
  role: string;
  year: string;
  tools?: string[]; // Opsional: misal ["Lottie", "After Effects"]
  description: string; // 1-2 kalimat singkat
}

interface Props {
  data: MotionCaseStudyData;
}

export default function MotionCaseStudyHero({ data }: Props) {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 container mx-auto px-6">
      
      {/* 2. Konten Teks Minimalis */}
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-[0.95]">
          {data.projectTitle}
        </h1>
        
        {/* Meta Info Row */}
        <div className="flex flex-wrap items-center gap-4 mb-8 font-mono text-sm text-muted">
          <span>{data.year}</span>
          <span className="w-1 h-1 rounded-full bg-muted"></span>
          <span>{data.role}</span>
          {data.tools && data.tools.length > 0 && (
            <>
              <span className="w-1 h-1 rounded-full bg-muted"></span>
              <span>{data.tools.join(" • ")}</span>
            </>
          )}
        </div>

        {/* Deskripsi Singkat */}
        <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl">
          {data.description}
        </p>
      </div>

    </section>
  );
}