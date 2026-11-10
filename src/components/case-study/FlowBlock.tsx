import Image from "next/image";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export interface FlowStep {
  title: string;
  description?: string;
  image: string;
  width?: number;  // opsional: ukuran asli gambar (px) agar layout tidak bergeser
  height?: number;
}

export interface FlowData {
  steps: FlowStep[];           // 2-6 langkah paling nyaman
  frame?: "plain" | "phone";   // "phone" = bingkai ponsel untuk layar mobile
}

const COLS = ["lg:grid-cols-1", "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"];

export default function FlowBlock({ data, heading }: { data: FlowData; heading?: Heading }) {
  const { steps } = data;
  const phone = data.frame === "phone";
  const showArrows = steps.length <= 4; // lebih dari 4 akan membungkus baris, panah jadi menyesatkan

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />
      <ol className={`grid gap-x-12 gap-y-14 ${COLS[Math.min(steps.length, 4)]}`}>
        {steps.map((step, i) => (
          <li key={`${i}-${step.image}`} className="relative flex flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-orange font-mono text-xs font-bold text-white">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
            </div>

            {phone ? (
              <div className="mx-auto w-full max-w-[260px] rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl">
                <div className="overflow-hidden rounded-[2rem] bg-surface">
                  <Image src={step.image} alt={step.title} width={step.width ?? 390} height={step.height ?? 844} sizes="260px" className="h-auto w-full" />
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-xl border-2 border-border bg-surface shadow-lg">
                <Image src={step.image} alt={step.title} width={step.width ?? 1280} height={step.height ?? 800} sizes="(min-width: 1024px) 33vw, 100vw" className="h-auto w-full" />
              </div>
            )}

            {step.description && <p className="mt-4 text-sm leading-relaxed text-muted">{step.description}</p>}

            {showArrows && i < steps.length - 1 && (
              <span aria-hidden className="absolute -right-9 top-1/3 hidden text-2xl text-muted lg:block">→</span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
