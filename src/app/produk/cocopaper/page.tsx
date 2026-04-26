import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocogum PAPER — Perekat Organik Multifungsi Industri Kertas",
  description:
    "Solusi binder organik inovatif untuk industri kertas. Meningkatkan kekuatan plybonding (wet-end), performa converting (tissue), serta memberikan lapisan water repellent hydrophobic.",
  alternates: {
    canonical: "https://cocogum.com/produk/cocopaper",
  },
  openGraph: {
    title: "Cocogum PAPER — Multifunction Organic Binder for Paper Industry",
    description:
      "Tingkatkan bulkiness dan kekuatan kertas Anda dari proses wet-end hingga finishing. Solusi terpadu untuk efisiensi produksi kertas dan packaging tahan air.",
    url: "https://cocogum.com/produk/cocopaper",
  },
};

export default function ProdukPaper() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagebannerproduk.webp"}
             fill
             className="object-cover opacity-65 grayscale-[20%]"
             alt="Perekat Industri Kertas Cocogum PAPER"
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
                description
              </span>
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-sm">
                Lini Produk Bio-Polymer Kertas
              </span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-xl filter">
              Cocogum PAPER. <br />
              <span className="text-primary-fixed">Perekat Cerdas Industri Kertas.</span>
            </h1>
            
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl">
              Gabungkan kekuatan bonding, peningkatan struktur (<em>bulkiness</em>), dan perlindungan permukaan hydrophobic dalam satu solusi terpadu untuk manufaktur kertas dan packaging.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hubungi"
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 font-bold rounded-xl transition-all shadow-2xl flex items-center gap-2 group/btn active:scale-95 duration-200"
              >
                Minta Sampel PAPER <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Solutions */}
      <section className="py-24 bg-surface text-on-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Wet-End */}
            <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-8 block">water_drop</span>
              <h3 className="text-2xl font-headline font-bold mb-4">Wet-End Plybonding Agent</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Maksimalkan kekuatan sejak awal proses. Cocogum bekerja sebagai perekat antar lapisan kertas saat kondisi basah, memastikan setiap ply terikat kuat sejak tahap pembentukan.
              </p>
              <ul className="space-y-3">
                {["Meningkatkan ply bond strength", "Mengurangi risiko delaminasi", "Efek Bulky tanpa beban tambahan", "Efisiensi proses press"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Converting */}
            <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-8 block">layers</span>
              <h3 className="text-2xl font-headline font-bold mb-4">Converting Binder (Dry Process)</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Kekuatan rekat optimal di tahap finishing. Berfungsi sebagai lem antar lapisan pada produk akhir seperti tissue multi-ply atau laminated paper.
              </p>
              <ul className="space-y-3">
                {["Daya rekat stabil & merata", "Menjaga fleksibilitas kertas", "Mendukung emboss & laminasi", "Cepat kering & nir-residu"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Coating */}
            <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <span className="material-symbols-outlined text-5xl text-primary mb-8 block">invert_colors</span>
              <h3 className="text-2xl font-headline font-bold mb-4">Water Repellent Coating</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Perlindungan maksimal terhadap air. Memberikan lapisan pelindung hydrophobic yang membuat permukaan kertas tahan terhadap penetrasi cairan.
              </p>
              <ul className="space-y-3">
                {["Efek Hydrophobic instan", "Reduksi penyerapan air drastis", "Kuat meski dalam kondisi lembab", "Ideal untuk packaging makanan"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Deep Detail Section */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Sustainable Innovation</span>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface mb-6">Meningkatkan Performa Tanpa Melukai Ekosistem</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Industri kertas modern menghadapi tekanan ganda: tuntutan kekuatan produk yang lebih tinggi dan regulasi penggunaan bahan kimia yang lebih ketat. Cocogum PAPER menjawab keduanya.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Bahan dasar organik kami memastikan residu produksi Anda tetap ramah lingkungan (<em>bio-degradable</em>), sementara teknologi pengikatan polimernya memberikan struktur kertas yang lebih "naik" dan ringan—sempurna untuk produk yang membutuhkan kombinasi volume dan kekuatan.
            </p>
            <div className="flex gap-8 border-t border-outline-variant/10 pt-8">
                <div>
                    <p className="text-4xl font-black text-primary">Bulky</p>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Struktur Lebih Berisi</p>
                </div>
                <div>
                    <p className="text-4xl font-black text-primary">Eco</p>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">100% Bio-Degradable</p>
                </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-[12px] border-surface shadow-2xl relative">
              <Image 
                src="/imagebannerteknologi.webp"
                alt="Proses Plybonding Kertas dengan Cocogum PAPER"
                fill
                className="object-cover transition-transform duration-[3s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute top-1/2 -right-8 w-40 h-40 bg-primary rounded-full blur-[70px] opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">
                Optimasi Lini Produksi Kertas Anda
            </h2>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                Butuh plybond yang lebih kuat atau lapisan penahan air yang lebih tipis? Konsultasikan parameter teknis mesin kertas Anda dengan tim ahli Cocogum hari ini.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/hubungi"
                    className="bg-primary text-white px-8 py-4 font-bold rounded-lg hover:bg-primary-container transition-all shadow-lg flex justify-center items-center gap-2 group"
                >
                    Konsultasi Formulasi PAPER <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                    href="/produk"
                    className="bg-surface-container text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-variant transition-all flex justify-center items-center"
                >
                    Kembali ke Semua Produk
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
