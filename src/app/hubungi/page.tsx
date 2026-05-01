"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Head from "next/head";

const metadata = {
  title: "Hubungi Cocogum — Konsultasi Perekat Organik Briket, Pakan & Tambang | Bandung",
  description:
    "Hubungi tim Cocogum untuk konsultasi kebutuhan perekat organik (binder) briket arang ekspor, pakan ikan & udang, atau coal fines tambang batubara. Kantor di Baleendah, Kabupaten Bandung, Jawa Barat.",
  alternates: {
    canonical: "https://cocogum.id/hubungi",
  },
  openGraph: {
    title: "Hubungi Cocogum — Konsultasi Perekat Organik Gratis",
    description:
      "Butuh binder organik untuk briket, pakan ternak, atau tambang? Hubungi Cocogum di Bandung — konsultasi, sampel gratis. Telepon & WhatsApp tersedia.",
    url: "https://cocogum.id/hubungi",
  },
};

export default function HubungiKami() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    industri: "Pabrik Briket Arang Batok Kelapa",
    produk: "Cocogum BRIQ — Perekat Briket Arang",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `Halo Admin Cocogum,%0A%0ASaya ${formData.nama || "(belum diisi)"} ingin meminta penawaran perekat organik.%0A%0ADetail:%0A• Nama: ${formData.nama || "-"}%0A• Email: ${formData.email || "-"}%0A• Industri: ${formData.industri}%0A• Produk yang Dibutuhkan: ${formData.produk}%0A• Kebutuhan & Spesifikasi: ${formData.pesan || "-"}%0A%0AMohon informasi lebih lanjut. Terima kasih.`;

    const whatsappUrl = `https://wa.me/6285117261988?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Hero Section (Beranda Aesthetic) */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black group overflow-hidden">
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
           <Image
             src={"/imageb2b.webp"}
             fill
             className="object-cover opacity-65"
             alt="Konsultasi B2B Cocogum"
             priority={true}
             sizes="100vw"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="w-fit mb-6 overflow-hidden">
              <span className="inline-flex px-3 py-1 bg-surface-lowest/10 text-emerald-100 border border-emerald-100/20 text-xs font-bold tracking-[0.2em] uppercase rounded backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                Supplier Perekat Organik — Bandung, Jawa Barat
              </span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.15] mb-8 drop-shadow-xl filter">
              Konsultasi B2B. <br className="hidden md:block" />{" "}
              Solusi Produksi Anda.
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl">
              Tim teknis Cocogum siap membantu Anda menemukan solusi perekat organik yang tepat — untuk pabrik briket arang ekspor, produksi pakan ikan &amp; udang, maupun penanganan coal fines tambang batubara.
            </p>
          </div>
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
                  <h3 className="font-bold text-primary mb-1">Tim Manajemen & Sales</h3>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Neneng Fatimah</strong><br />
                    <span className="text-sm">Chief Executive Officer</span>
                  </p>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Novy Larasati</strong><br />
                    <span className="text-sm">Sales Secretary Manager — Cocogum Bandung</span><br />
                    <a href="tel:+6289694479028" className="hover:text-primary transition-colors">
                      +62 896 9447 9028
                    </a>
                  </p>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Krisna Jembawan</strong><br />
                    <span className="text-sm">National Sales Manager — Cocogum Perekat Organik & Ekspor</span><br />
                    <a href="tel:+6285117261988" className="hover:text-primary transition-colors">
                      +62 851-1726-1988
                    </a>
                  </p>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Helmi F</strong><br />
                    <span className="text-sm">Regional Sales Manager</span><br />
                    <a href="tel:+62811213525" className="hover:text-primary transition-colors">
                      +62 811-213525
                    </a>
                  </p>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Rheza</strong><br />
                    <span className="text-sm">Regional Sales Manager</span><br />
                    <a href="tel:+6281220134334" className="hover:text-primary transition-colors">
                      +62 812-20134334
                    </a>
                  </p>
                  
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Ronal S</strong><br />
                    <span className="text-sm">Business Development Manager</span>
                  </p>
                  
                  <p className="text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-bold">Sandy</strong><br />
                    <span className="text-sm">R&D Manager</span>
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Nama Lengkap</label>
                    <input
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none"
                      placeholder="Nama Anda"
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Bisnis</label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.industri}
                      onChange={handleChange}
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
                      value={formData.produk}
                      onChange={handleChange}
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
                  <label htmlFor="pesan" className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Kebutuhan &amp; Spesifikasi Mesin</label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none"
                    placeholder="Jelaskan kebutuhan perekat Anda: jenis mesin, target kapasitas produksi per hari, spesifikasi produk akhir (kadar air, kekuatan briket/pelet), dan estimasi volume kebutuhan binder per bulan..."
                    rows={5}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold tracking-tight hover:bg-primary-container transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
                    type="submit"
                  >
                    Kirim ke WhatsApp Admin
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <p className="text-xs text-on-surface-variant mt-4 text-center">
                    Data akan otomatis menjadi pesan WhatsApp. Anda tinggal mengirimkannya ke admin Cocogum.
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
