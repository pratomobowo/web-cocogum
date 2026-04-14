export default function Produk() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-container py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-95"></div>
        <div className="organic-grain absolute inset-0 opacity-40 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">Bio-Polimer Industri Ekspor</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 font-headline leading-[1.1]">
              Presisi Pengikat <br className="hidden md:block"/> <span className="text-white">Berbasis Bio.</span>
            </h1>
            <p className="text-xl text-on-primary-container leading-relaxed max-w-xl">
              Spesialisasi kami terletak pada modifikasi hasil samping organik agro menjadi <em>Bio-Polymer Binder</em> berperforma setara sintetis, memberikan stabilitas struktural di lima pilar ekosistem industri manufaktur sirkular.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square bg-surface-lowest/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 p-8 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 pointer-events-none"></div>
              <img alt="Sains Polimer Organik" className="w-full h-full object-cover rounded-xl grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCogpFZbEA-lgFhtmRoha_UhQ2ksqDa1-4lQ7UZbyrXa2gbUd9BB0zlfN25A-bfovY_6doKveGcPT0QR1yaRyVIa0jN4aFdq17JoHfdbq8nwP6bxEcv6L72KbeB0sBovZnk70tH0WP6MGlLPs7M0eeLL3HwW6vEpQWfMZmYjbyJ8aUsOwy2Ooc8_PISHL08FfJsZqu-46InMUSYK4fVzcl9ZEtuCRpkhQJtVRRwIxKvnLC_cXbGJwrpShBECok8akYFe8atslOZAac" />
              <div className="absolute bottom-12 left-12 z-20">
                <p className="text-white font-headline text-2xl font-bold">Integritas Lintas-Polimer</p>
                <p className="text-emerald-200/80 text-sm mt-2">Daya lekat mekanis tahan suhu tinggi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Rekayasa Material & R&D */}
      <section className="py-24 bg-surface border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">Pusat Keunggulan R&amp;D Ekologis</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Kekuatan Cocogum tidak bersumber dari sulap, melainkan rekayasa kimia terapan. Selulosa amorfus kelapa (<em>amorphous cellulose</em>) dikumpulkan lalu dihidrolisis dalam lingkungan pabrik steril hingga memunculkan jaringan ikatan silang yang stabil untuk aplikasi berat.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl border-l-[6px] border-primary">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">water_drop</span>
              <h3 className="font-bold text-on-surface mb-3 text-lg">Resistensi Kelembapan Optimal</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Jaringan bio-molekul kami mencegah laju penyerapan air yang terlalu dini (<em>water-resistance delay</em>) sehingga menjaga struktur solid di gudang penyimpanan klien yang dingin atau tropis.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border-l-[6px] border-primary">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">vibration</span>
              <h3 className="font-bold text-on-surface mb-3 text-lg">Durabilitas Anti-Fraktur</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Kelenturan elastis pengikat turunan nabati mampu menetralisir guncangan geser mikro yang rutin ditemui selama distribusi skala tonase dalam peti kemas pelabuhan.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl border-l-[6px] border-primary">
              <span className="material-symbols-outlined text-3xl text-primary mb-4">co2</span>
              <h3 className="font-bold text-on-surface mb-3 text-lg">100% Volatile Organic Free</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Sama kuatnya dengan urea formaldehida, namun sama sekali melepaskan emisi VOC beracun (<em>zero outgassing</em>), memastikan produk ekspor Anda diterima ketat oleh kepabeanan kriteria Eropa (CE).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 01: Briq (Energi) */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">VERTIKAL 01: ENERGI (BIOMASSA)</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">Briq: Perekat Briket Kelas Atas</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Dioptimalkan untuk pasar kuliner profesional (HORECA) dan manufaktur pemanas boiler industri. Perekat briket arang briq menjanjikan retensi tegangan termal hingga derajat maksimum tanpa residu pelepasan kimia. <span className="font-bold text-primary italic">Kualitas Ekspor Unggulan.</span>
              </p>
              <ul className="space-y-4 mb-10 text-on-surface-variant">
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>Pembakaran Nir-Asap (Smokeless):</strong> Menjaga kemurnian karbon saat terpapar api (95% Fixed Carbon support).</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary-fixed mt-1">check_circle</span>
                  <span><strong>Kepadatan Ekstrem:</strong> Tekanan internal (<em>crushing strength</em>) unggul untuk mencegah pecah pelabuhan.</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-container hover:-translate-y-1 transition-all flex items-center shadow-lg gap-3">
                Inquiry Sektor Briket <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative border-8 border-surface-container-lowest">
                <img alt="Briquette Production" className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM50B0UD4q4tnXufehxkMZVSvG4wuTz1GAQrmWxWKEwS_GhFL4B6iVeRDi1_LZ_yLAc1-HhjC6lJg0tH3rvnN_y2PX7YUbhRh9mHCJxJ5miEw5tIQ5KwdHA3yuga-LAeeuZWPOIBVH12Z-NTRPQKmUrSqP37OHoFgmsHHRoxyim8cw0T5zXSwJq15bvyzqWZRilPVyPshtMU_4soYAMF5susnN8AAoALbMragrf_fYobWWBDa-wiIuJSO9cvI2kNCCIWclz0LqTKw" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 02: Coal (Lingkungan / Tambang) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-3xl p-8 lg:p-16 border border-outline-variant/20 shadow-2xl overflow-hidden relative">
            <div className="grain-texture absolute inset-0 opacity-30"></div>
            <div className="lg:col-span-8 relative z-10 lg:pr-12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">VERTIKAL 02: PENAMBANGAN & LINGKUNGAN</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">Coal: Karbon Aktif & Penekan Debu</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Diaplikasikan pada fasilitas pengolahan batu bara basah/kering. Cocogum memunculkan mikroporositas tingkat lanjut dan luas permukaan spesifik untuk arang adsorpsi tingkat kimia yang kuat. Berfungsi ganda secara efektif sebagai bahan pelapis jalur angkut rel (*anti-dust suppressant*).
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                  <h4 className="font-bold text-primary mb-2 text-xl font-headline">Iodine Value Maksimal</h4>
                  <p className="text-on-surface-variant text-sm">Menjaga kemurnian adsorpsi bahan VOC pada proses filtrasi industri.</p>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                  <h4 className="font-bold text-primary mb-2 text-xl font-headline">Penekan Debu Silika</h4>
                  <p className="text-on-surface-variant text-sm">Mengaglomerasi partikel butiran halus (&lt; 5 micron) untuk keselamatan di jalur pelabuhan bongkar muat.</p>
                </div>
              </div>
              <button className="bg-primary text-white border-2 border-primary hover:bg-surface-container-lowest hover:text-primary px-8 py-4 rounded-lg font-bold transition-all flex items-center shadow-lg gap-3">
                Spesifikasi MSDS Karbon Aktif <span className="material-symbols-outlined text-xl">download</span>
              </button>
            </div>
            <div className="border border-outline-variant/20 lg:col-span-4 rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
              <img alt="Karbon Aktif" className="h-full w-full object-cover grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk47V1DVPTry_-chxPqLD_lD-oMBYqM8l_xeQ7BItWOYePh1UeKlXNnmQx_sIWH7KHI10RM-PdrjxAbXcHczRI7MKe-EqF3XbN1exXygHfrx1RgGS3H9jQKvPVeOr6MUbvaV5p114oGADYQS9NI8NtjppsAx1GEDDVMXrdby5uR9FgWOv07NbHzzRAvuTqw6jB7lsUNglPNmwxSLzmhXDS5S1CiKSzCkBuuhfD37n4_q8J-GwYaKzFHzUYD8fkKnJKXPXiaOp6kyA" />
            </div>
          </div>
        </div>
      </section>

      {/* Vertical 03: Feed (Agro-Akuakultur) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">VERTIKAL 03: AKUAKULTUR INDUSTRI</span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">Feed: Pengikat Pelet Bio-Nutrisi</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Rekan fungsional industri pakan peternakan canggih. Menghadirkan jaminan ketahanan tinggi di air (*water-stability 4+ hours*) untuk mencegah degradasi kolam perikanan sembari mengunci protein utama tanpa menyebabkan intervensi anti-nutrisi gizi pencernaan.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 block">EFISIENSI BIAYA</span>
                  <p className="text-primary font-bold text-lg font-headline">FCR (Feed) Terjaga</p>
                  <p className="text-xs text-on-surface-variant mt-2">Dosis serapan hanya 1-2% volume.</p>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1 block">KAMPU-CERNA</span>
                  <p className="text-primary font-bold text-lg font-headline">Toksisitas Nol Absolut</p>
                  <p className="text-xs text-on-surface-variant mt-2">Aman dicerna segala biotik ikan tropis.</p>
                </div>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-container transition-all flex items-center shadow-lg gap-3">
                Inquiry Sektor Akuakultur <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
            <div className="w-full lg:w-7/12 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-outline-variant/10">
                <img alt="Pakan Ikan" className="w-full h-full object-cover grayscale opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtRua1vEdWz65dVnwVJiUFp4rqUmMkUs5bGW1PAYTilz3bzRCw9IhpYTe-w9O8YuOFIDqxSC3nimXwskkJmbLd6YTMOPCokl78HJNpysipbkk22GE6r7wuDGkJVpIIWuIu4WaWCSQsepKp2f4ljWnO25XhbGPaVMcvvV5-o9MKsCUceT5uzyo5RoanP4U1G7opMGULCXyVtjJjs74S1A1lPoznK1wQKzqXyStk96vRSyvDIJ7lCNsRdCUhifXWg1d65_2idiUG2F0" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Verticals 04 & 05 (Mosq & Agro) Full Width Treatments */}
      {/* Mosq */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="w-full lg:w-1/2">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">VERTIKAL 04: TEKNOLOGI PENGENDALIAN NYAMUK</span>
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">Mosq: Resin Perlindungan Presisi</h2>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Ekstraksi bubuk nabati canggih yang diformulasikan sebagai media pemampad (*slow-burning base*) industri anti nyamuk bakar (mosquito repllent coils). 
                </p>
                <div className="p-6 bg-surface-container-low border-l-[4px] border-primary mb-8 text-on-surface-variant text-sm">
                  <strong className="text-primary font-bold">Kualitas Ruang Bakar Cemerlang:</strong> Menyerap dan melepaskan senyawa penolak d-allethrin ke udara secara rata <strong>tanpa letupan patahan koil tengah</strong>. Menghasilkan karakteristik pembakaran karbon-mini (karbon lebih rendah) bagi perlindungan pernafasan balita jangka panjang.
                </div>
                <a href="/hubungi" className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-surface-tint inline-flex gap-2">Data Toksikologi Klinis <span className="material-symbols-outlined text-sm pt-0.5">open_in_new</span></a>
             </div>
             <div className="w-full lg:w-1/2 relative h-96">
                {/* Image layout overlap */}
                <div className="absolute right-0 top-0 w-4/5 h-full rounded-2xl overflow-hidden shadow-2xl">
                   <img alt="Perlindungan Nyamuk" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB08ETZXHq_eK4SKR1QQPs-rdcKCle7KVS7izBoqzAb6jjq7K9aB1L6St2PflCDRbhakZ49RUJduZIooWaJI9FAK9eZJvfwNKhsJHKhEP_Xqa65SIjf3QdYWa1x6gvADQrVv6VamEvNMRNLhYXKP_CvUrhTjLnxj6DqlF-pZp7G6EOUbYBzhVBtmBsaWkSgvC02DVMwA75LwvWRYxcv6nIEQsXsDIhDMvvywKhd71a0uazOw4MRuxidL5jLbNHIPvhqDfhm5I50u00" />
                </div>
                <div className="absolute left-0 bottom-12 w-2/5 p-6 bg-primary text-white rounded-xl shadow-2xl">
                  <span className="material-symbols-outlined text-3xl mb-2 text-primary-fixed">timer</span>
                  <p className="font-bold text-lg leading-tight">Burn-rate Konstan (8 Jam)</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Agro */}
      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
           <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
             <div className="w-full lg:w-1/2">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">VERTIKAL 05: SMART HORTICULTURE</span>
                <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mt-4 mb-6">Agro: Substrat Media Sirkular</h2>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                  Binder hortikultural yang direkayasa khusus demi menjaga tingkat *shrinkage* tanah dan retensi kapiler air ekstrem. Solusi primer bagi agrobotani *hydroponic*, pemantap kelembapan (soil conditioner), serta penahan nutrisi matriks pupuk kompresi (slow-release blocks).
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="px-5 py-3 bg-surface-container-highest text-sm font-bold rounded-lg text-primary">Substrat Peat Moss Netral</span>
                  <span className="px-5 py-3 bg-surface-container-highest text-sm font-bold rounded-lg text-primary">Ekspansi Porositas 200%</span>
                  <span className="px-5 py-3 bg-primary text-white text-sm font-bold rounded-lg shadow-md">ISO Phytosanitary Karantina</span>
                </div>
                <a href="/hubungi" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold transition-all hover:bg-primary hover:text-white flex items-center shadow-sm w-fit gap-3">
                  Evolusi Lahan Penanaman <span className="material-symbols-outlined text-xl">psychiatry</span>
                </a>
             </div>
             <div className="w-full lg:w-1/2 relative h-96">
                <div className="absolute left-0 top-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                   <img alt="Substrat Agro" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6c4A2Nd0fNgQzZLoiEk0FOebuc3TMQSzU8YBow1rRZUJImcApGCUU0GOOA8c0UOnArvfKJrtxcsQ_dLOcQDwd9eLAg7W4CV2tojDxzqkC2_nXnxO4OrcSa2-eSB7iKWUPS46bn_1aTfmrcxsoKxWYqyHW9E_WCze-YqFZrKNHs2PzyGK3406PLBhGYTQ-KDSyHUVOTsAbaqXmUIo4wBItg2BqPBOa8yAo7_Truh45yUnICjJaeP2rv2CQ0lyccouiUGIvMI2pirI" />
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW: Standar Spesifikasi Mutu (QA Table) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-3">TENTANG PARAMETER KUALITAS</span>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Profil Mutu Standar Manufaktur (General QA)</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Kami transparan terhadap nilai material fisik dan biokimia bawaan lini persediaan ekspor kami. Formula molekular spesifik dapat disesuaikan pada kebutuhan persentase solid (*solid content*) mesin kalibrator Anda.</p>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/20 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-5 px-6 font-headline font-bold uppercase tracking-widest text-xs border-r border-white/10 w-1/3">Parameter Indikator</th>
                  <th className="py-5 px-6 font-headline font-bold uppercase tracking-widest text-xs">Nilai Rata-rata Uji Standar (Customizable)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 text-on-surface-variant">
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Viskositas Material Dasar</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">3,000 - 45,000 cps (Sesuai Kustomisasi Aliran)</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Kandungan Air Berlebih (Moisture)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">Terbatas ketat di &lt; 12.0% w/w</td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Ukuran Presisi Ayakan (Pass Mesh)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">Jaminan 95% pass rate pada spesifikasi Mesh 80-100</td>
                </tr>
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Potensi Pembakaran Abu (Ash Content)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">Ekonomi ekspor: 2% hingga &lt; 8% Mks. (Nol Silika Tambahan)</td>
                </tr>
                <tr className="hover:bg-surface-container-high transition-colors">
                  <td className="py-5 px-6 font-semibold text-on-surface">Stabilitas Karbon Simpanan (Shelf-Life)</td>
                  <td className="py-5 px-6 font-mono text-sm border-l border-outline-variant/10">+18 Bulan pada penyimpanan gudang di bawah 30&deg;C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section Terkonversi Akhir */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <span className="text-surface-container-lowest font-bold tracking-[0.3em] text-xs uppercase mb-6 block border border-surface-container/30 px-4 py-2 w-fit mx-auto rounded">Pengujian Kinerja Terbuka</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-white mb-6 tracking-tight max-w-4xl mx-auto">
              Jadwalkan Uji Sampel Industrial di Titik Pabrik Anda Sendiri.
            </h2>
            <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
              Tim engineering material kami menyambut evaluasi ketat dari insinyur lini muka klien B2B skala menengah-ke-atas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/hubungi" className="bg-white text-primary px-10 py-5 rounded-lg font-bold hover:bg-primary-fixed hover:-translate-y-1 hover:shadow-2xl transition-all shadow-lg text-lg flex items-center justify-center gap-3">
                Jadwalkan Suplai Purwarupa <span className="material-symbols-outlined">description</span>
              </a>
            </div>
        </div>
        {/* Background Accents */}
        <div className="absolute inset-x-0 bottom-0 mix-blend-overlay opacity-20 pointer-events-none h-64 bg-gradient-to-t from-black to-transparent"></div>
      </section>
    </>
  );
}
