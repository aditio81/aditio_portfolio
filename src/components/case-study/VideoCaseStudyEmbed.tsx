interface Props {
  videoId: string; // YouTube Video ID (contoh: "dQw4w9WgXcQ")
  title?: string;
}

export default function VideoCaseStudyEmbed({ videoId, title }: Props) {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        {/* YouTube Embed Container dengan Aspect Ratio 16:9 */}
        <div className="relative w-full aspect-video bg-[#1B1B1D] rounded-xl overflow-hidden border-2 border-[#1B1B1D] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title || "Case Study Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}