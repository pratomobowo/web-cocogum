"use client";

import React, { useState } from "react";

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <main className="min-h-screen bg-surface pt-32 pb-24 px-8 overflow-hidden relative text-on-surface">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 rounded">
            Self-Audit B2B
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-black text-primary mb-6 tracking-tight">
            Optimasi Produksi & <span className="text-surface-tint">Kualitas Briket</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
            Audit mandiri ini dirancang untuk membantu Anda mengidentifikasi efisiensi biaya bahan baku, durasi mixing, hingga solusi konkret kendala produksi.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center flex-1 relative">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 z-10 ${
                    step >= i ? "bg-surface-tint text-primary shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-white/10 text-white/40 border border-white/5"
                  }`}
                >
                  {i}
                </div>
                {i < 4 && (
                  <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${step > i ? "bg-surface-tint" : "bg-white/10"}`}></div>
                )}
                <span className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${step >= i ? "text-primary" : "text-on-surface/30"}`}>
                  {i === 1 ? "Identitas" : i === 2 ? "Material" : i === 3 ? "Proses" : "Analisa"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="organic-grain absolute inset-0 opacity-5 pointer-events-none rounded-3xl"></div>
          
          <form className="relative z-10 space-y-8">
            {/* STEP 1: IDENTITAS */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
                  Informasi Kontak & Perusahaan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nama Perusahaan</label>
                    <input type="text" placeholder="PT. Briket Jaya Utama" className="w-full bg-surface-container-high border border-outline-variant/50 rounded-xl px-4 py-3.5 text-on-surface placeholder:text-on-surface/20 outline-none focus:border-primary/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Nama Lengkap & Jabatan</label>
                    <input type="text" placeholder="Budi Santoso - Manager Produksi" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-surface-tint/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Lokasi Pabrik (Kota)</label>
                    <input type="text" placeholder="Semarang, Jawa Tengah" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-surface-tint/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Nomor WhatsApp</label>
                    <input type="text" placeholder="+62 812..." className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 outline-none focus:border-surface-tint/50 transition-all" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: MATERIAL & KAPASITAS */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-surface-tint/20 text-surface-tint flex items-center justify-center text-sm">02</span>
                  Jenis Bahan & Kapasitas Produksi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Jenis Bahan Baku Utama</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Tempurung Kelapa", "Kayu", "Batubara", "Campuran"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-all">
                          <input type="radio" name="raw_material" value={item} className="accent-primary" />
                          <span className="text-sm text-on-surface-variant">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Jenis Produk</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Briket BBQ", "Briket Shisha", "Pakan", "Batubara"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-all">
                          <input type="checkbox" name="product_type" value={item} className="accent-surface-tint" />
                          <span className="text-sm text-white/80">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Kapasitas (Ton / Bulan)</label>
                    <input type="number" placeholder="50" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-surface-tint/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Pemakaian Tapioka per Bulan (kg)</label>
                    <input type="number" placeholder="5000" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-surface-tint/50 transition-all" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PROSES PRODUKSI */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-surface-tint/20 text-surface-tint flex items-center justify-center text-sm">03</span>
                  Metode & Komposisi Produksi
                </h2>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Alat Mixing</label>
                      <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none appearance-none cursor-pointer">
                        <option value="manual">Manual</option>
                        <option value="mixer">Mesin Mixer</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Sistem Cetak</label>
                      <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none appearance-none cursor-pointer">
                        <option value="press">Press Manual</option>
                        <option value="hydraulic">Hydraulic</option>
                        <option value="screw">Screw Extruder</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Pengeringan</label>
                      <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none appearance-none cursor-pointer">
                        <option value="gas">Oven Gas</option>
                        <option value="kayu">Oven Kayu</option>
                        <option value="jemur">Jemur Matahari</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Komposisi Adonan (%)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] text-white/40 block mb-1">Arang</span>
                        <input type="text" placeholder="85" className="w-full bg-transparent text-xl font-bold text-white outline-none" />
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] text-white/40 block mb-1">Tapioka</span>
                        <input type="text" placeholder="5" className="w-full bg-transparent text-xl font-bold text-white outline-none" />
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] text-white/40 block mb-1">Air</span>
                        <input type="text" placeholder="10" className="w-full bg-transparent text-xl font-bold text-white outline-none" />
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] text-white/40 block mb-1">Lainnya</span>
                        <input type="text" placeholder="0" className="w-full bg-transparent text-xl font-bold text-white outline-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: KENDALA & TARGET */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-surface-tint/20 text-surface-tint flex items-center justify-center text-sm">04</span>
                  Analisa Kendala & Target Optimasi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Kendala Produksi Saat Ini</label>
                    <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                      {["Retak saat kering", "Mudah hancur", "Tidak padat", "Lama kering", "Boros binder", "Hasil tidak konsisten"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 cursor-pointer hover:bg-white/10 transition-all">
                          <input type="checkbox" className="accent-surface-tint" />
                          <span className="text-sm text-white/70">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest block">Target Optimasi Anda</label>
                    <div className="grid grid-cols-1 gap-2">
                    {["Mengurangi biaya binder", "Meningkatkan kekuatan produk", "Mempercepat pengeringan", "Menstabilkan kualitas produksi", "Upgrade ke kualitas premium"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 cursor-pointer hover:bg-white/10 transition-all">
                          <input type="checkbox" className="accent-surface-tint" />
                          <span className="text-sm text-white/70">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-8 mt-8 border-t border-white/10 flex justify-between items-center">
              <button 
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${
                  step === 1 ? "opacity-0 pointer-events-none" : "bg-primary/5 text-primary hover:bg-primary/10"
                }`}
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Kembali
              </button>
              
              {step < totalSteps ? (
                <button 
                  type="button"
                  onClick={nextStep}
                  className="bg-surface-tint text-primary font-bold px-8 py-3 rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  Lanjutkan
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              ) : (
                <button 
                  type="button"
                  className="bg-emerald-500 text-white font-bold px-10 py-3 rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  Kirim Data Audit
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center">
          <p className="text-on-surface-variant text-sm">
            Butuh bantuan teknis saat pengisian? Hubungi tim ahli kami via 
            <a href="https://wa.me/6285117261988" className="text-primary ml-1 font-bold hover:underline">WhatsApp Support</a>
          </p>
        </div>
      </div>
    </main>
  );
}
