import type { Metadata } from "next";

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
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-95"></div>
        <div className="grain-texture absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-surface-container-lowest/10 text-emerald-100 border border-emerald-100/30 text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-sm backdrop-blur-sm shadow-sm">
              Produsen Organic Binder Indonesia
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight text-white leading-[1.1] mb-6">
              Cocogum: <br />
              <span className="text-white">Perekat Organik dari Bandung.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container/90 leading-relaxed mb-8">
              Lebih dari sekadar supplier material, <strong className="text-white font-semibold">Cocogum</strong>{" "}
              adalah produsen perekat organik (<em>organic binder</em>) berbahan dasar batok kelapa dari
              Bandung, Jawa Barat. Kami menghadirkan solusi binder industri yang aman, efisien, dan bebas
              formaldehida — untuk pabrik briket arang, pengolahan pakan ternak, dan tambang batubara.
            </p>
            <div className="flex gap-4">
              <a
                href="#filosofi"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-tint hover:-translate-y-1 hover:text-white transition-all shadow-lg flex items-center gap-2"
              >
                Pelajari Filosofi Kami <span className="material-symbols-outlined text-xl">south</span>
              </a>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative border border-white/10">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none"></div>
              <img
                alt="Pabrik perekat organik Cocogum di Baleendah, Kabupaten Bandung, Jawa Barat — produsen binder briket dan pakan ekspor"
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4JJl5UOLWQzhhnDfqwkTJR_lL9MvAtmD98pLoTrdaqCnx8mSE7baHgRBxQ1z64dwMCSwUYra-eW4irzHwl2po9eDL2i7KOlkbLJxzV7qoys4-vbtj2sSTS-sEpR0mQXCVBnujMoSYZFtkHdd5YQC4M_RHef1Frc1FwmUdiyPjtOT0aqlXyEqFArSfOhBblMwyPbKHv0vYZ4edCF1YwAtvoyrb-ihwRWwOUPoTDRmxVbFXMTjDX5Yx0DKLs_zs5_qGfS7ryROuudc"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-xl text-on-surface max-w-xs shadow-2xl z-20 border border-outline-variant/10">
              <p className="text-3xl font-bold font-headline mb-2 text-primary">12+ Tahun</p>
              <p className="text-sm opacity-90 leading-relaxed text-on-surface-variant">
                Meneliti dan memproduksi perekat organik berstandar ekspor untuk industri briket, pakan, dan tambang Indonesia.
              </p>
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
