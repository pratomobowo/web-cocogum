import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocogum FEED — Perekat Pelet Pakan Ikan & Udang (Aquafeed Binder)",
  description:
    "Perekat organik (pellet binder) untuk pakan akuatik & unggas. 100% Non-toxic bebas formaldehida. Mencegah pakan hancur di air dan meningkatkan konversi FCR ternak.",
  alternates: {
    canonical: "https://cocogum.com/produk/feed",
  },
  openGraph: {
    title: "Cocogum FEED — Binder Pelet Pakan Akuatik & Unggas",
    description:
      "Tingkatkan water stability pelet pakan tambak Anda dengan perekat organik Cocogum FEED. Kurangi limbah amonia air dan cegah kerugian efisiensi FCR.",
    url: "https://cocogum.com/produk/feed",
  },
};

export default function ProdukFeed() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagebannerproduk.webp"}
             fill
             className="object-cover opacity-40 grayscale-[20%]"
             alt="Perekat Pelet Pakan Ternak Cocogum FEED"
             priority={true}
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-4 mb-6 relative">
              <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-2 rounded-xl backdrop-blur-md border border-primary/20">
                grass
              </span>
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-sm">
                Lini Produk Organik Pakan & Akuakultur 
              </span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-xl filter">
              Cocogum FEED. <br />
              <span className="text-primary-fixed">Binder Cerdas Pakan Ternak.</span>
            </h1>
            
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl">
              Ciptakan pakan ikan, udang, dan unggas yang tidak mudah hancur mendebu. Jauhkan kolam ras (tambak) dari polusi sisa suspensi amonia dengan ikatan stabil gahar berbasis nabati. 100% Food-Grade aman untuk hewan.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hubungi"
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 font-bold rounded-xl transition-all shadow-2xl flex items-center gap-2 group/btn active:scale-95 duration-200"
              >
                Minta Dukungan Uji Sampel <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
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
              Investasi FCR (Feed Conversion Ratio) yang Tepat
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Salah satu musuh terbesar penambak (aquaculture) adalah air tambak yang beracun karena pakan pelet lekas lumer. Zat pakan larut, dimakan percuma oleh bakteri jahat dan mendongkrak kadar toksin amonia, sebelum sempat dicerna oleh ikan dan udang peliharaan.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Pabrik pakan moderen memakai perekat organik Cocogum FEED untuk mengunci rapat *water stability* selama berjam-jam tanpa harus memanipulasi enzim pencernaan lambung hewan.
            </p>
            
            <div className="bg-surface-container-low border border-primary/20 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">compare_arrows</span> Perbandingan Langsung
                </h4>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-red-400 mt-1">cancel</span>
                        <div>
                            <p className="font-bold text-on-surface text-sm">Resin Sintetis & Urea</p>
                            <p className="text-on-surface-variant text-sm">Racun akumulatif di badan hewan (mempengaruhi rasa ikan bakar), harganya sangat mahal, dan sulit dicerna usus.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                        <div>
                            <p className="font-bold text-primary text-sm">Cocogum FEED</p>
                            <p className="text-on-surface-variant text-sm">Organik non-toxic (ramah ekologi), usus menyerap pakan secara menyeluruh, tingkat harapan hidup (survival rate) stabil tinggi.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM50B0UD4q4tnXufehxkMZVSvG4wuTz1GAQrmWxWKEwS_GhFL4B6iVeRDi1_LZ_yLAc1-HhjC6lJg0tH3rvnN_y2PX7YUbhRh9mHCJxJ5miEw5tIQ5KwdHA3yuga-LAeeuZWPOIBVH12Z-NTRPQKmUrSqP37OHoFgmsHHRoxyim8cw0T5zXSwJq15bvyzqWZRilPVyPshtMU_4soYAMF5susnN8AAoALbMragrf_fYobWWBDa-wiIuJSO9cvI2kNCCIWclz0LqTKw"
                alt="Pelet pakan tambak diolah menggunakan binder Cocogum FEED"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/10 max-w-xs">
              <span className="text-primary font-headline text-4xl font-black">20%</span>
              <p className="text-sm font-medium mt-1 text-on-surface-variant">
                Ekspetasi penyelamatan <strong className="text-on-surface">Food Waste</strong> harian akibat pelindian (leaching) kolam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Akuatik */}
      <section className="py-24 bg-surface-container-low border-t border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Water & Nutrients Security</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">Solusi Produksi Tambak Bebas Penyakit</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fitur 1 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">waves</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Tahan Rendam (Water Stability) Tinggi</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Pelet terapung dan tenggelam dijaga agar tidak ambyar hingga hitungan jam. Nutrisi krusial dimakan utuh tanpa ada esens protein yang terlarut sia-sia ke air.
                    </p>
                </div>
                {/* Fitur 2 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">eco</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Murni Nabati & Digestible</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Bio-serat batok kelapa amat mudah dicerna usus ikan. Memberikan dorongan asupan prebiotik mini ketimbang mengisi perut ternak dengan zat kimia kosong aspal/resin.
                    </p>
                </div>
                {/* Fitur 3 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">opacity</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Pencegah Kekeruhan Air (Amonia Drops)</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Melindungi habitat kolam. Karena sedikit pakan yang luruh jadi pasir, level keasaman amonia memburuk dapat dihindari sepenuhnya—ikan bernapas lega.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">
                Mari Rekayasa Ulang Lini Pelet Pakan Anda
            </h2>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                Tingkatkan *branding* pabrik pakan unggas dan tambak kelautan Anda dengan status 100% Organik dan FCR memukau berkat perekat mutakhir Cocogum FEED.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/hubungi"
                    className="bg-primary text-white px-8 py-4 font-bold rounded-lg hover:bg-primary-container transition-all shadow-lg flex justify-center items-center gap-2 group"
                >
                    Konsultasikan Pabrik Pakan Anda <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                    href="/produk/mosq"
                    className="bg-surface-container text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-variant transition-all flex justify-center items-center"
                >
                    Lihat Cocogum MOSQ 
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
