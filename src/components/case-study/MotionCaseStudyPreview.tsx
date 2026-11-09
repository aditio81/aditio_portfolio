"use client";

import React from "react";
import { Lottie } from "lottie-react";

// === 1. DEFINISI TIPE YANG ROBUST (Discriminated Union) ===
export type MotionPreviewData =
  | {
      type: "splash";
      lottieData: string | object;
      introLottieData?: string | object;
      backgroundColor?: string;
    }
  | {
      type: "hero";
      format: "video";
      videoSrc: string;
    }
  | {
      type: "hero";
      format?: "lottie";
      lottieData: string | object;
      backgroundColor?: string;
    }
  | {
      type: "icon";
      // PERBAIKAN: Menggunakan array untuk menampilkan multiple icons (3-6 buah)
      icons: Array<{
        name: string;
        src: string | object;
        format: "lottie" | "video";
        cardTitle?: string;
      }>;
    };

interface Props {
  data: MotionPreviewData;
}

// === 2. KOMPONEN UTAMA ===
export default function MotionCaseStudyPreview({ data }: Props) {
  return (
    <section className="py-24 md:py-32 container mx-auto px-6">
      <div className="flex justify-center">
        {/* TypeScript otomatis tahu properti apa yang tersedia di setiap blok ini */}
        
        {data.type === "splash" && (
          <SplashMockup 
            lottieData={data.lottieData} 
            introLottieData={data.introLottieData} 
          />
        )}
        
        {data.type === "hero" && data.format === "video" && (
          <HeroVideoMockup videoSrc={data.videoSrc} />
        )}
        
        {data.type === "hero" && data.format === "lottie" && (
          <HeroLottieMockup lottieData={data.lottieData} bgColor={data.backgroundColor} />
        )}

        {data.type === "icon" && (
          <IconGridMockup icons={data.icons} />
        )}
      </div>
    </section>
  );
}

// === 3. SPLASH MOCKUP (Versi Stabil Kamu) ===
function SplashMockup({
  lottieData,
  introLottieData,
}: {
  lottieData: string | object;
  introLottieData?: string | object;
}) {
  return (
    // PERBAIKAN: Gunakan arbitrary value agar tidak collapse di Tailwind default
    <div className="relative w-75 h-150">
      <div className="absolute top-1.25 left-1.25 right-1.25 bottom-1.25 rounded-[35px] overflow-hidden z-0 bg-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        {introLottieData ? (
          <SplashSequence introLottieData={introLottieData} loopLottieData={lottieData} />
        ) : (
          <Lottie src={lottieData} autoplay loop className="w-full h-full object-cover" />
        )}
      </div>
      <img 
        src="/mockups/iphone-12-pro-max--gold.svg" 
        alt="Phone Frame"
        className="absolute inset-0 w-full h-full z-10 pointer-events-none object-contain"
        style={{ filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.1))' }}
      />
    </div>
  );
}

// Helper untuk Sequence (Intro -> Loop)
function SplashSequence({
  introLottieData,
  loopLottieData,
}: {
  introLottieData: string | object;
  loopLottieData: string | object;
}) {
  const [phase, setPhase] = React.useState<"intro" | "loop">("intro");
  const [animKey, setAnimKey] = React.useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === "loop") {
      timer = setTimeout(() => {
        setPhase("intro");
        setAnimKey((prev) => prev + 1);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const handleComplete = () => {
    if (phase === "intro") {
      setPhase("loop");
      setAnimKey((prev) => prev + 1);
    }
  };

  return (
    <Lottie
      key={animKey}
      src={phase === "intro" ? introLottieData : loopLottieData}
      autoplay
      loop={phase === "loop"}
      subscriptions={{ complete: handleComplete }}
      className="w-full h-full object-cover"
    />
  );
}

// === 4. HERO VIDEO MOCKUP ===
function HeroVideoMockup({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="w-full max-w-5xl border-2 border-[#1B1B1D] rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
      <div className="h-8 bg-[#F6F4ED] border-b-2 border-[#1B1B1D] flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FD5179] border border-[#1B1B1D]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFDF9B] border border-[#1B1B1D]"></div>
        <div className="w-3 h-3 rounded-full bg-[#4A7C8C] border border-[#1B1B1D]"></div>
      </div>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

// === 5. HERO LOTTIE MOCKUP (Fallback jika pakai Lottie) ===
function HeroLottieMockup({ lottieData, bgColor = "#FCF8FB" }: { lottieData: string | object; bgColor?: string }) {
  return (
    <div 
      className="w-full max-w-5xl aspect-video border-2 border-[#1B1B1D] rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-1/2 h-1/2 flex items-center justify-center">
        <Lottie src={lottieData} autoplay loop className="w-full h-full" />
      </div>
    </div>
  );
}

// === 6. ICON GRID MOCKUP (Multiple Icons) ===
function IconGridMockup({ icons }: { icons: Array<{ name: string; src: string | object; format: "lottie" | "video"; cardTitle?: string }> }) {
  return (
    // Grid 2 Kolom, Centered, dengan max-width yang pas
    <div className="grid grid-cols-2 gap-8 max-w-3xl w-full mx-auto">
      {icons.map((icon, idx) => (
        <div 
          key={idx}
          className="bg-white border-2 border-[#1B1B1D] rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center"
        >
          {icon.cardTitle && (
            <span className="font-mono text-[10px] text-[#1B1B1D]/60 mb-4 uppercase tracking-wide">
              {icon.cardTitle}
            </span>
          )}

          {/* Area Animasi */}
          <div className="w-32 h-32 md:w-40 md:h-40 mb-4 flex items-center justify-center">
            {icon.format === "video" ? (
              <video 
                src={icon.src as string} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain" 
              />
            ) : (
              <Lottie 
                src={icon.src} 
                autoplay 
                loop 
                className="w-full h-full" 
              />
            )}
          </div>

          {/* Nama Ikon */}
          <span className="font-bold text-[#1B1B1D] text-sm text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}