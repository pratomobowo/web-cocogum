"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end" ref={menuRef}>
      {/* Menu Options (WhatsApp & Audit) */}
      <div 
        className={`flex flex-col gap-3 mb-4 transition-all duration-300 origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-50 pointer-events-none absolute bottom-full"
        }`}
      >
        {/* Audit Option */}
        <Link 
          href="/audit"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-end gap-3 group/item w-full"
        >
          <span className="bg-surface/95 backdrop-blur-md text-on-surface text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-outline-variant/10 whitespace-nowrap block">
            Form Audit Produksi
          </span>
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-primary-container active:scale-95 transition-transform flex-shrink-0">
            <span className="material-symbols-outlined text-[22px]">assignment</span>
          </div>
        </Link>
        
        {/* WhatsApp Option */}
        <a 
          href="https://wa.me/6285117261988?text=Halo%20Tim%20Cocogum,%20saya%20tertarik%20mengajukan%20konsultasi%20B2B."
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-end gap-3 group/item w-full"
        >
          <span className="bg-surface/95 backdrop-blur-md text-on-surface text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-outline-variant/10 whitespace-nowrap block">
            Chat WhatsApp Sales
          </span>
          <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#20bd5a] active:scale-95 transition-transform flex-shrink-0">
             {/* WhatsApp SVG Icon */}
             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
             </svg>
          </div>
        </a>
      </div>

      {/* Main Trigger Button (Headset/Close) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] transform hover:scale-105 active:scale-95 transition-all duration-500 relative z-10 overflow-hidden ${
          isOpen ? "bg-surface-container-high text-on-surface w-14 rotate-90" : "bg-primary text-white hover:bg-primary-container hover:shadow-primary/30 w-[170px]"
        }`}
        aria-label="Menu Bantuan"
      >
        {/* Hubungi Kami Label */}
        <div className={`flex items-center justify-center absolute transition-all duration-500 ${isOpen ? "opacity-0 scale-50 -rotate-90" : "opacity-100 scale-100"}`}>
           <span className="material-symbols-outlined text-[26px] mr-2">headset_mic</span>
           <span className="font-bold text-sm whitespace-nowrap">Hubungi Kami</span>
        </div>
        
        {/* Close Icon */}
        <span className={`material-symbols-outlined text-[26px] absolute transition-all duration-500 ${isOpen ? "opacity-100 scale-100 -rotate-90" : "opacity-0 scale-50 rotate-90"}`}>
          close
        </span>
      </button>
    </div>
  );
}
