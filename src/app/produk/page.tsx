import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk Perekat Organik — Cocogum BRIQ, COAL & FEED | Binder Briket, Pakan & Tambang",
  description:
    "Spesifikasi lengkap produk perekat organik Cocogum: BRIQ untuk briket arang batok kelapa ekspor, COAL untuk coal fines tambang batubara, dan FEED untuk pelet pakan ikan & udang. 100% bebas formaldehida.",
  alternates: {
    canonical: "https://cocogum.com/produk",
  },
  openGraph: {
    title: "Produk Perekat Organik Cocogum — BRIQ, COAL & FEED",
    description:
      "Temukan binder organik yang tepat untuk kebutuhan pabrik Anda: briket arang shisha, pakan ikan/udang, atau coal fines tambang. Spesifikasi teknis lengkap tersedia.",
    url: "https://cocogum.com/produk",
  },
};

export default function Produk() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-container py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-95"></div>
        <div className="organic-grain absolute inset-0 opacity-40 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
              Perekat Organik Kelas Ekspor — Bebas Formaldehida
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 font-headline leading-[1.1]">
              Perekat Organik <br className="hidden md:block" />{" "}
              <span className="text-white">untuk Industri.</span>
            </h1>
            <p className="text-xl text-on-primary-container leading-relaxed max-w-xl">
              Tiga lini produk binder organik Cocogum — <strong>BRIQ</strong>, <strong>COAL</strong>, dan{" "}
              <strong>FEED</strong> — diformulasikan khusus dari bahan alami batok kelapa untuk menggantikan
              perekat sintetis berbasis formaldehida di pabrik briket, tambang, dan pakan ternak.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square bg-surface-lowest/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 p-8 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 pointer-events-none"></div>
              <img
                alt="Proses rekayasa perekat organik Cocogum berbasis selulosa batok kelapa di laboratorium Bandung"
                className="w-full h-full object-cover rounded-xl grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCogpFZbEA-lgFhtmRoha_UhQ2ksqDa1-4lQ7UZbyrXa2gbUd9BB0zlfN25A-bfovY_6doKveGcPT0QR1yaRyVIa0jN4aFdq17JoHfdbq8nwP6bxEcv6L72KbeB0sBovZnk70tH0WP6MGlLPs7M0eeLL3HwW6vEpQWfMZmYjbyJ8aUsOwy2Ooc8_PISHL08FfJsZqu-46InMUSYK4fVzcl9ZEtuCRpkhQJtVRRwIxKvnLC_cXbGJwrpShBECok8akYFe8atslOZAac"
              />
              <div className="absolute bottom-12 left-12 z-20">
                <p className="text-white font-headline text-2xl font-bold">Binder Organik Berperforma Tinggi</p>
                <p className="text-emerald-200/80 text-sm mt-2">Daya lekat mekanis — tahan suhu tinggi, tahan air.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Riset & Keunggulan Teknis */}
      <section aria-labelledby="rd-heading" className="py-24 bg-surface border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 id="rd-heading" className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">
              Mengapa Perekat Organik Cocogum Lebih Baik dari Binder Konvensional?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Perekat organik Cocogum menggunakan selulosa amorfus batok kelapa (<em>amorphous cellulose</em>)
              yang dihidrolisis secara presisi untuk membentuk ikatan silang (<em>cross-linking</em>) stabil —
              setara kuat dengan urea formaldehida, namun 100% bebas emisi VOC beracun.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl border-l-[6px] border-primary">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">water_drop</span>
              <h3 className="font-bold text-on-surface mb-3 text-lg">Tahan Air & Kelembapan Tropis</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Formulasi binder organik kami menjaga struktur solid briket dan pelet pakan saat disimpan
                di kondisi lembap tropis ataupun gudang berpendingin — meminimalisir kerusakan produk
                sebelum pengiriman ekspor.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border-l-[6px] border-primary">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">vibration</span>
              <h3 className="font-bold text-on-surface mb-3 text-lg">Anti-Pecah Selama Distribusi</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Kelenturan elastis perekat organik berbasis nabati mampu menyerap guncangan dan gesekan
                selama distribusi tonase dalam kontainer — mengurangi tingkat reject produk di pelabuhan
                dan menjaga reputasi kualitas ekspor.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border-l-[6px] border-primary">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">co2</span>
              <h3 className="font-bold text-on-surface mb-3 text-lg">100% Bebas Formaldehida & VOC</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Tidak ada emisi gas beracun (<em>zero outgassing</em>). Produk briket dan pakan menggunakan
                Cocogum lulus uji kepabeanan Eropa (CE), aman untuk operator pabrik, dan memenuhi standardisasi
                ekspor ke pasar Timur Tengah dan Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRIQ */}
      <section id="briq" aria-labelledby="briq-heading" className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Cocogum BRIQ — Perekat Briket Arang Batok Kelapa
              </span>
              <h2 id="briq-heading" className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">
                Binder Briket Ekspor: Pangkas Oven 50%, Tanpa Asap, 95% Fixed Carbon.
              </h2>
              <p className="font-bold text-primary mb-4 text-lg">
                Cocogum BRIQ hanya membutuhkan 1/3 hingga 1/4 jumlah perekat dibanding binder tapioka atau
                CMC — kekuatan ikatan setara atau lebih baik, biaya bahan baku berkurang drastis.
              </p>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Diformulasikan khusus untuk pabrik briket arang batok kelapa berorientasi ekspor shisha
                internasional — mempercepat siklus produksi, mempertahankan 95% fixed carbon, dan
                menghasilkan briket berkualitas pasar Timur Tengah dan Eropa.
              </p>
              <a href="/hubungi" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-container hover:-translate-y-1 transition-all shadow-lg">
                Konsultasi Kebutuhan Perekat Briket <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </a>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border-8 border-surface-container-lowest">
                <img
                  alt="Produksi briket arang batok kelapa ekspor menggunakan perekat organik Cocogum BRIQ tanpa asap"
                  className="w-full aspect-[4/3] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM50B0UD4q4tnXufehxkMZVSvG4wuTz1GAQrmWxWKEwS_GhFL4B6iVeRDi1_LZ_yLAc1-HhjC6lJg0tH3rvnN_y2PX7YUbhRh9mHCJxJ5miEw5tIQ5KwdHA3yuga-LAeeuZWPOIBVH12Z-NTRPQKmUrSqP37OHoFgmsHHRoxyim8cw0T5zXSwJq15bvyzqWZRilPVyPshtMU_4soYAMF5susnN8AAoALbMragrf_fYobWWBDa-wiIuJSO9cvI2kNCCIWclz0LqTKw"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COAL */}
      <section id="coal" aria-labelledby="coal-heading" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-3xl p-8 lg:p-16 border border-outline-variant/20 shadow-2xl overflow-hidden relative">
            <div className="grain-texture absolute inset-0 opacity-30"></div>
            <div className="lg:col-span-8 relative z-10 lg:pr-12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Cocogum COAL — Binder Coal Fines & Tambang Batubara
              </span>
              <h2 id="coal-heading" className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">
                Ubah Coal Fines Menjadi Briket Batubara Kalori Tinggi — Zero Waste Mining.
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Cocogum COAL membantu Perusahaan Tambang Batubara, PLTU, dan Industri Boiler mengolah
                debu batubara (<em>coal fines</em>) yang selama ini terbuang menjadi briket batubara
                bernilai kalori tinggi yang dapat dijual kembali.
              </p>
              <ul className="space-y-4 mb-10 text-on-surface-variant">
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>Nilai Kalori Terjaga:</strong> Rekatkan coal fines menjadi briket padat tanpa menurunkan nilai kalori asli batubara — cocok untuk bahan bakar PLTU dan industri.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>Pemenuhan Standar ESG:</strong> Kurangi limbah debu tambang, penuhi laporan keberlanjutan lingkungan perusahaan, dan peroleh nilai tambah dari material yang sebelumnya waste.</span>
                </li>
              </ul>
              <a href="/hubungi" className="inline-flex items-center gap-3 bg-primary text-white border-2 border-primary hover:bg-surface-container-lowest hover:text-primary px-8 py-4 rounded-lg font-bold transition-all shadow-lg">
                Konsultasi Kebutuhan Coal Fines Binder <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </a>
            </div>
            <div className="border border-outline-variant/20 lg:col-span-4 rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
              <img
                alt="Binder organik Cocogum COAL mengikat debu batubara (coal fines) menjadi briket energi kalori tinggi untuk tambang dan PLTU"
                className="h-full w-full object-cover grayscale contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk47V1DVPTry_-chxPqLD_lD-oMBYqM8l_xeQ7BItWOYePh1UeKlXNnmQx_sIWH7KHI10RM-PdrjxAbXcHczRI7MKe-EqF3XbN1exXygHfrx1RgGS3H9jQKvPVeOr6MUbvaV5p114oGADYQS9NI8NtjppsAx1GEDDVMXrdby5uR9FgWOv07NbHzzRAvuTqw6jB7lsUNglPNmwxSLzmhXDS5S1CiKSzCkBuuhfD37n4_q8J-GwYaKzFHzUYD8fkKnJKXPXiaOp6kyA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEED */}
      <section id="feed" aria-labelledby="feed-heading" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Cocogum FEED — Perekat Pelet Pakan Ikan, Udang &amp; Unggas
              </span>
              <h2 id="feed-heading" className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">
                Pelet Pakan Tidak Hancur di Air — 100% Organik, Bebas Toksin.
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Cocogum FEED adalah binder organik food-grade untuk pabrik pakan ikan, udang vaname, dan
                unggas skala menengah-besar. Pelet yang diproduksi dengan Cocogum FEED tidak hancur di
                kolam atau tambak, mengurangi food waste, dan aman dikonsumsi oleh semua jenis
                komoditas akuakultur.
              </p>
              <ul className="space-y-4 mb-10 text-on-surface-variant">
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>Durabilitas Tinggi di Air:</strong> Pelet tidak hancur — mengurangi food waste di tambak dan meningkatkan efisiensi FCR (Feed Conversion Ratio).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>100% Organik & Food Grade:</strong> Bebas toksin, aman dikonsumsi ikan, udang, dan unggas — memenuhi standar keamanan pangan internasional.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>Minim Debu Pakan:</strong> Formulasi halus meminimalisir debu saat distribusi, menjaga kualitas pakan hingga ke tangan peternak.</span>
                </li>
              </ul>
              <a href="/hubungi" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-container transition-all shadow-lg">
                Konsultasi Kebutuhan Binder Pakan Ternak <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </a>
            </div>
            <div className="w-full lg:w-7/12 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-outline-variant/10">
                <img
                  alt="Pelet pakan ikan dan udang menggunakan perekat organik Cocogum FEED — tidak hancur di air, food grade, bebas toksin"
                  className="w-full h-full object-cover grayscale opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRua1vEdWz65dVnwVJiUFp4rqUmMkUs5bGW1PAYTilz3bzRCw9IhpYTe-w9O8YuOFIDqxSC3nimXwskkJmbLd6YTMOPCokl78HJNpysipbkk22GE6r7wuDGkJVpIIWuIu4WaWCSQsepKp2f4ljWnO25XhbGPaVMcvvV5-o9MKsCUceT5uzyo5RoanP4U1G7opMGULCXyVtjJjs74S1A1lPoznK1wQKzqXyStk96vRSyvDIJ7lCNsRdCUhifXWg1d65_2idiUG2F0"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Spesifikasi Mutu */}
      <section aria-labelledby="qa-heading" className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-3">Parameter Kualitas Binder Organik</span>
            <h2 id="qa-heading" className="text-3xl font-headline font-bold text-on-surface mb-4">
              Spesifikasi Mutu Perekat Organik Cocogum (General QA)
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Berikut parameter teknis standar lini perekat organik Cocogum yang dapat dikustomisasi
              sesuai spesifikasi mesin briket, pelet pakan, atau pengolahan coal fines di pabrik Anda.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/20 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-5 px-6 font-headline font-bold uppercase tracking-widest text-xs border-r border-white/10 w-1/3">Parameter Teknis</th>
                  <th className="py-5 px-6 font-headline font-bold uppercase tracking-widest text-xs">Nilai Standar (Dapat Dikustomisasi)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 text-on-surface-variant">
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Viskositas Binder</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">3.000 – 45.000 cps (disesuaikan laju alir mesin)</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Kadar Air (Moisture Content)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">Maks. &lt; 12,0% w/w</td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Ukuran Partikel (Pass Mesh)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">95% lolos Mesh 80–100</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Kadar Abu (Ash Content)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">2% – maks. 8% (nol silika tambahan)</td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Masa Simpan (Shelf-Life)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">+18 bulan pada suhu gudang &lt; 30°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <span className="text-surface-container-lowest font-bold tracking-[0.3em] text-xs uppercase mb-6 block border border-surface-container/30 px-4 py-2 w-fit mx-auto rounded">
            Uji Coba Sampel Gratis
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-white mb-6 tracking-tight max-w-4xl mx-auto">
            Coba Perekat Organik Cocogum di Mesin Pabrik Anda — Tanpa Risiko.
          </h2>
          <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
            Tim teknis kami siap mengirimkan sampel binder organik dan mendampingi uji kalibrasi
            langsung di fasilitas produksi Anda — pabrik briket, pakan ternak, maupun tambang batubara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/hubungi" className="bg-white text-primary px-10 py-5 rounded-lg font-bold hover:bg-primary-fixed hover:-translate-y-1 hover:shadow-2xl transition-all shadow-lg text-lg flex items-center justify-center gap-3">
              Minta Sampel Perekat Organik <span className="material-symbols-outlined">description</span>
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 mix-blend-overlay opacity-20 pointer-events-none h-64 bg-gradient-to-t from-black to-transparent"></div>
      </section>
    </>
  );
}
