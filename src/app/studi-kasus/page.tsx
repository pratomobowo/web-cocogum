import React from 'react';
import Image from "next/image";

export default function StudiKasus() {
  return (
    <>
      {/* Hero Section (Beranda Aesthetic) */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagenbanner4.webp"}
             fill
             className="object-cover opacity-65"
             alt="Studi Kasus Cocogum"
             priority={true}
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="w-fit mb-6 overflow-hidden">
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                Kinerja Di Lapangan
              </span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.15] mb-8 drop-shadow-xl filter">
              Hasil Terukur. <br className="hidden md:block" />{" "}
              Operasional Nyata.
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl">
              Data rekam jejak implementasi <strong className="text-white drop-shadow-md">Cocogum Modified Organic Binder (CMOB)</strong> pada jalur produksi skala industri—tanpa melebih-lebihkan, hanya fakta rekayasa di balik penghematan energi dan stabilisasi kualitas.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Container */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 space-y-24">
          
          {/* Studi Kasus 01: Briq (Briket & Energi) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl opacity-10"></div>
                <img alt="Fasilitas Briket" className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl grayscale-[30%] border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM50B0UD4q4tnXufehxkMZVSvG4wuTz1GAQrmWxWKEwS_GhFL4B6iVeRDi1_LZ_yLAc1-HhjC6lJg0tH3rvnN_y2PX7YUbhRh9mHCJxJ5miEw5tIQ5KwdHA3yuga-LAeeuZWPOIBVH12Z-NTRPQKmUrSqP37OHoFgmsHHRoxyim8cw0T5zXSwJq15bvyzqWZRilPVyPshtMU_4soYAMF5susnN8AAoALbMragrf_fYobWWBDa-wiIuJSO9cvI2kNCCIWclz0LqTKw" />
             </div>
             <div className="order-1 lg:order-2">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">SEKTOR PEMANAS BOILER & HORECA</span>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-6">Optimalisasi Kalibrasi Panas Pabrik Briket Ekspor</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  <strong>Tantangan:</strong> Sebuah fasilitas produksi briket skala ekspor terus merugi akibat tingginya konsumsi suhu tungku oven (&gt;400&deg;C) karena menggunakan pati tapioka mentah standar yang rakus panas. Selain itu, produk mereka dinilai sangat getas (mudah hancur) selama kontainer transit di pelabuhan laut yang kelembapannya tinggi. 
                </p>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-[4px] border-primary mb-6">
                   <h4 className="font-bold text-primary mb-2">Intervensi Cocogum (Seri Briq)</h4>
                   <p className="text-on-surface-variant text-sm">Integrasi bahan bio-polimer presisi mengeleminasi waktu panggang yang berlarut, menurunkan asupan energi (suhu kalibrator) sebesar nyaris <strong className="text-on-surface">40%</strong>.</p>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded shadow-sm w-1/2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">REDUKSI ENERGI</span>
                    <span className="text-2xl font-black text-primary">-40% Panas</span>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded shadow-sm w-1/2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">KUALITAS BAKAR</span>
                    <span className="text-2xl font-black text-primary">Nir-Asap (Smokeless)</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant/80 italic font-medium">Hasil Akhir: Briket menjaga 95% kemurnian karbon pasca-suhu tanpa pelepasan gas residu beracun.</p>
             </div>
          </div>

          <hr className="border-outline-variant/10" />

          {/* Studi Kasus 02: Feed (Akuakultur) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">SEKTOR AGRO-AKUAKULTUR</span>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-6">Memutus Rantai Degradasi Air Tambak Udang Intensif</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  <strong>Tantangan:</strong> Tambak pembesaran industri bermasalah dengan pakan udang yang mudah luluh secara instan ketika dilempar ke air. Degradasi dini pakan ini merusak <em>Feed Conversion Ratio (FCR)</em> dan menumpuk sedimen beracun karsinogenik di dasar kolam, meningkatkan angka kematian udang secara artifisial.
                </p>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-[4px] border-primary mb-6">
                   <h4 className="font-bold text-primary mb-2">Intervensi Cocogum (Seri Feed)</h4>
                   <p className="text-on-surface-variant text-sm">Hanya dengan injeksi persentase minimal <strong className="text-on-surface">1-2% dosis volume</strong> pada lini pencetakan pakan, matriks pakan stabil mengunci gizi utama berkat pengikat hidro-resisten.</p>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded shadow-sm w-1/2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">STABILITAS AIR</span>
                    <span className="text-2xl font-black text-primary">+4 Jam Bertahan</span>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded shadow-sm w-1/2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">TOKSISITAS</span>
                    <span className="text-2xl font-black text-primary">Nol Absolut</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant/80 italic font-medium">Hasil Akhir: Pakan awet dicerna organisme tanpa ada ancaman racun dari bahan kimia penahan sintetis.</p>
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-primary -translate-x-4 translate-y-4 rounded-2xl opacity-10"></div>
                <img alt="Fasilitas Aqua-feed" className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl grayscale-[30%] border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRua1vEdWz65dVnwVJiUFp4rqUmMkUs5bGW1PAYTilz3bzRCw9IhpYTe-w9O8YuOFIDqxSC3nimXwskkJmbLd6YTMOPCokl78HJNpysipbkk22GE6r7wuDGkJVpIIWuIu4WaWCSQsepKp2f4ljWnO25XhbGPaVMcvvV5-o9MKsCUceT5uzyo5RoanP4U1G7opMGULCXyVtjJjs74S1A1lPoznK1wQKzqXyStk96vRSyvDIJ7lCNsRdCUhifXWg1d65_2idiUG2F0" />
             </div>
          </div>

          <hr className="border-outline-variant/10" />

          {/* Studi Kasus 03: Coal (Tambang Logistik) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl opacity-10"></div>
                <img alt="Logistik Batubara" className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl grayscale-[30%] border border-outline-variant/20" src="/imagecoal.webp" />
             </div>
             <div className="order-1 lg:order-2">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">SEKTOR LOGISTIK RAW MATERIAL</span>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-6">Navigasi Regulasi ESG Lewat Penekan Debu Industri</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                  <strong>Tantangan:</strong> Fasilitas pemuatan pelabuhan kargo (*bulk loading*) terus digempur regulasi lingkungan ekstrateritorial karena tebaran debu silika (*dust dispersion*) di udara sangat mencekik jarak pandang pekerja logistik dan mengancam keamanan K3 paru-paru.
                </p>
                <div className="bg-surface-container-low p-6 rounded-xl border-l-[4px] border-primary mb-6">
                   <h4 className="font-bold text-primary mb-2">Intervensi Cocogum (Seri Coal)</h4>
                   <p className="text-on-surface-variant text-sm">Dispersi pelapis <em>anti-dust suppressant</em> botani organik kita dikabutkan pada laju *conveyor* pemuatan, dengan agresif mengaglomerasi (menggumpalkan) partikel tersuspensi berukuran ekstrem (<strong className="text-on-surface">&lt; 5 micron</strong>).</p>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded shadow-sm w-1/2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">LAPORAN ESG</span>
                    <span className="text-2xl font-black text-primary">Sesuai (CBAM)</span>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded shadow-sm w-1/2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1">KEAMANAN NAFAS</span>
                    <span className="text-2xl font-black text-primary">100% Bebas VOC</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant/80 italic font-medium">Hasil Akhir: Skor ESG logistik terlindungi kuat; polusi partikel menurun tajam di zona pelabuhan transit ekspor.</p>
             </div>
          </div>

        </div>
      </section>

      {/* Trust Sign off Action */}
      <section className="bg-primary py-24 text-center px-8 border-t-[8px] border-surface">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-white mb-6">Apakah Fasilitas Anda Berikutnya?</h2>
            <p className="text-on-primary-container text-xl opacity-90 mb-10 leading-relaxed">
               Hilangkan batas efisiensi energi mekanik tanpa residu emisi perusak lingkungan. Laboratorium B2B kami siap mendemonstrasikan prototipe skala terbatas di lokasi pengerjaan Anda.
            </p>
            <a href="/hubungi" className="bg-white text-primary px-10 py-5 rounded-lg font-bold hover:bg-surface-lowest transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 text-lg">
               Undang Teknisi Ahli Kami <span className="material-symbols-outlined pb-0.5">engineering</span>
            </a>
         </div>
      </section>
    </>
  );
}
