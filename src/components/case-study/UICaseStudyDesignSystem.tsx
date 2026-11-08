"use client";

import { useState } from "react";

export default function UICaseStudyDesignSystem() {
  const [activeTab, setActiveTab] = useState<"tokens" | "components">("tokens");

  return (
    <section className="py-24 md:py-32 bg-[#FCF8FB] relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #1D1D1F 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - GJLS Style */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D1F] text-white rounded-lg border-2 border-[#1D1D1F] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] mb-6">
            <span className="font-mono text-xs font-bold">03 // DESIGN SYSTEM SPECIFICATION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#1D1D1F] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Figma Atoms & Molecules v2.4
          </h2>
          <p className="text-xl text-[#1D1D1F]/70 max-w-3xl">
            Visual documentation of the foundational tokens, typography scalings, and modular tactile components constructed for GJLS Entertainment digital ecosystem.
          </p>
        </div>

        {/* Navigation Tabs - GJLS Style */}
        <div className="flex flex-wrap gap-3 mb-12 p-3 bg-white border-2 border-[#1D1D1F] rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
          {(["tokens", "components"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-mono text-sm font-bold rounded-lg transition-all border-2 ${
                activeTab === tab
                  ? "bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                  : "bg-white text-[#1D1D1F] border-[#1D1D1F] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white border-2 border-[#1D1D1F] rounded-2xl p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
          {activeTab === "tokens" && <TokensSection />}
          {activeTab === "components" && <ComponentsSection />}
        </div>
      </div>
    </section>
  );
}

// === SECTION: TOKENS ===
function TokensSection() {
  const colors = [
    { name: "Warm Canvas", hex: "#F6F4ED", role: "CANVAS GROUND", bg: "bg-[#F6F4ED]", border: "border-gray-300", contrast: "AAA 14.8:1" },
    { name: "Deep Charcoal", hex: "#1D1D1F", role: "3PX-4PX STROKES", bg: "bg-[#1D1D1F]", border: "border-gray-800", contrast: "CORE 21:1" },
    { name: "Electric Pink", hex: "#EF476F", role: "PRIMARY PUNCH", bg: "bg-[#EF476F]", border: "border-pink-500", contrast: "AAA 7.4:1" },
    { name: "Indo Studio Teal", hex: "#4A7C8C", role: "SECONDARY FOCUS", bg: "bg-[#4A7C8C]", border: "border-teal-600", contrast: "AAA 7.9:1" },
    { name: "Mustard Yellow", hex: "#FFD166", role: "CERTIFICATE CALLOUT", bg: "bg-[#FFD166]", border: "border-yellow-400", contrast: "AAA 9.8:1" },
  ];

  return (
    <div className="space-y-12">
      {/* Color Tokens */}
      <div>
        <h3 className="font-mono text-sm font-bold text-[#1D1D1F] mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span className="w-3 h-3 rounded-full bg-[#EF476F]"></span>
          01 // COLOR TOKENS & CONTRAST RATIO
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {colors.map((color, idx) => (
            <div 
                key={idx} 
                className={`border-2 border-[#1D1D1F] rounded-xl p-4 ${color.bg} relative shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] ${
                color.hex === '#1D1D1F' ? 'text-white' : 'text-[#1D1D1F]'
                }`}
            >
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#1D1D1F] text-white text-[10px] font-mono font-bold rounded">
                {color.contrast}
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#1D1D1F] mb-3 flex items-center justify-center">
                <div className={`w-8 h-8 rounded-full ${color.bg} border-2 border-[#1D1D1F]`}></div>
                </div>
                <h4 className="font-bold text-sm mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {color.name}
                </h4>
                <p className="font-mono text-[10px] opacity-70 mb-3">HEX: {color.hex}</p>
                <div className="pt-3 border-t-2 border-current opacity-20">
                <span className="font-mono text-[10px] font-bold">{color.role}</span>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* Typography System */}
      <div>
        <h3 className="font-mono text-sm font-bold text-[#1D1D1F] mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span className="w-3 h-3 rounded-full bg-[#4A7C8C]"></span>
          02 // TYPOGRAPHY SYSTEM & HIERARCHY
        </h3>
        
        <div className="border-2 border-[#1D1D1F] rounded-xl p-6 bg-[#FCF8FB] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[#1D1D1F]/70">PRIMARY DISPLAY TYPEFACE</span>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white border-2 border-[#1D1D1F] rounded text-xs font-mono">Bold 700</span>
              <span className="px-2 py-1 bg-white border-2 border-[#1D1D1F] rounded text-xs font-mono">Medium 500</span>
            </div>
          </div>
          <h4 className="text-3xl font-bold text-[#1D1D1F] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Space Grotesk</h4>
          <div className="p-4 bg-white border-2 border-[#1D1D1F] rounded-lg mb-6">
            <p className="font-mono text-lg text-[#1D1D1F]">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="font-mono text-lg text-[#1D1D1F]">abcdefghijklmnopqrstuvwxyz 0123456789 #@!%&?*</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 bg-white border-2 border-[#1D1D1F] rounded-lg">
              <span className="font-mono text-[10px] text-[#1D1D1F]/70 block mb-1">DISPLAY</span>
              <span className="font-bold text-[#1D1D1F]" style={{ fontFamily: 'Space Grotesk', fontSize: '24px' }}>56px</span>
            </div>
            <div className="p-3 bg-white border-2 border-[#1D1D1F] rounded-lg">
              <span className="font-mono text-[10px] text-[#1D1D1F]/70 block mb-1">HEADLINE 1</span>
              <span className="font-bold text-[#1D1D1F]" style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }}>36px</span>
            </div>
            <div className="p-3 bg-white border-2 border-[#1D1D1F] rounded-lg">
              <span className="font-mono text-[10px] text-[#1D1D1F]/70 block mb-1">BODY</span>
              <span className="font-bold text-[#1D1D1F]" style={{ fontFamily: 'Space Grotesk', fontSize: '16px' }}>16px</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentsSection() {
  return (
    <div className="space-y-8">
      <h3 className="font-mono text-sm font-bold text-[#1B1B1D] mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        <span className="w-3 h-3 rounded-full bg-[#FD5179]"></span>
        03 // MODULAR COMPONENT SYSTEM (FIGMA ATOMS & MOLECULES)
      </h3>

      {/* Grid Kiri-Kanan: Buttons & Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ========================================== */}
        {/* COMPONENT A: NEO-BRUTALIST BUTTONS         */}
        {/* ========================================== */}
        <div className="border-2 border-[#1B1B1D] rounded-xl p-6 bg-[#FCF8FB] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-[#1B1B1D]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>COMPONENT A // NEO-BRUTALIST BUTTONS</h4>
            <span className="font-mono text-xs text-[#1B1B1D]/70">State: Default / Pressed</span>
        </div>
        
        <div className="flex flex-col gap-3">
            <button className="w-full px-6 py-3 bg-[#FD5179] text-white font-bold rounded-lg border-2 border-[#1B1B1D] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ▶ TONTON SEKARANG
            </button>
            <button className="w-full px-6 py-3 bg-[#4A7C8C] text-white font-bold rounded-lg border-2 border-[#1B1B1D] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ↓ PODCAST AUDIO
            </button>
            <button className="w-full px-6 py-3 bg-[#FFDF9B] text-[#1B1B1D] font-bold rounded-lg border-2 border-[#1B1B1D] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            🎟 BELI TIKET SHOW
            </button>
            <button className="w-full px-6 py-3 bg-white text-[#1B1B1D] font-bold rounded-lg border-2 border-[#1B1B1D] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ⊘ SIMULATED PRESS
            </button>
        </div>
        </div>

        {/* ========================================== */}
        {/* COMPONENT B: BADGES                        */}
        {/* ========================================== */}
        <div className="border-2 border-[#1B1B1D] rounded-xl p-6 bg-[#FCF8FB] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-[#1B1B1D]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>COMPONENT B // BADGES</h4>
            <span className="font-mono text-xs text-[#1B1B1D]/70">Common Usage Patterns</span>
        </div>

        <div className="flex flex-col gap-6">
            {/* 1. ROUNDED RECTANGLE - Untuk Section Headers */}
            <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] text-[#1B1B1D]/60">Section Header (Large)</span>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#4A7C8C] border-2 border-[#1B1B1D] rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1B1B1D" stroke="#1B1B1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-bold text-white text-base" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KATALOG KONTEN GJLS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1B1B1D" stroke="#1B1B1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            </div>

            {/* 2. PILL - Untuk Cards */}
            <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] text-[#1B1B1D]/60">Card Label (Medium)</span>
            <div className="inline-flex items-center justify-center px-5 py-2 bg-[#FD5179] border-2 border-[#1B1B1D] rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-bold text-white text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FILM PENDEK</span>
            </div>
            </div>

            {/* 3. CIRCLE - Untuk Dekorasi */}
            <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] text-[#1B1B1D]/60">Accent/Decorative</span>
            <div className="w-14 h-14 flex items-center justify-center bg-[#FFDF9B] border-2 border-[#1B1B1D] rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#1B1B1D" stroke="#1B1B1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            </div>
        </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* COMPONENT C: CARDS                         */}
      {/* ========================================== */}
      <div className="border-2 border-[#1B1B1D] rounded-xl p-6 bg-[#FCF8FB] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-bold text-[#1B1B1D]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            COMPONENT C // CARDS
          </h4>
          <span className="font-mono text-xs text-[#1B1B1D]/70">3 Core Patterns</span>
        </div>

        {/* Grid 3 Kolom - Semua Kartu Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: Film Short Card */}
          <div className="h-fit self-start bg-white border-2 border-[#1B1B1D] rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-white border-2 border-[#1B1B1D] rounded-lg font-mono text-xs font-bold text-[#1B1B1D] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                2020
              </span>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#FD5179]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span className="font-mono text-xs font-bold text-[#FD5179]">12 MENIT</span>
              </div>
            </div>

            <div className="relative w-full aspect-video bg-linear-to-br from-[#4A7C8C] to-[#1B1B1D] rounded-lg overflow-hidden border-2 border-[#1B1B1D] mb-3">
              <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded flex items-center justify-center border border-[#1B1B1D]">
                <span className="text-[#1B1B1D] font-bold text-[10px]">M</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  KUYUP
                </span>
              </div>
            </div>

            <h5 className="font-bold text-[#1B1B1D] text-base mb-1 uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              KUYUP
            </h5>
            <p className="text-xs text-[#1B1B1D]/70 leading-relaxed">
              Kisah kehujanan di halte reot yang menguji batas kesabaran tiga sahabat.
            </p>
          </div>

          {/* CARD 2: Team/Crew Card */}
          <div className="h-fit self-start bg-white border-2 border-[#1B1B1D] rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
            <div className="inline-flex items-center px-3 py-1 bg-[#4A7C8C] border-2 border-[#1B1B1D] rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-3">
              <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wide">SOCMED SPECIALIST</span>
            </div>

            <div className="relative w-full aspect-square bg-linear-to-br from-gray-200 to-gray-400 rounded-lg overflow-hidden border-2 border-[#1B1B1D] mb-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#1B1B1D]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            <div className="inline-flex items-center px-3 py-1 bg-[#FFDF9B] border-2 border-[#1B1B1D] rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-bold text-[#1B1B1D] text-xs" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Bilqis Safra</span>
            </div>
          </div>

          {/* CARD 3: Merchandise Card (AC ANGET) */}
          <div className="h-fit self-start bg-white border-2 border-[#1B1B1D] rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="relative w-full aspect-3/4 bg-linear-to-br from-purple-200 via-purple-300 to-purple-400 rounded-lg overflow-hidden border-2 border-[#1B1B1D] mb-4">
            </div>

            <h5 className="font-bold text-[#1B1B1D] text-base mb-0.5 uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              AC ANGET
            </h5>
            <p className="text-xs text-[#1B1B1D]/70 mb-3">
              Vol 2 (Edisi Restock)
            </p>

            <div className="flex items-center justify-between mt-auto pt-3 border-t-2 border-[#1B1B1D]/10">
              <div>
                <div className="font-mono text-[10px] text-[#1B1B1D]/60">HARGA</div>
                <div className="font-bold text-[#1B1B1D] text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>RP240.000</div>
              </div>
              <button className="px-4 py-2 bg-[#C41E3A] text-white font-bold text-xs rounded-lg border-2 border-[#1B1B1D] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                CHECKOUT
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
