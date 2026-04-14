"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path 
      ? "bg-primary text-white font-bold shadow-md" 
      : "text-on-surface-variant hover:text-primary hover:bg-surface-container font-medium";
  };

  return (
    <header className="bg-surface/80 backdrop-blur-xl sticky top-0 z-50 border-b border-outline-variant/10 shadow-sm transition-all duration-300">
      <nav className="flex justify-between items-center w-full px-6 lg:px-8 py-4 max-w-[1400px] mx-auto">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-white p-1.5 rounded relative overflow-hidden transition-transform group-hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:-translate-y-full transition-transform duration-500 ease-in-out"></div>
            <span className="material-symbols-outlined text-xl leading-none">blur_on</span>
          </div>
          <span className="text-2xl font-bold font-headline tracking-tighter text-on-surface">
            Cocogum<span className="text-primary text-3xl leading-none">.</span>
          </span>
        </Link>

        {/* Desktop Navigation (Modern Pill Center) */}
        <div className="hidden lg:flex items-center gap-1 bg-surface-container-lowest/80 p-1.5 rounded-full border border-outline-variant/20 shadow-sm backdrop-blur-sm">
          <Link href="/" className={`${isActive("/")} px-5 py-2 rounded-full text-sm transition-all`}>
            Beranda
          </Link>
          <Link href="/produk" className={`${isActive("/produk")} px-5 py-2 rounded-full text-sm transition-all`}>
            Produk
          </Link>
          <Link href="/teknologi" className={`${isActive("/teknologi")} px-5 py-2 rounded-full text-sm transition-all`}>
            Teknologi
          </Link>
          <Link href="/studi-kasus" className={`${isActive("/studi-kasus")} px-5 py-2 rounded-full text-sm transition-all`}>
            Studi Kasus
          </Link>
          <Link href="/tentang" className={`${isActive("/tentang")} px-5 py-2 rounded-full text-sm transition-all`}>
            Tentang Kami
          </Link>
        </div>

        {/* Actions (Search + Call-to-Action) */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:flex p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all rounded-full group">
            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">search</span>
          </button>
          
          <Link 
            href="/hubungi" 
            className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-container transition-all shadow-[0_4px_14px_0_rgba(0,36,22,0.2)] hover:shadow-xl hover:-translate-y-0.5 items-center gap-2 group"
          >
            Kemitraan B2B <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>

          {/* Mobile Hamburger Icon */}
          <button className="lg:hidden p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
            <span className="material-symbols-outlined text-2xl">drag_handle</span>
          </button>
        </div>

      </nav>
    </header>
  );
}
