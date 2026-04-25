import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Cocogum — Produsen Perekat Organik dari Bandung, Jawa Barat",
  description:
    "Cocogum adalah perusahaan produsen perekat organik (organic binder) berbahan dasar batok kelapa dari Bandung. Didirikan untuk menggantikan binder sintetis berbahaya di industri briket, pakan ternak, dan tambang batubara Indonesia.",
  alternates: {
    canonical: "https://cocogum.com/tentang",
  },
  openGraph: {
    title: "Tentang Cocogum — Produsen Perekat Organik dari Bandung",
    description:
      "Kenali Cocogum: misi, visi, dan cara kami menghasilkan perekat organik kelas ekspor dari bahan alami batok kelapa untuk industri briket, pakan, dan tambang.",
    url: "https://cocogum.com/tentang",
  },
};

export default function Tentang() {
  return (
    <>
      {/* Hero Section (Beranda Aesthetic) */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagebannertentangkami.webp"}
             fill
             className="object-cover opacity-50"
             alt="Tentang Cocogum Binder Organik"
             priority={true}
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="w-fit mb-6 overflow-hidden">
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                Produsen Organic Binder Indonesia
              </span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.15] mb-8 drop-shadow-xl filter">
              Cocogum: <br className="hidden md:block" />{" "}
              Perekat Organik <br className="hidden md:block" /> dari Bandung.
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl">
              Lebih dari sekadar supplier material, <strong className="text-white drop-shadow-md">Cocogum</strong>{" "}
              adalah produsen perekat organik (<em>organic binder</em>) berbahan dasar batok kelapa dari
              Bandung, Jawa Barat. Kami menghadirkan solusi binder industri yang aman, efisien, dan bebas
              formaldehida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#filosofi"
                className="bg-primary-fixed text-on-primary-fixed px-8 py-4 font-bold rounded hover:bg-white transition-all transform active:scale-95 duration-200 shadow-2xl flex items-center gap-2 group/btn"
              >
                Pelajari Filosofi Kami <span className="material-symbols-outlined text-xl transition-transform group-hover/btn:translate-y-1">arrow_downward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofi */}
      <section id="filosofi" aria-labelledby="filosofi-heading" className="py-24 bg-surface-container-low relative">
        <div className="grain-texture absolute inset-0"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 id="filosofi-heading" className="text-4xl font-bold font-headline text-primary mb-8">
            Filosofi Cocogum: Mengubah Limbah Organik Menjadi Perekat Industri Berperforma Tinggi
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
            Selama puluhan tahun, industri briket, pakan ternak, dan pertambangan Indonesia bergantung pada
            binder sintetis berbasis minyak bumi dan urea formaldehida yang menghasilkan limbah B3 berbahaya.
            Di Cocogum, kami mengembangkan konsep <strong className="text-primary font-semibold">Organic Foundry</strong> —
            proses ekstraksi turunan batok kelapa menjadi perekat organik berperforma tinggi yang menggantikan
            binder sintetis secara penuh.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Hasilnya: perekat organik yang lebih efisien (butuh 1/3 dosis dibanding tapioka), lebih kuat,
            100% bebas formaldehida, dan mendukung komitmen keberlanjutan (ESG) industri Anda — baik
            untuk ekspor briket arang ke Timur Tengah, produksi pakan ikan dan udang, maupun pengolahan
            coal fines tambang batubara.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section aria-labelledby="misi-heading" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-sm flex flex-col justify-center transform sm:translate-y-8 hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">public</span>
                <h4 className="font-bold font-headline text-on-surface text-xl mb-2">Binder Organik Karbon Netral</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Perekat organik Cocogum berbahan baku lokal — batok kelapa dari perkebunan rakyat Indonesia —
                  meminimalisir jejak karbon dibanding binder impor sintetis.
                </p>
              </div>
              <div className="bg-primary text-white p-8 rounded-xl shadow-xl flex flex-col justify-center hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4">precision_manufacturing</span>
                <h4 className="font-bold font-headline text-white text-xl mb-2">Presisi Industri Skala Besar</h4>
                <p className="text-sm text-emerald-200/80 leading-relaxed">
                  Formulasi binder adaptif untuk berbagai suhu mesin briket, mesin pelet pakan, dan
                  kondisi pengolahan coal fines di lapangan tambang.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-sm flex flex-col justify-center sm:col-span-2 hover:-translate-y-1 transition-transform mt-4 sm:mt-8">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">compost</span>
                <h4 className="font-bold font-headline text-on-surface text-xl mb-2">Sertifikasi Ekspor & Zero Waste</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Perekat organik Cocogum 100% biodegradable setelah masa pakai — mendukung pelaporan
                  ESG dan memenuhi persyaratan kepabeanan Eropa untuk produk briket dan pakan ekspor.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 id="misi-heading" className="text-4xl font-bold font-headline text-primary mb-6">
                Misi Cocogum: Gantikan Binder Sintetis Berbahaya dengan Perekat Organik Lokal
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Kami percaya bahwa pabrik briket, produsen pakan ternak, dan perusahaan tambang di Indonesia
                tidak harus memilih antara efisiensi produksi dan keselamatan lingkungan. Perekat organik
                Cocogum hadir sebagai jawaban: performa setara binder sintetis, tanpa racun formaldehida,
                dengan harga lebih kompetitif karena berbahan baku lokal.
              </p>
              <div className="h-px bg-outline-variant/30 w-full my-8"></div>
              <h3 className="text-3xl font-bold font-headline text-primary mb-4">
                Visi: Menjadi Supplier Binder Organik Terbesar di Asia Tenggara
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Cocogum bertujuan menjadi tulang punggung industri binder organik Indonesia — menyuplai
                pabrik briket ekspor, feedmill pakan ikan dan unggas, serta perusahaan tambang batubara
                yang mencari solusi coal fines berkelanjutan di seluruh Asia Tenggara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Layanan */}
      <section aria-labelledby="proses-heading" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 id="proses-heading" className="text-4xl font-bold font-headline text-primary mb-4">
              Proses Kerjasama: Dari Konsultasi Perekat hingga Pengiriman ke Pabrik
            </h2>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto">
              Kami mendampingi mitra B2B mulai dari identifikasi kebutuhan spesifik binder organik,
              pengembangan formula kustom, hingga pengiriman massal ke pabrik briket, pakan, atau tambang Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">01</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">query_stats</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Audit Kebutuhan Binder</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Tim teknis kami mempelajari spesifikasi mesin, target kualitas produk, dan volume kebutuhan
                perekat organik untuk pabrik briket, pakan, atau tambang Anda.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">02</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">science</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Formula Binder Kustom</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Laboratorium Cocogum mengembangkan formulasi perekat organik khusus sesuai target
                kepadatan, daya rekat, dan spesifikasi teknis yang dibutuhkan mesin Anda.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">03</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">inventory_2</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Suplai Tonase Stabil</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Produksi perekat organik kapasitas besar dengan jadwal pengiriman yang terjadwal dan stabil
                — mendukung kontinyuitas operasional pabrik briket dan feedmill pakan ternak Anda.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">04</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">settings_suggest</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Pendampingan SOP Pabrik</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Tim engineer Cocogum mendampingi kalibrasi takaran dan prosedur penggunaan binder organik
                langsung di fasilitas produksi klien — memastikan hasil optimal di mesin yang sudah ada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">FAQ</span>
            <h2 id="faq-heading" className="text-4xl font-bold font-headline text-primary mb-4">
              Pertanyaan Umum tentang Perekat Organik Cocogum
            </h2>
            <p className="text-on-surface-variant text-lg">
              Jawaban lengkap seputar performa binder organik, proses order, dan kompatibilitas mesin pabrik.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Apakah perekat organik Cocogum sekuat binder sintetis (PVA / urea formaldehida)?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Ya. Perekat organik Cocogum menggunakan teknologi ikatan silang (<em>cross-linking</em>)
                dari selulosa batok kelapa yang menghasilkan kekuatan geser setara atau lebih baik dari
                urea formaldehida — namun 100% bebas VOC beracun, aman bagi operator pabrik, dan tidak
                menghasilkan limbah B3.
              </p>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Berapa lama proses dari konsultasi hingga pengiriman perekat organik ke pabrik?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Proses standar kami: konsultasi dan audit kebutuhan (1–2 hari kerja) → pengembangan sampel
                binder kustom (10–14 hari) → uji coba di mesin pabrik → persetujuan formula → produksi dan
                pengiriman massal (21 hari untuk pengiriman dalam negeri, dapat disesuaikan untuk ekspor).
              </p>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Apakah Cocogum FEED aman sebagai binder pakan ikan dan udang (food grade)?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Ya, 100% aman. Bahan baku perekat organik Cocogum FEED berasal dari turunan batok kelapa
                dan pati nabati yang memenuhi standar <em>food grade</em> — bebas toksin, non-karsinogenik,
                dan aman dikonsumsi ikan, udang vaname, maupun unggas. Cocok untuk pabrik pakan yang
                mengekspor ke pasar yang mensyaratkan bebas bahan kimia berbahaya.
              </p>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Apakah ada dukungan teknis setelah pembelian binder organik?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Ya. Layanan after-sales Cocogum mencakup pendampingan kalibrasi dosis dan SOP penggunaan
                perekat organik di mesin pabrik klien — baik onsite di Bandung maupun secara remote untuk
                mitra di luar Jawa Barat atau internasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <h2 className="text-4xl font-extrabold font-headline text-white mb-6 tracking-tight">
            Siap Beralih ke Perekat Organik?<br />Hubungi Tim Cocogum Bandung.
          </h2>
          <p className="text-on-primary-container text-xl mb-12 leading-relaxed max-w-2xl mx-auto opacity-90">
            Dapatkan sampel gratis dan konsultasi teknis langsung dengan tim ahli perekat organik
            Cocogum — spesialis binder briket arang, pakan ikan & udang, serta coal fines tambang.
          </p>
          <a
            href="/hubungi"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 text-lg font-bold rounded-lg hover:bg-primary-fixed transition-colors shadow-2xl transform hover:scale-105 active:scale-95 duration-200"
          >
            Hubungi Kami Sekarang <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
