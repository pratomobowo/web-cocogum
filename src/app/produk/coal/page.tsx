import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocogum COAL — Perekat Briket Batubara & Coal Fines",
  description:
    "Solusi binder organik untuk mencetak debu batubara (coal fines) menjadi briket berkalori tinggi. Anti-hancur, bebas racun B3, kalori terjaga mutlak.",
  alternates: {
    canonical: "https://cocogum.com/produk/coal",
  },
  openGraph: {
    title: "Cocogum COAL — Penyelamat Debu Batubara Anda",
    description:
      "Ubah limbah tambang batubara (coal fines) menjadi aset bernilai energi tinggi menggunakan binder organik ultra kuat dari Cocogum.",
    url: "https://cocogum.com/produk/coal",
  },
};

export default function ProdukCoal() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagehero2.webp"}
             fill
             className="object-cover opacity-65 grayscale-[40%]"
             alt="Perekat Briket Batubara dan Coal Fines Cocogum COAL"
             priority={true}
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-4 mb-6 relative">
              <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-2 rounded-xl backdrop-blur-md border border-primary/20">
                factory
              </span>
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-sm">
                Lini Produk Organik Tambang & PLTU 
              </span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-xl filter">
              Cocogum COAL. <br />
              <span className="text-primary-fixed">Binder Coal Fines Industri.</span>
            </h1>
            
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl">
              Ubah gunungan debu batubara (<em>coal fines</em>) yang tak ternilai menjadi briket padat berkalori tinggi. Binder organik murni, kompatibel dengan segala mesin cetak (<em>roller press</em>), dan menjamin nilai bakar tetap agresif di dalam *boiler*.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hubungi"
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 font-bold rounded-xl transition-all shadow-2xl flex items-center gap-2 group/btn active:scale-95 duration-200"
              >
                Minta Sampel COAL <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Pain Points Table */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">
              Kembalikan Nilai Ekonomi Debu Batubara Anda
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Hingga 20% dari total penambangan batubara berakhir sebagai <em>fines</em> (debu halus). Dibuang mencemari lingkungan, dibakar langsung akan menyumbat boiler. Untuk mengekstrasinya menjadi aset, pencetakan (<em>briquetting</em>) adalah satu-satunya jalan.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Cocogum COAL adalah biopolimer mutakhir yang mampu mengikat material tambang *hard-to-bridge* dengan kelembapan variabel, memulihkan rantai suplai energi Anda tanpa ampas B3 berbahaya.
            </p>
            
            <div className="bg-surface-container-low border border-primary/20 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">compare_arrows</span> Perbandingan Langsung
                </h4>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-red-400 mt-1">cancel</span>
                        <div>
                            <p className="font-bold text-on-surface text-sm">Molase & Aspal Sintetis</p>
                            <p className="text-on-surface-variant text-sm">Menimbulkan endapan logam, berasap hitam pekat, mengurangi kalori bahan utama.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                        <div>
                            <p className="font-bold text-primary text-sm">Cocogum COAL</p>
                            <p className="text-on-surface-variant text-sm">Tidak mengganggu Kalori (Calorific Value) batubara, tahan hujan (water-resistant) saat stockpile.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/imagecoal.webp"
                alt="Produksi debu batubara menjadi briket dengan Cocogum COAL"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/10 max-w-xs">
              <span className="text-primary font-headline text-4xl font-black">Zero</span>
              <p className="text-sm font-medium mt-1 text-on-surface-variant">
                Bebas karsinogen dan <strong className="text-on-surface">Toxic Ash</strong> bawaan sintetis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Ekspor */}
      <section className="py-24 bg-surface-container-low border-t border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Engineered for Extreme Mining</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">Dirancang Khusus Untuk Pabrik Pengolahan</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fitur 1 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">lens_blur</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Tahan Bentur Skala Tonase</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Lulus drop-test logistik curah. Briket tidak rapuh dan tidak kembali hancur menjadi *fines* saat dituang masal ke perut kapal tongkang (barge).
                    </p>
                </div>
                {/* Fitur 2 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">local_fire_department</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Menjaga Kalori Mutlak</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Perekat biopolimer murni bebas debu tanah liat, memastikan tidak ada penurunan Gross Calorific Value (GCV) pada material batubara asli Anda.
                    </p>
                </div>
                {/* Fitur 3 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">manufacturing</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Mesin Roller Press Friendly</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Rasio rekat konsisten yang mencegah pemblokiran selot logam di mesin cetak pres (<em>roller press</em>) bertekanan ribuan PSI di site tambang Anda.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">
                Amankan Aset Debu Batubara Anda Hari Ini
            </h2>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                Tingkatkan nilai ekonomis coal fines di lokasi penambangan atau dermaga Anda. Diskusikan kapasitas pengolahan dan kami akan mensuplai binder Cocogum COAL skala industrial.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/hubungi"
                    className="bg-primary text-white px-8 py-4 font-bold rounded-lg hover:bg-primary-container transition-all shadow-lg flex justify-center items-center gap-2 group"
                >
                    Konsultasi Kebutuhan COAL <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                    href="/produk/briq"
                    className="bg-surface-container text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-variant transition-all flex justify-center items-center"
                >
                    Lihat Cocogum BRIQ untuk Biomassa
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
