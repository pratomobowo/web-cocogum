import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocogum MOSQ — Perekat Obat Nyamuk Bakar (Mosquito Coil Binder)",
  description:
    "Perekat industri organik (mosquito coil binder) untuk cetakan obat nyamuk bakar. 100% tanpa bau saat dibakar, menjamin nyala api stabil (smoldering) sepanjang malam.",
  alternates: {
    canonical: "https://cocogum.com/produk/mosq",
  },
  openGraph: {
    title: "Cocogum MOSQ — Binder Pencetak Obat Nyamuk Bakar",
    description:
      "Tingkatkan durabilitas struktur melingkar obat nyamuk bakar pabrik Anda. Tidak patah saat dipisahkan, nyala stabil tanpa macet, bebas residu bau bacin.",
    url: "https://cocogum.com/produk/mosq",
  },
};

export default function ProdukMosq() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imagenbanner4.webp"}
             fill
             className="object-cover opacity-40 grayscale-[20%]"
             alt="Perekat Obat Nyamuk Bakar Cocogum MOSQ"
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
                bug_report
              </span>
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-sm">
                Lini Produk Binder Pest Control 
              </span>
            </div>
            
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-xl filter">
              Cocogum MOSQ. <br />
              <span className="text-primary-fixed">Binder Cerdas Obat Nyamuk.</span>
            </h1>
            
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-2xl">
              Cetak lingkar obat nyamuk spiral dengan durabilitas ekstra kokoh. Tidak mudah patah saat direnggangkan jari, tak berasap tambahan, dan yang terpenting: <strong className="text-white drop-shadow-md">pembakaran api merambat secara stabil tanpa padam di tengah jalan (smoldering)</strong>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hubungi"
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 font-bold rounded-xl transition-all shadow-2xl flex items-center gap-2 group/btn active:scale-95 duration-200"
              >
                Minta Sampel MOSQ <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
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
              Malam Bebas Gigitan Butuh Nyala Yang Estafet
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Problema klasik manufaktur <em>mosquito coil</em> (obat nyamuk bakar) adalah struktur lilitan tipis yang patah di dalam kardus, susah dipisah antar kepingnya, atau parahnya: api mati mendadak saat dini hari karena serat binder konvensional tidak homogen.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Cocogum MOSQ diformulasikan untuk mengikis *pain-points* ini. Perekat nabatinya memiliki viskositas penyebaran ultra mikro yang merata di cetakan sekecil apapun, menjamin kepadatan berpori halus yang estafet membakar serbuk instisida tanpa hambatan.
            </p>
            
            <div className="bg-surface-container-low border border-primary/20 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">compare_arrows</span> Perbandingan Langsung
                </h4>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-red-400 mt-1">cancel</span>
                        <div>
                            <p className="font-bold text-on-surface text-sm">Pati Sintetis Curah</p>
                            <p className="text-on-surface-variant text-sm">Menambahkan bau amis asetat, sisa bakaran menumpuk di alas, resiko lilitan hancur waktu konsumen memisahkan keping ganda.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <span className="material-symbols-outlined text-emerald-500 mt-1">check_circle</span>
                        <div>
                            <p className="font-bold text-primary text-sm">Cocogum MOSQ</p>
                            <p className="text-on-surface-variant text-sm">100% Ordoless (tak berbau tambahan), nyala estafet, kohesi super rekat biarpun ditarik ulur konsumen.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM50B0UD4q4tnXufehxkMZVSvG4wuTz1GAQrmWxWKEwS_GhFL4B6iVeRDi1_LZ_yLAc1-HhjC6lJg0tH3rvnN_y2PX7YUbhRh9mHCJxJ5miEw5tIQ5KwdHA3yuga-LAeeuZWPOIBVH12Z-NTRPQKmUrSqP37OHoFgmsHHRoxyim8cw0T5zXSwJq15bvyzqWZRilPVyPshtMU_4soYAMF5susnN8AAoALbMragrf_fYobWWBDa-wiIuJSO9cvI2kNCCIWclz0LqTKw"
                alt="Prosedur pencetakan obat nyamuk bakar dengan Cocogum MOSQ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/10 max-w-xs">
              <span className="text-primary font-headline text-4xl font-black">100%</span>
              <p className="text-sm font-medium mt-1 text-on-surface-variant">
                Jaminan perlengkapan molekul penyalaan <strong className="text-on-surface">Smoldering</strong> berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Manufacture */}
      <section className="py-24 bg-surface-container-low border-t border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block">Pest-Control Specific Formulation</span>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">Ketangguhan Fabrikasi Skala Massal</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fitur 1 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">flex_wrap</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Ikatan Lilitan Gemetrik Ekstra</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Kelembutan *cellulose* biopolimer Cocogum memungkinkan obat nyamuk spiral dipisahkan dengan sangat gampang tanpa mematahkan pusaran sentralnya.
                    </p>
                </div>
                {/* Fitur 2 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">air</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Nir-Residu Bau Asap</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Konsumen benci bau sangit murahan. Binder ini tidak memberikan sentuhan polusi penciuman, membiarkan pewangi dan aroma murni inspektisida mendominasi pembakaran.
                    </p>
                </div>
                {/* Fitur 3 */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">local_fire_department</span>
                    <h3 className="font-bold font-headline text-xl text-on-surface mb-3">Terkalibrasi Sempurna</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        Menfasilitasi rasio campuran obat serbuk anti-hama pabrikan dengan laju penjalaran api konstan. Api melingkar sampai titik tengah terakhir obat nyamuk tanpa mati.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-headline font-bold text-4xl text-on-surface mb-6">
                Uji Ketangguhan Perekat Obat Nyamuk Anda
            </h2>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                Ribuan konsumen mengeluh lilitan obat nyamuk patah sebelum bisa dibakar? Saatnya evaluasi ulang formula binder Anda bersama insinyur manufaktur bio-resin Cocogum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/hubungi"
                    className="bg-primary text-white px-8 py-4 font-bold rounded-lg hover:bg-primary-container transition-all shadow-lg flex justify-center items-center gap-2 group"
                >
                    Konsultasi Formulasi Obat Nyamuk <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                    href="/produk/briq"
                    className="bg-surface-container text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-variant transition-all flex justify-center items-center"
                >
                    Lihat Cocogum BRIQ
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}
