import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Cocogum — Konsultasi Perekat Organik Briket, Pakan & Tambang | Bandung",
  description:
    "Hubungi tim Cocogum untuk konsultasi kebutuhan perekat organik (binder) briket arang ekspor, pakan ikan & udang, atau coal fines tambang batubara. Kantor di Baleendah, Kabupaten Bandung, Jawa Barat.",
  alternates: {
    canonical: "https://cocogum.com/hubungi",
  },
  openGraph: {
    title: "Hubungi Cocogum — Konsultasi Perekat Organik Gratis",
    description:
      "Butuh binder organik untuk briket, pakan ternak, atau tambang? Hubungi Cocogum di Bandung — konsultasi, sampel gratis. Telepon & WhatsApp tersedia.",
    url: "https://cocogum.com/hubungi",
  },
};

export default function HubungiKami() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-8 z-10 flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 bg-primary-fixed-dim/20 text-primary-fixed border border-primary-fixed-dim/30 text-xs font-medium tracking-widest uppercase mb-6 rounded-sm">
            Supplier Perekat Organik — Bandung, Jawa Barat
          </span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl">
            Konsultasi <span className="text-on-primary-container">Kebutuhan Perekat Organik</span> Anda
          </h1>
          <p className="text-lg md:text-xl text-on-primary-container/80 leading-relaxed max-w-2xl">
            Tim teknis Cocogum siap membantu Anda menemukan solusi perekat organik yang tepat — untuk
            pabrik briket arang ekspor, produksi pakan ikan &amp; udang, maupun penanganan coal fines
            tambang batubara. Konsultasi dan sampel gratis.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section aria-labelledby="kontak-heading" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Col: Contact Info */}
          <div className="lg:col-span-5">
            <h2 id="kontak-heading" className="text-4xl font-bold font-headline text-primary mb-8">
              Kontak Cocogum — Perekat Organik Bandung
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-lg text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Alamat Kantor & Pabrik</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Jl. Jaksanaranata No. 27, Baleendah,<br />
                    Kab. Bandung, Jawa Barat 40375.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-lg text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Tim Sales & Business Development</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Novy Larasati</strong><br />
                    <span className="text-sm">Secretary Manager — Cocogum Bandung</span><br />
                    <a href="tel:+6285933885" className="hover:text-primary transition-colors">
                      +62 859-33885
                    </a>
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-bold">Krisna Jembawan</strong><br />
                    <span className="text-sm">Business Development Manager — Perekat Organik & Ekspor</span><br />
                    <a href="tel:+6285117261988" className="hover:text-primary transition-colors">
                      +62 851-1726-1988
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-lg text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email Pemesanan & Konsultasi</h3>
                  <p className="text-on-surface-variant hover:text-primary transition-colors">
                    <a href="mailto:pelanginalfaabadi@gmail.com">pelanginalfaabadi@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl overflow-hidden h-64 shadow-inner bg-surface-container relative border border-outline/20">
              <iframe
                title="Google Maps Lokasi Cocogum — Jl. Jaksanaranata No. 27, Baleendah"
                src="https://www.google.com/maps?q=Jl.%20Jaksanaranata%20No.%2027,%20Baleendah,%20Kab.%20Bandung&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            <div className="organic-grain absolute inset-0 rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-headline text-primary mb-2">
                Formulir Permintaan Penawaran Perekat Organik
              </h3>
              <p className="text-on-surface-variant mb-8">
                Isi form berikut agar tim Cocogum dapat menyiapkan penawaran binder organik yang sesuai
                dengan spesifikasi mesin dan kebutuhan produksi pabrik Anda.
              </p>

              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Nama Lengkap</label>
                    <input
                      id="nama"
                      name="nama"
                      className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none"
                      placeholder="Nama Anda"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Bisnis</label>
                    <input
                      id="email"
                      name="email"
                      className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none"
                      placeholder="nama@perusahaan.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="industri" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Industri / Sektor</label>
                    <select
                      id="industri"
                      name="industri"
                      className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all appearance-none outline-none"
                    >
                      <option>Pabrik Briket Arang Batok Kelapa</option>
                      <option>Produsen Pakan Ikan &amp; Udang</option>
                      <option>Feedmill Unggas</option>
                      <option>Perusahaan Tambang Batubara</option>
                      <option>PLTU &amp; Industri Boiler</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="produk" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Produk yang Dibutuhkan</label>
                    <select
                      id="produk"
                      name="produk"
                      className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all appearance-none outline-none"
                    >
                      <option>Cocogum BRIQ — Perekat Briket Arang</option>
                      <option>Cocogum COAL — Binder Coal Fines</option>
                      <option>Cocogum FEED — Perekat Pelet Pakan</option>
                      <option>Sampel Uji Coba</option>
                      <option>Konsultasi Formula Kustom</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="pesan" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Kebutuhan & Spesifikasi Mesin</label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none"
                    placeholder="Jelaskan kebutuhan perekat Anda: jenis mesin, target kapasitas produksi per hari, spesifikasi produk akhir (kadar air, kekuatan briket/pelet), dan estimasi volume kebutuhan binder per bulan..."
                    rows={5}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold tracking-tight hover:bg-primary-container transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                    type="button"
                  >
                    Kirim Permintaan Penawaran Perekat Organik
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <p className="text-xs text-on-surface-variant mt-4 text-center">
                    Dengan mengirimkan form ini, Anda menyetujui Kebijakan Privasi Cocogum. Kami akan
                    menghubungi Anda dalam 1×24 jam kerja.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
