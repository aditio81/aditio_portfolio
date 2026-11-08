import Image from "next/image";

export interface MockupData {
  pages: PageMockup[];
}

export interface PageMockup {
  title: string;
  description: string;
  image: string;
  category: "Homepage" | "Inner Page" | "Feature" | "Partnership";
  highlight?: string; // Optional: untuk menyoroti fitur khusus
}

interface Props {
  data: MockupData;
}

export default function UICaseStudyMockups({ data }: Props) {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6">
      {/* Section Header */}
      <div className="mb-16">
        <span className="font-mono text-xs text-muted tracking-widest uppercase block mb-4">
          04 // Final Mockups & Page Showcase
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4">
          From System to Reality.
        </h2>
        <p className="text-xl text-muted max-w-3xl">
          The complete digital ecosystem—each page designed with intention, consistency, and the signature GJLS absurdity.
        </p>
      </div>

      {/* Mockup Gallery */}
      <div className="space-y-16">
        {data.pages.map((page, index) => (
          <MockupBlock key={index} mockup={page} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 pt-16 border-t-2 border-border text-center">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Want to see more details?
        </h3>
        <p className="text-muted mb-8 max-w-2xl mx-auto">
          This case study showcases the key pages and components. The complete design system includes 40+ screens, 150+ components, and extensive documentation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://www.figma.com/proto/eFQk4QzNOsLDAfOKfhzr2D/GJLS?page-id=55%3A295%3Fnode-id%3D165-2158%3Fviewport%3D137%2C150%2C0.11&t=KvXUT0lIBnseQqeR-1&scaling=min-zoom&content-scaling=fixed&node-id=165-2158"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent-orange text-white font-mono text-sm rounded-full hover:bg-foreground transition-colors"
          >
            VIEW FIGMA FILE ↗
          </a>
          <a 
            href="https://gjls-portfolio.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-foreground text-foreground font-mono text-sm rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            VISIT LIVE SITE ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// === Individual Mockup Block ===
function MockupBlock({ mockup, index }: { mockup: PageMockup; index: number }) {
  const categoryColors = {
    "Homepage": "bg-accent-orange",
    "Inner Page": "bg-accent-purple",
    "Feature": "bg-blue-600",
    "Partnership": "bg-green-600",
  };

  return (
    <div className={`group ${index % 2 === 1 ? "lg:pl-24" : ""}`}>
      {/* Category Badge & Title */}
      <div className={`flex items-center gap-3 mb-6 ${index % 2 === 1 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
        <span className={`px-3 py-1 ${categoryColors[mockup.category]} text-white text-xs font-mono font-bold rounded-md uppercase tracking-wider`}>
          {mockup.category}
        </span>
        <div className="h-px grow bg-border"></div>
        <h3 className="text-2xl font-bold text-foreground">{mockup.title}</h3>
      </div>

      {/* Description */}
      <p className="text-muted leading-relaxed mb-8 max-w-2xl">
        {mockup.description}
      </p>

      {/* Mockup Image Container */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-linear-to-r from-accent-orange/10 via-accent-purple/10 to-blue-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Main Image */}
        <div className="relative bg-surface border-2 border-border rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={mockup.image}
            alt={mockup.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          
          {/* Highlight Badge (if exists) */}
          {mockup.highlight && (
            <div className="absolute top-6 right-6 px-4 py-2 bg-foreground text-background text-xs font-mono font-bold rounded-lg shadow-lg">
              ✦ {mockup.highlight}
            </div>
          )}
        </div>

        {/* Navigation Hint */}
        <div className="flex justify-center mt-6 gap-2">
          <div className="w-2 h-2 rounded-full bg-foreground"></div>
          <div className="w-2 h-2 rounded-full bg-border"></div>
          <div className="w-2 h-2 rounded-full bg-border"></div>
        </div>
      </div>
    </div>
  );
}