"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const sliderData = [
  {
    id: "briq",
    title: "Perekat Briket & Energi",
    tagline: "Vertikal Briq",
    description:
      "Perekat organik kelas ekspor penyokong pembakaran tanpa asap dan 95% retensi padatan (fixed carbon).",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBM50B0UD4q4tnXufehxkMZVSvG4wuTz1GAQrmWxWKEwS_GhFL4B6iVeRDi1_LZ_yLAc1-HhjC6lJg0tH3rvnN_y2PX7YUbhRh9mHCJxJ5miEw5tIQ5KwdHA3yuga-LAeeuZWPOIBVH12Z-NTRPQKmUrSqP37OHoFgmsHHRoxyim8cw0T5zXSwJq15bvyzqWZRilPVyPshtMU_4soYAMF5susnN8AAoALbMragrf_fYobWWBDa-wiIuJSO9cvI2kNCCIWclz0LqTKw",
    linkUrl: "/produk",
  },
  {
    id: "coal",
    title: "Karbon Aktif & Filtrasi",
    tagline: "Vertikal Lingkungan",
    description:
      "Mengaglomerasi partikel dan membungkam debu silika beracun tanpa merusak tingkat Iodine bahan murni tambang.",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZZkJB4zezNOQ3KEBahQaFjt8qAsdasnwLtokxRhKLYTERndIvNI-Als4U487SxVSYqzG2beOnbiMAi8Z9pqgIHH1GqLAg8yWXapOuH6oj6KJJNuYGzpM9fgCzREPlL2Ikzks10_D8c_J0Zms7DHhPgEKT4hjTmn_qjY53RELzHbyeuVkYp_5cPmpKguQioTKpPZbNzoyPGaYn_Q4_7LpyPUlyJPr0yFWTwJ4ac-we6oKVUKXYzo2UouCXshu7I_Bqo-2gCYiQoLQ",
    linkUrl: "/produk",
  },
  {
    id: "feed",
    title: "Presisi Akuakultur",
    tagline: "Vertikal Agro-Feed",
    description:
      "Binder nutrisi tanpa toksin dengan jaminan stabilitas ekstrem di perairan untuk menekan lost feeding rate.",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtRua1vEdWz65dVnwVJiUFp4rqUmMkUs5bGW1PAYTilz3bzRCw9IhpYTe-w9O8YuOFIDqxSC3nimXwskkJmbLd6YTMOPCokl78HJNpysipbkk22GE6r7wuDGkJVpIIWuIu4WaWCSQsepKp2f4ljWnO25XhbGPaVMcvvV5-o9MKsCUceT5uzyo5RoanP4U1G7opMGULCXyVtjJjs74S1A1lPoznK1wQKzqXyStk96vRSyvDIJ7lCNsRdCUhifXWg1d65_2idiUG2F0",
    linkUrl: "/produk",
  },
  {
    id: "mosq",
    title: "Resin Proteksi Udara",
    tagline: "Vertikal Mosq",
    description:
      "Medium perlindungan nyamuk bakar bersih emisi. Terarsitektur agar memperlambat titik penguapan senyama aktif.",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB08ETZXHq_eK4SKR1QQPs-rdcKCle7KVS7izBoqzAb6jjq7K9aB1L6St2PflCDRbhakZ49RUJduZIooWaJI9FAK9eZJvfwNKhsJHKhEP_Xqa65SIjf3QdYWa1x6gvADQrVv6VamEvNMRNLhYXKP_CvUrhTjLnxj6DqlF-pZp7G6EOUbYBzhVBtmBsaWkSgvC02DVMwA75LwvWRYxcv6nIEQsXsDIhDMvvywKhd71a0uazOw4MRuxidL5jLbNHIPvhqDfhm5I50u00",
    linkUrl: "/produk",
  },
  {
    id: "agro",
    title: "Substrat Cerdas",
    tagline: "Vertikal Hortikultura",
    description:
      "Modulator hidrasi bertahap. Rekayasa gambut (peat) terstandar karantina nabati untuk manajemen air radikal.",
    bgImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6c4A2Nd0fNgQzZLoiEk0FOebuc3TMQSzU8YBow1rRZUJImcApGCUU0GOOA8c0UOnArvfKJrtxcsQ_dLOcQDwd9eLAg7W4CV2tojDxzqkC2_nXnxO4OrcSa2-eSB7iKWUPS46bn_1aTfmrcxsoKxWYqyHW9E_WCze-YqFZrKNHs2PzyGK3406PLBhGYTQ-KDSyHUVOTsAbaqXmUIo4wBItg2BqPBOa8yAo7_Truh45yUnICjJaeP2rv2CQ0lyccouiUGIvMI2pirI",
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
                 className={`object-cover opacity-50 grayscale-[20%] transition-transform duration-[8000ms] ease-out will-change-transform ${idx === currentIdx ? "scale-105" : "scale-100"}`}
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
