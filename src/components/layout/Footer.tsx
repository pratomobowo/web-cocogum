import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-8 border-t border-white/5 relative overflow-hidden">
      {/* Background element for aesthetic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-headline font-black text-white mb-6 tracking-tight">Cocogum<span className="text-surface-tint">.</span></div>
          <p className="text-white/70 text-sm leading-relaxed">
            Pelopor teknologi pengikat polimer terdepan untuk masa depan manufaktur yang berkelanjutan. Engineering the Organic Foundry.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white/90 mb-6 uppercase tracking-widest text-xs">Navigasi</h4>
          <ul className="space-y-4 text-sm">
            <li><Link className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="/produk">Produk & Solusi</Link></li>
            <li><Link className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="/teknologi">Teknologi R&amp;D</Link></li>
            <li><Link className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="/studi-kasus">Studi Kasus</Link></li>
            <li><Link className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all" href="/tentang">Tentang Kami</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white/90 mb-6 uppercase tracking-widest text-xs">Sumber Daya</h4>
          <ul className="space-y-4 text-sm">
            <li><a className="text-white/60 hover:text-white transition-colors" href="#">Laporan ESG (CBAM)</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors" href="#">Kebijakan Privasi</a></li>
            <li><a className="text-white/60 hover:text-white transition-colors" href="#">Lembar Data Keselamatan</a></li>
            <li><Link className="text-white/60 hover:text-white transition-colors" href="/hubungi">Dukungan Kontak B2B</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white/90 mb-6 uppercase tracking-widest text-xs">Kantor Pusat Tersindikasi</h4>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">
            Distrik Logistik Sentral<br />
            Jakarta, Indonesia
          </p>
          <div className="flex gap-4 mt-6">
            <span className="material-symbols-outlined text-white/60 hover:text-white cursor-pointer hover:scale-110 transition-transform">language</span>
            <span className="material-symbols-outlined text-white/60 hover:text-white cursor-pointer hover:scale-110 transition-transform">hub</span>
            <span className="material-symbols-outlined text-white/60 hover:text-white cursor-pointer hover:scale-110 transition-transform">mail</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-white/50 text-xs font-inter antialiased">
          &copy; {new Date().getFullYear()} Cocogum Industrial. Hak Cipta Dilindungi Hukum Global.
        </div>
        <div className="flex gap-6 text-xs text-white/50 font-bold tracking-widest uppercase">
          <span>Kepatuhan Zero Waste</span>
          <span>Sertifikasi ISO 14001</span>
        </div>
      </div>
    </footer>
  );
}
