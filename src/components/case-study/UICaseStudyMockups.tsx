import Image from "next/image";
import type { Heading } from "@/content/types";
import SectionHeading from "./SectionHeading";

export interface MockupData {
  // "stacked": layar lebar penuh satu per satu (web, dashboard, landing page)
  // "device-row": beberapa layar mobile berdampingan dalam bingkai ponsel
  layout?: "stacked" | "device-row";
  pages: PageMockup[];
}

export interface PageMockup {
  title: string;
  description?: string;
  image: string;
  label?: string;     // teks bebas, contoh: "Homepage", "Checkout", "Dashboard"
  highlight?: string; // sorotan fitur, opsional
  width?: number;     // opsional: ukuran asli gambar (px) agar layout tidak bergeser saat memuat
  height?: number;
}

interface Props {
  data: MockupData;
  heading?: Heading;
}

export default function UICaseStudyMockups({ data, heading }: Props) {
  const layout = data.layout ?? "stacked";

  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <SectionHeading heading={heading} />

      {layout === "stacked" ? (
        <div className="space-y-16">
          {data.pages.map((page, i) => (
            <StackedItem key={page.image} page={page} index={i} />
          ))}
        </div>
      ) : (
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {data.pages.map((page) => (
            <DeviceItem key={page.image} page={page} />
          ))}
        </div>
      )}
    </section>
  );
}

function Label({ children }: { children: string }) {
  return (
    <span className="rounded-md bg-accent-orange px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
      {children}
    </span>
  );
}

// === Layout 1: layar lebar penuh ===
function StackedItem({ page, index }: { page: PageMockup; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className={`group ${flip ? "lg:pl-24" : ""}`}>
      <div className={`mb-6 flex items-center gap-3 ${flip ? "lg:flex-row-reverse lg:text-right" : ""}`}>
        {page.label && <Label>{page.label}</Label>}
        <div className="h-px grow bg-border" />
        <h3 className="text-2xl font-bold text-foreground">{page.title}</h3>
      </div>

      {page.description && <p className="mb-8 max-w-2xl leading-relaxed text-muted">{page.description}</p>}

      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-accent-orange/10 via-accent-purple/10 to-blue-600/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-xl">
          <Image
            src={page.image}
            alt={page.title}
            width={page.width ?? 1600}
            height={page.height ?? 1000}
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
          />
          {page.highlight && (
            <div className="absolute right-6 top-6 rounded-lg bg-foreground px-4 py-2 font-mono text-xs font-bold text-background shadow-lg">
              ✦ {page.highlight}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// === Layout 2: layar mobile dalam bingkai ponsel ===
function DeviceItem({ page }: { page: PageMockup }) {
  return (
    <figure className="flex flex-col items-center">
      <div className="w-full max-w-[280px] rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl">
        <div className="overflow-hidden rounded-[2rem] bg-surface">
          <Image
            src={page.image}
            alt={page.title}
            width={page.width ?? 390}
            height={page.height ?? 844}
            sizes="280px"
            className="h-auto w-full"
          />
        </div>
      </div>
      <figcaption className="mt-6 w-full max-w-[280px]">
        {page.label && <Label>{page.label}</Label>}
        <h3 className="mt-3 text-lg font-bold text-foreground">{page.title}</h3>
        {page.description && <p className="mt-2 text-sm leading-relaxed text-muted">{page.description}</p>}
        {page.highlight && <p className="mt-3 font-mono text-xs font-bold text-accent-orange">✦ {page.highlight}</p>}
      </figcaption>
    </figure>
  );
}
