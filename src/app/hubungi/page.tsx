export default function HubungiKami() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-8 z-10 flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 bg-primary-fixed-dim/20 text-primary-fixed border border-primary-fixed-dim/30 text-xs font-medium tracking-widest uppercase mb-6 rounded-sm">
            Koneksi Industri
          </span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl">
            Inisiasi <span className="text-on-primary-container">Kemitraan Strategis</span>
          </h1>
          <p className="text-lg md:text-xl text-on-primary-container/80 leading-relaxed max-w-2xl">
            Hubungi pakar material organik kami untuk analisis kebutuhan manufaktur Anda, pemesanan kustom berskala besar, maupun kolaborasi pengembangan prototipe.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Col: Contact Info & Map */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold font-headline text-primary mb-8">Hubungi Kami</h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-lg text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Kantor Pusat</h4>
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
                  <h4 className="font-bold text-primary mb-1">Kontak Person</h4>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    <strong className="text-primary font-bold">Novy Larasati</strong><br />
                    <span className="text-sm">Secretary Manager</span><br />
                    <a href="tel:+6285933885" className="hover:text-primary transition-colors">+62 859-33885</a>
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    <strong className="text-primary font-bold">Krisna Jembawan</strong><br />
                    <span className="text-sm">Business Development Manager</span><br />
                    <a href="tel:+6285117261988" className="hover:text-primary transition-colors">+62 851-1726-1988</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-secondary-container p-3 rounded-lg text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email</h4>
                  <p className="text-on-surface-variant hover:text-primary transition-colors">
                    <a href="mailto:pelanginalfaabadi@gmail.com">pelanginalfaabadi@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-xl overflow-hidden h-64 shadow-inner bg-surface-container relative">
              {/* Optional: we can overlay a subtle gradient to make it look premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container/50 to-transparent z-10 pointer-events-none"></div>
              <img alt="Map location" className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3dFRVAyUw6_J4kLyOE0vKdglFvUPetCVJOpv3iKI0mEw6_jQo-30Fl8ieSAlwiwIrlRO2IcjL055KNtmYPQuRS1iq_-YC8HYx8N2fgExCB7oPTU9J97GN9VlFy6g8iyTkNJTQR8Ttw22jwnsz1SdfnnrurfUl9lNFr0y_qtM9zTcks0ml-ULgW-JmghY_H2H0Ppc1yI1hJl60ZhzbQy4M-BKi1zzZsbc3DsUS71oQKIB8g8_GaA1VAgoBFVntt3rqolQidj4JmTI" />
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
            {/* Organic grain effect overlay */}
            <div className="organic-grain absolute inset-0 rounded-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-headline text-primary mb-2">Formulir B2B Spesial</h3>
              <p className="text-on-surface-variant mb-8">Kirimkan persyaratan teknis Anda untuk analisis kelayakan operasional dari tim rekayasa kami.</p>
              
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Nama Lengkap</label>
                    <input className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none" placeholder="Nama Anda" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Bisnis</label>
                    <input className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none" placeholder="nama@perusahaan.com" type="email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Industri</label>
                    <select className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all appearance-none outline-none">
                      <option>Otomotif & Dirgantara</option>
                      <option>Agrikultur & Ekologi</option>
                      <option>Elektronik Konsumen</option>
                      <option>Infrastruktur & Konstruksi</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Minat Utama</label>
                    <select className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all appearance-none outline-none">
                      <option>Konsultasi Skala Penuh</option>
                      <option>Formula Kustom R&amp;D</option>
                      <option>Suplai Massal (Ekspor)</option>
                      <option>Uji Coba Material Ringan</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Ringkasan Lingkup Proyek</label>
                  <textarea className="bg-surface-container-high border-b-2 border-outline/20 focus:border-primary focus:ring-0 px-4 py-3 text-on-surface rounded-t-md transition-all outline-none" placeholder="Jelaskan kebutuhan performa beban, ketahanan suhu, atau batas budget yang dituju..." rows={5}></textarea>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold tracking-tight hover:bg-primary-container transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]" type="button">
                    Kirim Permintaan Strategis
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <p className="text-xs text-on-surface-variant mt-4 text-center">
                    Dengan mengirimkan form ini, Anda menyetujui Kebijakan Privasi perlindungan data industri kami.
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
