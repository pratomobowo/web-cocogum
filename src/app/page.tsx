import HeroSlider from "@/components/ui/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Hero Slider Interaktif */}
      <HeroSlider />

      {/* NEW: Social Proof / Certification Strip */}
      <section className="bg-surface-container border-y border-outline-variant/10 py-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
          <p className="text-xs font-bold text-outline uppercase tracking-[0.2em] mb-6 text-center">Terverifikasi Memenuhi Standar Kepabeanan &amp; Pabrik Global</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
            <span className="font-headline font-bold text-xl md:text-2xl text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-3xl">verified</span> ISO 14001</span>
            <span className="font-headline font-bold text-xl md:text-2xl text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-3xl">recycling</span> ZERO WASTE</span>
            <span className="font-headline font-bold text-xl md:text-2xl text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-3xl">eco</span> REACH COMPLIANT</span>
            <span className="font-headline font-bold text-xl md:text-2xl text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-3xl">restaurant</span> FDA APPROVED</span>
          </div>
        </div>
      </section>

      {/* The 50/50 Rule */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="grain-texture absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary-fixed/20 rounded-full organic-grain">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">Standar Performa</span>
              </div>
              <h2 className="font-headline font-bold text-4xl lg:text-5xl text-on-surface leading-tight">
                Aturan 50/50: <br />Efisiensi Berbasis Desain.
              </h2>
              <p className="text-on-surface-variant text-lg">
                Proses modifikasi organik eksklusif kami memberikan terobosan ganda dalam pemrosesan industri, mengurangi biaya operasional sekaligus memaksimalkan kualitas output.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-8 rounded-xl border-b-4 border-primary shadow-sm hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">speed</span>
                  <h3 className="font-headline font-bold text-2xl text-primary mb-2">50% Lebih Cepat</h3>
                  <p className="text-on-surface-variant text-sm">Pengurangan waktu pengeringan yang sangat signifikan di seluruh lini waktu manufaktur.</p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-xl border-b-4 border-primary shadow-sm hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">opacity</span>
                  <h3 className="font-headline font-bold text-2xl text-primary mb-2">Dosis Rendah</h3>
                  <p className="text-on-surface-variant text-sm">Target kekuatan pengikatan industrial dicapai dengan minimum konsumsi (volume use).</p>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl overflow-hidden aspect-[4/5] relative shadow-2xl">
              <img alt="Presisi laboratorium" className="w-full h-full object-cover opacity-60 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZjOqEZ8DkOdt-A92CdC8d9w_OlDrle031Ybv-SP5K1m1GxBzmGErQRcQhtcmZ52ZmsTvRNNX1I0ACNiE4S2n1neb6J3cQAuoKT25Fi24KGUOu2n6hIPedn-OCImW1La-6KdkfXAuA533lBc7WWBtNXK1OGadbVJ4lXClLs8PzA6DwM3H9GCPNG9DVFQZGCV3s7xWUfAPZFB3sKc-Wq9wPwrEzf-3BdL8mNWEFT6LW_CguaszEb-AZrptfHcUc_TKCpjoxy-BAr40" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <h4 className="text-white font-headline text-3xl font-bold mb-4">Integrasi Zero Waste</h4>
                <p className="text-primary-fixed-dim text-sm leading-relaxed max-w-sm">
                  Pengikat dipatenkan kami dirancang untuk sepenuhnya biodegradable dan karbon-netral, mutlak patuh pada arsitektur ESG korporat Anda tanpa mengorbankan durabilitas sepersen pun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Metrik Transparansi (Impact in Numbers) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Dampak Bisnis Terukur</span>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Mengukur Skala Revolusi Industri</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 rounded-2xl border-t-8 border-primary text-center hover:shadow-lg transition-shadow">
              <p className="text-6xl md:text-7xl font-headline font-black text-primary mb-4 tracking-tighter">40<span className="text-3xl text-primary/60">%</span></p>
              <h4 className="font-bold font-headline text-on-surface mb-3 text-xl">Reduksi Biaya Adhesif</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Efisiensi keuangan rata-rata berkelanjutan yang dicatatkan mitra B2B kami pasca kuartal pertama adopsi Cocogum.</p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl border-t-8 border-primary text-center hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5">
                <span className="material-symbols-outlined text-[10rem]">eco</span>
              </div>
              <p className="text-6xl md:text-7xl font-headline font-black text-primary mb-4 tracking-tighter">10k<span className="text-3xl text-primary/60">+</span></p>
              <h4 className="font-bold font-headline text-on-surface mb-3 text-xl">Ton Metrik Dialihkan</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Volume substitusi material resin beracun berbahaya secara agregat tahunan dari ekosistem suplai pabrik klien.</p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-2xl border-t-8 border-primary text-center hover:shadow-lg transition-shadow">
              <p className="text-6xl md:text-7xl font-headline font-black text-primary mb-4 tracking-tighter">18<span className="text-3xl text-primary/60">Bln</span></p>
              <h4 className="font-bold font-headline text-on-surface mb-3 text-xl">Stabilitas Masa Simpan</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Jaminan integritas ikatan silang material yang konsisten meski tanpa penambahan gas formaldehida kimiawi sintetik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Verticals */}
      <section className="py-24 bg-surface flex flex-col pt-0">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">PORTFOLIO SOLUSI B2B</span>
              <h2 className="font-headline font-bold text-4xl text-on-surface mb-4">Sektor Industri Spesifik</h2>
              <p className="text-on-surface-variant">Sistem dan rekayasa pengikat yang dikalibrasi ketat untuk menahan beban industrial di lingkungan ekstrem, dari peleburan energi hingga efisiensi agrikultur luas.</p>
            </div>
            <a href="/produk" className="text-primary font-bold hover:gap-2 flex items-center transition-all bg-primary-fixed/20 px-6 py-3 rounded-full">
              Lihat Spesifikasi Penuh <span className="material-symbols-outlined text-lg ml-2">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Briq */}
            <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between hover:bg-primary hover:text-white transition-all group border border-transparent shadow-sm">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed">forest</span>
                <h3 className="font-headline font-bold text-3xl mt-6">Briq</h3>
                <p className="text-on-surface-variant group-hover:text-emerald-200/70 mt-3 font-medium">Briket Biomassa & Energi</p>
                <p className="text-sm mt-3 text-on-surface-variant group-hover:text-white/70">Pengikat nilai kalor tinggi tanpa pelepasan asap, kelas ekspor premium.</p>
              </div>
              <div className="mt-8">
                <a className="font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/produk">Investigasi <span className="material-symbols-outlined">chevron_right</span></a>
              </div>
            </div>
            
            {/* Coal */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col border border-outline-variant/10 shadow-lg hover:border-primary transition-all group overflow-hidden relative">
              <div className="absolute right-0 bottom-0 w-1/2 h-full z-0 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 w-24"></div>
                <img alt="Tekstur batubara" className="w-full h-full object-cover grayscale mix-blend-multiply transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZZkJB4zezNOQ3KEBahQaFjt8qAsdasnwLtokxRhKLYTERndIvNI-Als4U487SxVSYqzG2beOnbiMAi8Z9pqgIHH1GqLAg8yWXapOuH6oj6KJJNuYGzpM9fgCzREPlL2Ikzks10_D8c_J0Zms7DHhPgEKT4hjTmn_qjY53RELzHbyeuVkYp_5cPmpKguQioTKpPZbNzoyPGaYn_Q4_7LpyPUlyJPr0yFWTwJ4ac-we6oKVUKXYzo2UouCXshu7I_Bqo-2gCYiQoLQ" />
              </div>
              <div className="relative z-10 max-w-md h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-2 rounded">factory</span>
                  <h3 className="font-headline font-bold text-4xl mt-6 text-on-surface">Batubara Filtrasi</h3>
                  <p className="text-primary font-bold mt-2">Daya Adsorpsi & Purifikasi Maksimal</p>
                  <p className="text-on-surface-variant mt-4 leading-relaxed">Rekayasa penekanan debu untuk fasilitas pertambangan hingga penyempurnaan mikroporositas karbon aktif pengolahan air kritis dengan jejak *chemical* nyaris nihil.</p>
                </div>
                <div className="mt-8">
                  <a className="text-primary bg-primary/5 px-6 py-3 rounded inline-flex font-bold items-center gap-2 hover:bg-primary hover:text-white transition-all" href="/produk">Eksplorasi Lingkungan <span className="material-symbols-outlined">arrow_forward</span></a>
                </div>
              </div>
            </div>
            
            {/* Feed */}
            <div className="md:col-span-4 bg-primary text-white rounded-xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-9xl text-white">grass</span>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary-fixed">grass</span>
                <h3 className="font-headline font-bold text-3xl mt-6">Pakan (Feed)</h3>
                <p className="text-primary-fixed font-medium mt-2">Agro & Akuakultur Industri</p>
                <p className="text-emerald-200/80 mt-3 text-sm leading-relaxed">Pengikat pelet bernutrisi adaptif tanpa retak untuk minimalisir limbah keropos saat distribusi pakan ternak.</p>
              </div>
              <div className="mt-8 relative z-10">
                <a className="font-bold flex items-center gap-2 text-primary-fixed hover:text-white transition-colors" href="/produk">Spek Nutrisi <span className="material-symbols-outlined">arrow_forward</span></a>
              </div>
            </div>

            {/* Mosq */}
            <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between group border border-transparent shadow-sm">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary">pest_control</span>
                <h3 className="font-headline font-bold text-3xl mt-6 text-on-surface">Mosq</h3>
                <p className="text-primary font-medium mt-2">Perlindungan Rital</p>
                <p className="text-on-surface-variant mt-3 text-sm">Pengontrol pelemahan nyamuk ekologis. Pembakaran bersih dan pelepasan senyawa stabil jangka panjang tanpa racun paru-paru buatan.</p>
              </div>
              <div className="mt-8">
                <a className="font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/produk">Data Klinis <span className="material-symbols-outlined">arrow_forward</span></a>
              </div>
            </div>

            {/* Agro */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8 flex flex-col justify-between group hover:border-primary shadow-sm hover:shadow-lg transition-all">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary bg-primary/5 p-2 rounded">agriculture</span>
                <h3 className="font-headline font-bold text-3xl mt-6 text-on-surface">Agro-Substrat</h3>
                <p className="text-primary font-medium mt-2">Kondisioner Pertanian</p>
                <p className="text-on-surface-variant mt-3 text-sm">Media hortikultur presisi tinggi. Mengelola aerasi dan retensi cadangan nutrisi pengikat lepas lambat (slow-release fertilizers) untuk kebun pintar.</p>
              </div>
              <div className="mt-8">
                <a className="font-bold text-primary flex items-center gap-2 group-hover:gap-4 transition-all" href="/produk">Sistem Tanam <span className="material-symbols-outlined">arrow_forward</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Studi Kasus Pendek / Use Case Bukti Nyata */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="grain-texture absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center gap-12 border border-outline-variant/20">
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              {/* Using a placeholder industrial image or using an elegant abstraction */}
              <img alt="Instalasi Industri" className="w-full aspect-video object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGEMeaZjY_8spOWxNN1SQDJhNnJVL7rF3DvoZOiybq_v0H2DphBk0xbpzZoHkkaIrxJkLu5RFVFo30EGPyKw7lvNza_nOgjkpLsuVwO159p94dXPjaAy6gc0hBhexlxYNxGoBF72ZuHuzo7jPZwEN4RxteEKK0zJUpIvDyD3nVqr7XuVVWT0d0_-8YbOjdi94xN2bH2-XD30waeyBSwX9FmlzrKlF0jvJPnXz5otbognVPSh1CM3OKC8hoDVemMJBkRQYpXvMvZoc" />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">Studi Kasus Implementasi Terapan</span>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary mb-6 leading-tight">
                Beraksi Tanpa Friksi <span className="text-on-surface">Downtime.</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Peralihan material seharusnya tidak melemahkan kecepatan komersil pabrik Anda. Solusi perekat botani kami di-desain <strong className="text-on-surface italic">plug-and-play</strong>—direkayasa agar menyatu seketika dengan mesin pabrik pemrosesan panas konvensional.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl border-l-[6px] border-primary mb-8 text-on-surface-variant text-sm sm:text-base">
                "Dalam uji kalibrasi mesin kuartal terakhir, formulasi kami me-reaksi kepadatan optimal pada suhu operasional yang sangat rendah—memungkinkan operator fasilitas biomassa menekan ongkos energi termal hingga <strong className="text-primary font-bold text-lg">38%</strong> tanpa satupun modifikasi katup baut (hardware)."
              </div>
              <a href="/tentang" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Mekanisme Rantai Nilai Kami <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Terkonversi */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-lowest rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-outline-variant/20">
            {/* Ornamen grain / noise texture */}
            <div className="grain-texture absolute inset-0 mix-blend-multiply opacity-50"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Fase Selanjutnya</span>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-on-surface mb-8 tracking-tight">Kalkulasi Transformasi Manufaktur Anda Hari Ini</h2>
              <p className="text-on-surface-variant text-lg md:text-xl md:max-w-3xl mx-auto mb-12 leading-relaxed">
                Rebut simpati pasar <em>go-green</em> dengan performa ikatan molekular kelas dunia. Jadwalkan temu konsultasi desain material dan kalkulasi volume dengan manajer teknis B2B Cocogum.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="/hubungi" className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 font-bold rounded-lg hover:bg-primary-container hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-3 group">
                  Inisiasi Diskusi Bisnis B2B <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">launch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
