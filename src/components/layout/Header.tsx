"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path 
      ? "bg-primary text-white font-bold shadow-md" 
      : "text-on-surface-variant hover:text-primary hover:bg-surface-container font-medium";
  };

  const menuLinks = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Teknologi", href: "/teknologi" },
    { name: "Studi Kasus", href: "/studi-kasus" },
    { name: "Tentang Kami", href: "/tentang" },
  ];

  return (
    <>
      <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 border-b border-outline-variant/10 shadow-sm transition-all duration-300">
        <nav className="flex justify-between items-center w-full px-6 lg:px-8 py-4 max-w-[1400px] mx-auto">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-1.5 group z-[60]">
            <Image 
              src="/logo-cocogum.webp" 
              alt="Cocogum Logo" 
              width={40} 
              height={40} 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-2xl font-bold font-headline tracking-tighter text-on-surface uppercase">
              Cocogum<span className="text-primary text-3xl leading-none">.</span>
            </span>
          </Link>

          {/* Desktop Navigation (Modern Pill Center) */}
          <div className="hidden lg:flex items-center gap-1 bg-surface-container-lowest/80 p-1.5 rounded-full border border-outline-variant/20 shadow-sm backdrop-blur-sm">
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`${isActive(link.href)} px-5 py-2 rounded-full text-sm transition-all`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions (Search + Call-to-Action) */}
          <div className="flex items-center gap-2 sm:gap-4 z-[60]">
            <button className="hidden sm:flex p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all rounded-full group">
              <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">search</span>
            </button>
            
            <Link 
              href="/hubungi" 
              className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-container transition-all shadow-[0_4px_14px_0_rgba(0,74,150,0.2)] hover:shadow-xl hover:-translate-y-0.5 items-center gap-2 group"
            >
              Kemitraan B2B <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>

            {/* Mobile Hamburger Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[32px] leading-none">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content Slide */}
        <div 
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-surface shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-24 flex-1">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold text-primary/50 uppercase tracking-[0.3em] mb-4 pl-4">Menu Utama</p>
              {menuLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${
                    pathname === link.href 
                      ? "bg-primary/10 text-primary font-bold translate-x-2" 
                      : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`}
                >
                  <span className="text-lg">{link.name}</span>
                  <span className="material-symbols-outlined text-primary/30">chevron_right</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile CTA at Bottom */}
          <div className="p-8 border-t border-outline-variant/10 bg-surface-container-low">
            <Link 
              href="/hubungi" 
              className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
            >
              Kemitraan B2B <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <p className="text-center text-[11px] text-on-surface-variant mt-6 opacity-60">Cocogum Industrial &copy; 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
