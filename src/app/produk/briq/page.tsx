import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocogum BRIQ — Perekat Briket Arang Batok Kelapa Ekspor",
  description:
    "Perekat briket arang batok kelapa (organic binder) khusus ekspor. Pangkas waktu oven, pertahankan 95% fixed carbon, tanpa asap (smokeless), bebas formaldehida.",
  alternates: {
    canonical: "https://cocogum.com/produk/briq",
  },
  openGraph: {
    title: "Cocogum BRIQ — Binder Briket Arang Premium",
    description:
      "Solusi perekat organik (pengganti tapioka) untuk produksi briket arang shisha kualitas ekspor. Tanpa emisi gas beracun, ikatan ekstra kuat, dan tahan banting di logistik.",
    url: "https://cocogum.com/produk/briq",
  },
};

export default function ProdukBriq() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagehero1.webp"}
             fill
             className="object-cover opacity-40 grayscale-[20%]"
             alt="Perekat Briket Arang Batok Kelapa Ekspor Cocogum BRIQ"
             priority={true}
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-4 mb-6 relative">
              <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-2 rounded-xl backdrop-blur-md border border-primary/20">
                forest
              </span>
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-sm">
                Lini Produk Organik Binder
              </span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-xl filter">
              Cocogum BRIQ. <br />
              <span className="text-primary-fixed">Binder Briket Arang Ekspor.</span>
            </h1>
            
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl">
              Tinggalkan tapioka standar. Dapatkan briket shisha berspesifikasi internasional dengan <strong className="text-white drop-shadow-md">perekat khusus industri briket arang batok kelapa</strong>. Pangkas waktu oven, tanpa asap tambahan, dan pertahankan kemurnian fixed carbon hingga 95%.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hubungi"
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 font-bold rounded-xl transition-all shadow-2xl flex items-center gap-2 group/btn active:scale-95 duration-200"
              >
                Minta Sampel Gratis <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
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
              Mengapa Pabrik Briket Beralih ke Cocogum BRIQ?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Banyak produsen arang shisha dan BBQ mengalami penolakan (reject) di level kepabeanan ekspor karena briket hancur di peti kemas, kesulitan bernafas di ruangan tertutup (akibat gas formaldehida sisa binder murah), atau lamanya waktu pengeringan yang menghancurkan margin laba pabrik.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Cocogum BRIQ merevolusi ini. Dibuat langsung dari turunan biomassa organik, perekat ini tidak mengubah profil pembakaran alami arang batok kelapa Anda.
            </p>
            
            <div className="bg-surface-container-low border border-primary/20 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">compare_arrows</span> Perbandingan Langsung
                </h4>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-red-400 mt-1">cancel</span>
                        <div>
                            <p className="font-bold text-on-surface text-sm">Tapioka Mentah</p>
                            <p className="text-on-surface-variant text-sm">Rasio campur 5-7%, rakus energi (waktu oven lama), briket sering retak.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                        <div>
                            <p className="font-bold text-primary text-sm">Cocogum BRIQ</p>
                            <p className="text-on-surface-variant text-sm">Rasio campur hanya 1.5-3%, oven jadi 50% lebih cepat, briket kokoh tahan banting.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/imagebricketcocogum.webp"
                alt="Produksi Briket Shisha menggunakan Cocogum BRIQ"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/10 max-w-xs">
              <span className="text-primary font-headline text-4xl font-black">95%</span>
              <p className="text-sm font-medium mt-1 text-on-surface-variant">
                Nilai kemurnian <strong className="text-on-surface">Fixed Carbon</strong> arang batok kelapa Anda tetap terjaga utuh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Ekspor */}
      <section className="py-24 bg-surface-container-low border-t border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Engineered for Shisha & BBQ</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">Spesifikasi Kualitas Timur Tengah & Eropa</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fitur 1 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">air</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">100% Smokeless & Odorless</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Tidak menghasilkan asap kimiawi tambahan atau bau saat terbakar, menjadikannya pilihan mutlak untuk arang <em>shisha</em> (hookah) yang menuntut pembakaran super bersih.
                    </p>
                </div>
                {/* Fitur 2 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">speed</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Oven 50% Lebih Cepat</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Kadar air bahan dasar yang super rendah membuat kalibrasi suhu oven pabrik bisa dipangkas gila-gilaan, menghemat biaya bahan bakar boiler pemanas Anda.
                    </p>
                </div>
                {/* Fitur 3 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">local_shipping</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Kokoh Selama Ekspor</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Ikatan cross-linking polimernya membentuk matriks padat. Arang tidak lagi berdebu berlebihan (<em>low-ash dust</em>) dan briket tidak rentan patah selama diguncang di laut.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">
                Siap Melipatgandakan Kualitas Briket Anda?
            </h2>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                Ribuan ton briket arang batok kelapa Indonesia telah diekspor menggunakan binder Cocogum BRIQ. Konsultasikan mesin <em>mixer</em>, standar abrasi (<em>drop-test</em>) pembeli Anda, dan dapatkan formula pas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/hubungi"
                    className="bg-primary text-white px-8 py-4 font-bold rounded-lg hover:bg-primary-container transition-all shadow-lg flex justify-center items-center gap-2 group"
                >
                    Konsultasi & Minta Sampel <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                    href="/produk"
                    className="bg-surface-container text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-variant transition-all flex justify-center items-center"
                >
                    Lihat Cocogum COAL untuk Batubara
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
