"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const sliderData = [
  {
    id: "briq",
    title: "Revolusi Perekat Organik: Kuat, Alami, dan Berkelanjutan.",
    tagline: "Cocogum BRIQ — Binder Briket Organik",
    description:
      "Cocogum adalah solusi binder ramah lingkungan berperforma tinggi untuk berbagai kebutuhan industri—mulai dari briket hingga pakan ternak. Hemat biaya, bebas kimia berbahaya.",
    bgImage:
      "/imagehero1.webp",
    linkUrl: "/produk",
  },
  {
    id: "coal",
    title: "Binder Coal Fines untuk Industri Tambang Batubara",
    tagline: "Cocogum COAL — Zero Waste Mining",
    description:
      "Ubah debu batubara (coal fines) menjadi briket energi kalori tinggi. Kurangi limbah tambang, penuhi target ESG perusahaan.",
    bgImage:
      "/imagehero2.webp",
    linkUrl: "/produk",
  },
  {
    id: "feed",
    title: "Perekat Pelet Pakan Ikan, Udang & Unggas",
    tagline: "Cocogum FEED — Binder Pakan Organik",
    description:
      "Pelet tidak hancur di air, 100% organik bebas toksin. Kurangi food waste dan tingkatkan efisiensi FCR pakan ternak Anda.",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtRua1vEdWz65dVnwVJiUFp4rqUmMkUs5bGW1PAYTilz3bzRCw9IhpYTe-w9O8YuOFIDqxSC3nimXwskkJmbLd6YTMOPCokl78HJNpysipbkk22GE6r7wuDGkJVpIIWuIu4WaWCSQsepKp2f4ljWnO25XhbGPaVMcvvV5-o9MKsCUceT5uzyo5RoanP4U1G7opMGULCXyVtjJjs74S1A1lPoznK1wQKzqXyStk96vRSyvDIJ7lCNsRdCUhifXWg1d65_2idiUG2F0",
    linkUrl: "/produk",
  },
];

export default function HeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % sliderData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIdx((p) => (p + 1) % sliderData.length);
  const prevSlide = () => setCurrentIdx((p) => (p - 1 + sliderData.length) % sliderData.length);
  const goToSlide = (idx: number) => setCurrentIdx(idx);

  return (
    <div className="relative w-full h-[80vh] min-h-[700px] overflow-hidden bg-black group">
      
      {/* Slider Track Horizontal */}
      <div 
        className="flex w-full h-full will-change-transform"
        style={{ 
           transform: `translateX(-${currentIdx * 100}%) translateZ(0)`,
           transition: "transform 1.8s cubic-bezier(0.77, 0, 0.175, 1)"
        }}
      >
        {sliderData.map((data, idx) => (
          <div key={data.id} className="relative w-full h-full flex-shrink-0 group/slide">
            {/* Background Image per slide dengan overlay Hitam Elegan */}
            <div className="absolute inset-0 bg-black z-0 overflow-hidden">
               <Image
                 src={data.bgImage}
                 fill
                 className="object-cover opacity-50"
                 alt={data.title}
                 priority={idx === 0}
                 sizes="100vw"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Slider Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
              <div 
                 className={`max-w-2xl transition-all duration-[1200ms] ${
                   idx === currentIdx 
                     ? "opacity-100 translate-y-0 delay-500" 
                     : "opacity-0 translate-y-24"
                 }`}
              >
                <div className="w-fit mb-6 overflow-hidden">
                  <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {data.tagline}
                  </span>
                </div>
                <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-white tracking-tight leading-[1.15] mb-6 drop-shadow-xl filter">
                  {data.title}
                </h1>
                <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl">
                  {data.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={data.linkUrl}
                    className="bg-primary-fixed text-on-primary-fixed px-8 py-4 font-bold rounded hover:bg-white transition-all transform active:scale-95 duration-200 shadow-2xl flex items-center gap-2 group/btn"
                  >
                    Pelajari Solusi <span className="material-symbols-outlined text-xl transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </Link>
                  <Link
                    href="/hubungi"
                    className="border border-white/20 bg-black/10 backdrop-blur-md text-white px-8 py-4 font-bold rounded hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    Konsultasi B2B
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/20 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Navigation Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {sliderData.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIdx 
                ? "w-8 h-2 bg-primary-fixed" 
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
    </div>
  );
}
