export default function Teknologi() {
  return (
    <>
      {/* Hero Section: The Science of Organic Bonds */}
      <section className="relative bg-primary overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-95"></div>
        {/* Subtle geometric or lab overlay */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
          <img className="w-full h-full object-cover mix-blend-overlay opacity-30 object-right" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAQ_96z6Lp2eZ_53M5rr-nYcZZdzkNp1PIafwIS42z8DfQnpKWqTgG0xMqmbChhl_2gKHMeEB_8aKht9Eei-3LkSqRyFw0NLwa1ArqB6rJhW0lbPQJ7PU8mGXIvv7fUpcRz7t-6982rEQe-r56LEdJALaGu3a6UK5-h-Rw97BBPcceS7qXRTKh3A82E06HrxwU5PxliQ4twh2Hmr3OrAP_9Uwd_557SWijR-IvtS8FAwfVPpDp0vFO8BM-f0jVtYZHEhNcU4UFkUM" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent pointer-events-none"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 bg-surface-container-lowest/10 text-emerald-100 border border-emerald-100/30 text-xs font-bold tracking-[0.2em] uppercase mb-6 rounded-sm backdrop-blur-sm shadow-sm">Pusat Riset Molekular</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Sains <br /><span className="text-white">Ikatan Struktural.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container/90 leading-relaxed mb-8">
              Di fasilitas labolatorium <em>Cocogum Industrial</em>, selulosa sisa pertanian tak lagi dipandang sebagai limbah—melainkan bahan dasar (<em>backbone</em>) bagi perekat polimer silang berkekuatan industri berat. Kami menyaingi sintetis beracun hingga ke tingkat atom.
            </p>
            <div className="flex gap-4">
              <a href="#analisis-data" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-tint hover:-translate-y-1 hover:text-white transition-all shadow-lg flex items-center gap-2">
                Eksplorasi Data Klinis <span className="material-symbols-outlined text-xl">insights</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Mekanisme Inti (Core Mechanism) */}
      <section className="py-24 bg-surface border-b border-outline-variant/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-3">TEKNOLOGI EKSKLUSIF</span>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Mekanisme <em>Proprietary Modified Binder</em></h2>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">Rahasia kami bukan pada sekadar "bahan alami", melainkan pada proses fraksinasi termal mutakhir yang mengaktifkan agen penahan kelembapan (*water resistant agent*) bawaan struktur organik.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-surface-container-highest flex justify-center items-center mb-6 shadow-sm border border-outline-variant/20 -rotate-3 hover:rotate-0 transition-transform">
                 <span className="material-symbols-outlined text-5xl text-primary">hub</span>
              </div>
              <h3 className="text-xl font-bold font-headline text-on-surface mb-3">Re-Aglomerasi Partikel</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">Polimer kami berperilaku bak jaring laba-laba mikro, mengikat serbuk karbon, biomassa, hingga substrat berpasir untuk saling merekat satu sama lain tanpa membutuhkan ruang hampa (*vacuum curing*).</p>
            </div>
            <div className="flex flex-col items-center md:pt-12">
              <div className="w-24 h-24 rounded-2xl bg-primary flex justify-center items-center mb-6 shadow-xl border border-primary-fixed/20 rotate-3 hover:rotate-0 transition-transform">
                 <span className="material-symbols-outlined text-5xl text-white">thermostat</span>
              </div>
              <h3 className="text-xl font-bold font-headline text-on-surface mb-3">Kalibrasi Penurunan Suhu</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">Perekat tradisional menuntut tungku bersuhu rata-rata di atas 400&deg;C. Material *Modified Binder* kustom kami berinteraksi dan mengeras sempurna pada rentang suhu yang jauh lebih hemat (<em>drop &lt; 40% heat required</em>).</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-surface-container-highest flex justify-center items-center mb-6 shadow-sm border border-outline-variant/20 -rotate-3 hover:rotate-0 transition-transform">
                 <span className="material-symbols-outlined text-5xl text-primary">shield_locked</span>
              </div>
              <h3 className="text-xl font-bold font-headline text-on-surface mb-3">Rasio Pelepasan Nol (Zero Outgassing)</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed px-4">Tidak seperti Formaldehida yang melepaskan partikel penipis ozon ketika memuai, lem organik industri Cocogum dikunci ke dalam ikatan steril, menjaganya agar dapat dilabeli 100% *Non-Toxic*.</p>
            </div>
          </div>
        </div>
        
        {/* Background connector line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block -z-0"></div>
      </section>

      {/* Extreme Deep Analysis Data (Technical Comparison) */}
      <section id="analisis-data" className="py-24 bg-surface-container-low">
         <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-2xl">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">KOMPARASI KEKUATAN</span>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-4">Mempensiunkan Lem Sintetik</h2>
                <p className="text-on-surface-variant">Insinyur kami mengujikan batas patah tarik dan durabilitas dari <em>Cocogum Modified Organic Binder</em> (CMOB) secara lateral terhadap pengikat tapioka mentah dan Urea Formaldehida standar komersil.</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg border border-outline-variant/20 shadow-sm flex items-center gap-3">
                 <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                 <span className="text-sm font-bold text-on-surface-variant">Lolos Uji Laboratorium Independen</span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-xl border border-outline-variant/10">
              <table className="w-full text-left bg-surface-container-lowest border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-6 bg-surface-container text-on-surface-variant font-headline font-bold uppercase tracking-wider text-xs border-r border-outline-variant/20 w-1/4">Variabel Ujicoba Fisik</th>
                    {/* The Hero Column */}
                    <th className="p-6 bg-primary text-white font-headline font-extrabold text-lg border-r border-primary-fixed/20">
                       <div className="flex flex-col items-start gap-3">
                         <span className="bg-surface-tint text-on-primary px-3 py-1 text-[10px] uppercase rounded shadow-sm tracking-widest inline-block leading-none">Sangat Unggul</span>
                         <span>Cocogum CMOB (Organik Modifikasi)</span>
                       </div>
                    </th>
                    <th className="p-6 bg-red-900/5 text-red-950/70 font-headline font-bold text-sm border-r border-outline-variant/20">Urea-Formaldehida (Sintetik Keras)</th>
                    <th className="p-6 bg-amber-900/5 text-amber-950/70 font-headline font-bold text-sm">Tapioka / Singkong (Organik Mentah)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-sm">
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <td className="p-6 font-semibold text-on-surface border-r border-outline-variant/10">Ketahanan Tarik (Tensile Strength)</td>
                    <td className="p-6 bg-primary/5 text-primary font-bold border-r border-primary/20">Presisi Ekstrem (Industrial Load)</td>
                    <td className="p-6 text-on-surface-variant border-r border-outline-variant/10">Tinggi (Namun Sangat Getas / Rapuh)</td>
                    <td className="p-6 text-on-surface-variant opacity-70 italic">Sangat Rendah (Mudah Hancur)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <td className="p-6 font-semibold text-on-surface border-r border-outline-variant/10">Profil Resistensi Air (Water Shield)</td>
                    <td className="p-6 bg-primary/5 text-primary font-bold border-r border-primary/20">Lapisan Film Anti-Air Tahan Lama</td>
                    <td className="p-6 text-on-surface-variant border-r border-outline-variant/10">Tahan Air</td>
                    <td className="p-6 text-on-surface-variant opacity-70 italic">Gagal Total (Degradasi Cepat)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <td className="p-6 font-semibold text-on-surface border-r border-outline-variant/10">Asupan Energi Dekarbonisasi</td>
                    <td className="p-6 bg-primary/5 text-primary font-bold border-r border-primary/20">Sangat Hemat (-40% Suhu Pemanas)</td>
                    <td className="p-6 text-on-surface-variant border-r border-outline-variant/10">Sangat Rakus Panas (Suhu Ekstrem)</td>
                    <td className="p-6 text-on-surface-variant opacity-70 italic">Sangat Rakus Panas (Suhu Ekstrem)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <td className="p-6 font-semibold text-on-surface border-r border-outline-variant/10">Risiko Lingkungan Beracun (VOC)</td>
                    <td className="p-6 bg-primary/5 text-primary text-xl font-black border-r border-primary/20">0% (Food-Grade Safe)</td>
                    <td className="p-6 text-red-600 font-bold border-r border-outline-variant/10">Status Bahaya (Karsinogenik Emisi)</td>
                    <td className="p-6 text-on-surface-variant opacity-70 italic">0% (Aman Konsumsi)</td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <td className="p-6 font-semibold text-on-surface border-r border-outline-variant/10">Stabilitas Gudang (Shelf-Life)</td>
                    <td className="p-6 bg-primary/5 text-primary font-bold border-r border-primary/20">+18 Bulan Bebas Jamur</td>
                    <td className="p-6 text-on-surface-variant border-r border-outline-variant/10">Tak Terbatas (Berkat Racun Sintetis)</td>
                    <td className="p-6 text-on-surface-variant opacity-70 italic">3-6 Bulan (Risiko Berjamur Cepat)</td>
                  </tr>
                </tbody>
              </table>
            </div>
         </div>
      </section>

      {/* Arsitektur Dampak ESG B2B */}
      <section className="py-24 bg-surface relative">
        <div className="grain-texture absolute inset-0 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">KUALIFIKASI KEPABEANAN</span>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6">Menaikkan Skor Pelaporan ESG Korporat Anda</h2>
            <p className="text-on-surface-variant text-lg">Dalam iklim perdagangan global, rekor jejak emisi bukan lagi sekadar himbauan moral, melainkan syarat ekspor antarbenua (seperti *CBAM Eropa*). Mengadopsi pilar kimia hijau Cocogum secara langsung melindungi portofolio produk Anda dari pajak karbon penalti kepabeanan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact 1 */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 shadow-md rounded-2xl flex flex-col hover:border-primary hover:shadow-2xl transition-all duration-300">
              <div className="bg-primary-container p-4 rounded-xl mb-6 w-fit inline-flex shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-primary-fixed">air</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Mandat Keamanan Pernapasan</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Pabrik pelet dan fasilitas pemotong tak lagi mewajibkan proteksi toksik ganda untuk buruh, meningkatkan indeks K3 Keselamatan Kerja.</p>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <span className="inline-block px-3 py-1 bg-surface-container text-xs font-bold text-on-surface-variant uppercase rounded shadow-inner">Sertifikasi VOC-Free</span>
              </div>
            </div>
            
            {/* Impact 2 */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 shadow-md rounded-2xl flex flex-col hover:border-primary hover:shadow-2xl transition-all duration-300">
              <div className="bg-primary-container p-4 rounded-xl mb-6 w-fit inline-flex shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-primary-fixed">psychiatry</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Penutupan Siklus Organik</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Aman bagi tanah dan saluran air lokal. Residu buangan pengikat ini dapat dikomposkan, mengebiri bujet pengolahan limbah B3 perusahaan secara permanen.</p>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <span className="inline-block px-3 py-1 bg-surface-container text-xs font-bold text-on-surface-variant uppercase rounded shadow-inner">Tingkat Bio-Turunan Ekstrem</span>
              </div>
            </div>

            {/* Impact 3 */}
            <div className="bg-surface-container-lowest p-8 border border-outline-variant/20 shadow-md rounded-2xl flex flex-col hover:border-primary hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="bg-primary-container p-4 rounded-xl mb-6 w-fit inline-flex shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-primary-fixed">eco</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3">Reduksi Polusi Abu Pembakaran</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Rendahnya volume asupan pengikat (<em>low consumption dose</em>) meminimalisir debu pelepasan (*ash content*) ke atmosfer secara sangat agresif untuk pemanas boiler briket/biomassa.</p>
              <div className="mt-auto pt-6 border-t border-outline-variant/10">
                <span className="inline-block px-3 py-1 bg-surface-container text-xs font-bold text-on-surface-variant uppercase rounded shadow-inner">Optimasi Netralitas Karbon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Asimetris Penutup */}
      <section className="bg-surface-container-lowest py-24 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
           <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
             
             {/* Abstract wave or shape */}
             <div className="absolute top-0 right-0 w-1/2 h-full -skew-x-12 bg-primary-fixed-dim opacity-10 hidden lg:block"></div>
             <div className="absolute bottom-0 right-10 w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

             <div className="lg:w-2/3 relative z-10">
                <h2 className="text-3xl lg:text-5xl font-headline font-extrabold text-white mb-6 uppercase tracking-tight">Selidiki Laporan Teknis Lengkap.</h2>
                <p className="text-on-primary-container text-xl max-w-xl leading-relaxed mb-8">
                  Verifikasi parameter kekuatan mekanis inovasi material kimia sirkuler kami tanpa biaya. Lembar Data Keselamatan Material (MSDS) dan Studi Kasus Termal terarsip secara profesional.
                </p>
                <div className="flex gap-4">
                  <a href="/hubungi" className="bg-white text-primary px-8 py-4 font-bold rounded-lg hover:bg-surface-lowest transition-colors shadow-lg flex items-center gap-2">
                     Unduh Whitepaper (MSDS) <span className="material-symbols-outlined pb-0.5">download</span>
                  </a>
                </div>
             </div>

             <div className="hidden lg:block lg:w-1/3 relative z-10 text-right">
                <span className="material-symbols-outlined text-9xl text-white opacity-20">library_books</span>
             </div>
           </div>
        </div>
      </section>
    </>
  );
}
