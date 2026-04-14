export default function Tentang() {
  return (
    <>
      {/* Hero Section: The Brand Story */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-95"></div>
        <div className="grain-texture absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="inline-block px-3 py-1 bg-surface-container-lowest/10 text-emerald-100 border border-emerald-100/30 text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-sm backdrop-blur-sm shadow-sm">MANUFAKTUR MASA DEPAN</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tight text-white leading-[1.1] mb-6">
              Pusat <br /><span className="text-white">Foundry Organik.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container/90 leading-relaxed mb-8">
              Lebih dari sekadar pemasok material, <strong className="text-white font-semibold">Cocogum</strong> hadir di titik temu antara kekayaan warisan botani Indonesia dan presisi mutakhir industri global. Kami merekayasa solusi perekat bio-polimer yang menggeser paradigma pabrik modern menuju masa depan nol limbah (<em>zero waste</em>).
            </p>
            <div className="flex gap-4">
              <a href="#filosofi" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-tint hover:-translate-y-1 hover:text-white transition-all shadow-lg flex items-center gap-2">
                Jelajahi Sejarah Kami <span className="material-symbols-outlined text-xl">south</span>
              </a>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative border border-white/10">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none"></div>
              <img alt="Manajemen hutan berkelanjutan" className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4JJl5UOLWQzhhnDfqwkTJR_lL9MvAtmD98pLoTrdaqCnx8mSE7baHgRBxQ1z64dwMCSwUYra-eW4irzHwl2po9eDL2i7KOlkbLJxzV7qoys4-vbtj2sSTS-sEpR0mQXCVBnujMoSYZFtkHdd5YQC4M_RHef1Frc1FwmUdiyPjtOT0aqlXyEqFArSfOhBblMwyPbKHv0vYZ4edCF1YwAtvoyrb-ihwRWwOUPoTDRmxVbFXMTjDX5Yx0DKLs_zs5_qGfS7ryROuudc" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-xl text-on-surface max-w-xs shadow-2xl z-20 border border-outline-variant/10">
              <p className="text-3xl font-bold font-headline mb-2 text-primary">12+ Tahun</p>
              <p className="text-sm opacity-90 leading-relaxed text-on-surface-variant">Meriset dan memelopori teknologi pengikat bio-industri berstandar internasional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofi "The Organic Foundry" */}
      <section id="filosofi" className="py-24 bg-surface-container-low relative">
        <div className="grain-texture absolute inset-0"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold font-headline text-primary mb-8">Filosofi <span className="italic">The Organic Foundry</span></h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
            Selama puluhan tahun, sektor manufaktur B2B sangat bergantung pada bahan kimia sintetik dan perekat berbasis minyak bumi yang merusak bumi. Di Cocogum, kami merintis konsep <strong className="text-primary font-semibold">Organic Foundry</strong>—sebuah labolatorium hidup di mana produk sampingan pertanian (<em>agricultural by-products</em>) diekstraksi dan dinaikkan kelasnya menjadi polimer cerdas berspesifikasi tinggi.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Kami mengubah sisa pemrosesan kelapa dan biomassa lainnya menjadi perekat berperforma tinggi untuk sektor energi (briket), agrikultur (pakan & substrat), hingga filtrasi lingkungan (karbon aktif). Hasilnya? Sebuah solusi sirkular yang menurunkan biaya operasional CO2 Anda tanpa mengorbankan durabilitas mekanis.
          </p>
        </div>
      </section>

      {/* Visi, Misi, dan Transformasi Ekologis */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-sm flex flex-col justify-center transform sm:translate-y-8 hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">public</span>
                <h4 className="font-bold font-headline text-on-surface text-xl mb-2">Karbon Netral</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Rantai pasok lokal kami merevitalisasi keseimbangan ekosistem dan memangkas jejak karbon korporat.</p>
              </div>
              <div className="bg-primary text-white p-8 rounded-xl shadow-xl flex flex-col justify-center hover:-translate-y-1 transition-transform">
                <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4">precision_manufacturing</span>
                <h4 className="font-bold font-headline text-white text-xl mb-2">Presisi Skala Besar</h4>
                <p className="text-sm text-emerald-200/80 leading-relaxed">Formulasi adaptif yang kuat merespons dinamika fluktuasi suhu mesin ekstrem (heat-resistant).</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary shadow-sm flex flex-col justify-center sm:col-span-2 hover:-translate-y-1 transition-transform mt-4 sm:mt-8">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">compost</span>
                <h4 className="font-bold font-headline text-on-surface text-xl mb-2">Sertifikasi Zero Waste</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Material kami 100% dapat terurai secara biologis (biodegradable) setelah siklus hidup penggunaannya usai.</p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold font-headline text-primary mb-6">Misi Integrasi Global</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                Kami hadir dengan satu keyakinan tak tergoyahkan: bahwa proses modifikasi material organik murni dapat menyamai—bahkan mengakselerasi—kekuatan produk berbasis hidrokarbon. Misi kami adalah menghapus kompromi antara efisiensi mesin industri berat dan pelestarian bumi.
              </p>
              <div className="h-px bg-outline-variant/30 w-full my-8"></div>
              <h3 className="text-3xl font-bold font-headline text-primary mb-4">Visi Episentrum Sirkular</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Menjadi fondasi sentral global di mana generasi masa depan ekonomi sirkular bertumpu. Bersama Cocogum, mitra B2B tidak sekadar mengadopsi bahan baku mentah; mereka berinvestasi pada stabilitas pasokan bebas deforestasi dan komoditas tanpa toksin buatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rantai Nilai Global (Value Chain) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-headline text-primary mb-4">Infrastruktur Integrasi <span className="italic">End-to-End</span></h2>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto">Dari riset laboratorium mikro hingga distribusi tonase kontainer ekspor, metodologi rantai nilai kami beroperasi dengan presisi mutlak.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">01</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">query_stats</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Audit Strategis</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Tim teknis kami membedah konfigurasi lini basah/kering mesin Anda (Audit Suhu &amp; Kecepatan) untuk menemukan celah efisiensi material.
              </p>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">02</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">science</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Formula Molekuler</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Rekayasa binder pesanan (Custom Modified Binder) dikembangkan di laboratorium kami untuk mengunci densitas substrat khusus Anda secara sempurna.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">03</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">inventory_2</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Skalabilitas Suplai</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Pemurnian dan pencampuran bio-partikel berkapasitas besar. Menjamin kontinuitas stok stabil di tengah disrupsi rantai pasok global.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary transition-all duration-300">
              <span className="text-5xl font-black text-surface-container-highest group-hover:text-primary-fixed-dim/30 transition-colors block mb-4">04</span>
              <span className="material-symbols-outlined text-primary group-hover:text-surface-tint text-4xl mb-6">settings_suggest</span>
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">Optimalisasi SOP</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Insinyur kami secara langsung akan mengkalibrasi Prosedur Operasi Standar di fasilitas klien untuk menjamin daya rekat maksimal dalam waktu minimal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tanya Jawab B2B (FAQ) */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">RUANG PENGETAHUAN</span>
            <h2 className="text-4xl font-bold font-headline text-primary mb-4">Pertanyaan Seputar Kemitraan (Q&amp;A)</h2>
            <p className="text-on-surface-variant text-lg">Transparansi penuh tentang proses kerja, spesifikasi bahan, dan skalabilitas Cocogum dalam industri B2B.</p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Bagaimana performa Cocogum dibandingkan pengikat sintetis (PVA / Kimia Formaldehida)?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Teknologi Modifikasi Organik kami menciptakan ikatan polimer silang (<em>cross-linking</em>) yang adaptif di level mikro. Berbeda dengan sintetis yang kaku, Cocogum memberikan kelenturan tahan-pecah saat terjadi benturan mekanis tinggi, tanpa pelepasan gas beracun (Zero VOC). Material kami menyamai kekuatan geser perekat sintetis seraya secara absolut menekan biaya pengelolaan limbah B3.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Berapa lama waktu yang dibutuhkan dari masa konsultasi R&amp;D hingga pengiriman massal komersial?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Siklus standar industri B2B kami dirancang efektif: Proses audit mesin dan pengembangan sampel kustom awal biasanya memerlukan 10-14 hari kerja. Setelah formula disetujui (<em>sign-off approval</em>), produksi suplai tonase penuh dieksekusi dengan *lead time* yang disesuaikan pada skala pesanan (umumnya 21 hari untuk pengiriman antarbenua).
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Apakah produk Cocogum 100% aman bagi fasilitas produksi <em>Food Grade</em>?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Tentu. Akar botani turunan kelapa dan pati nabati kami sepenuhnya merujuk pada standar <em>food grade</em>. Hal ini membuatnya tak hanya ideal untuk pakan ternak (Vertikal Agro-Feed), terapi arang shisha, tetapi juga menjamin paparan pernapasan yang 100% aman (non-karsinogenik) bagi tenaga operator harian pabrik Anda.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-surface-container-low p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold font-headline text-primary mb-4 flex gap-4 items-start">
                <span className="text-primary-fixed-dim material-symbols-outlined mt-0.5">help</span>
                Apakah ada dukungan optimasi (SOP) paska-pembelian untuk klien internasional?
              </h3>
              <p className="text-on-surface-variant leading-relaxed pl-10">
                Ya. Layanan <em>End-to-End</em> kami berarti transaksi tak terhenti di titik pelabuhan. Tim "Technical Support &amp; Engineering" kami selalu tersedia secara digital untuk mengalibrasi takaran pencampuran hidrasi spesifik bagi operator di mana pun pabrik Anda berada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Pendek untuk Mengarahkan ke Hubungi Kami */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <h2 className="text-4xl font-extrabold font-headline text-white mb-6 tracking-tight">
            Transisi Manufaktur Bersih<br />Dimulai Dari Sini
          </h2>
          <p className="text-on-primary-container text-xl mb-12 leading-relaxed max-w-2xl mx-auto opacity-90">
            Dapatkan sampel uji klinis spesifik berstandar industri ekspor. Jadwalkan diskusi kerangka teknis perancangan bersama tim ahli kami hari ini.
          </p>
          <a href="/hubungi" className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 text-lg font-bold rounded-lg hover:bg-primary-fixed transition-colors shadow-2xl transform hover:scale-105 active:scale-95 duration-200">
            Jadwalkan Konsultasi B2B <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </>
  );
}
