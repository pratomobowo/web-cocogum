"use client";

import React, { useState } from "react";

export default function AuditPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    factoryLocation: "",
    whatsappNumber: "",
    rawMaterial: "",
    productType: [] as string[],
    capacityTon: "",
    tapiocaUsage: "",
    mixerTool: "manual",
    printingSystem: "press",
    dryingMethod: "gas",
    compArang: "",
    compTapioka: "",
    compAir: "",
    compLainnya: "",
    productionConstraints: [] as string[],
    optimizationTargets: [] as string[]
  });

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!formData.companyName.trim()) return "Nama Perusahaan wajib diisi.";
      if (!formData.contactName.trim()) return "Nama Lengkap & Jabatan wajib diisi.";
      if (!formData.factoryLocation.trim()) return "Lokasi Pabrik (Kota) wajib diisi.";
      if (!formData.whatsappNumber.trim()) return "Nomor WhatsApp wajib diisi.";
    } else if (currentStep === 2) {
      if (!formData.rawMaterial) return "Pilih Jenis Bahan Baku Utama.";
      if (formData.productType.length === 0) return "Pilih minimal satu Jenis Produk.";
      if (!formData.capacityTon) return "Kapasitas produksi wajib diisi.";
      if (!formData.tapiocaUsage) return "Pemakaian tapioka wajib diisi.";
    } else if (currentStep === 3) {
      if (!formData.compArang || !formData.compTapioka || !formData.compAir || !formData.compLainnya) return "Semua kolom komposisi wajib diisi (isi 0 jika tidak digunakan).";
    } else if (currentStep === 4) {
      if (formData.productionConstraints.length === 0) return "Pilih minimal satu Kendala Produksi.";
      if (formData.optimizationTargets.length === 0) return "Pilih minimal satu Target Optimasi.";
    }
    return "";
  };

  const nextStep = () => {
    const errorMsg = validateStep(step);
    if (errorMsg) {
      alert(errorMsg);
      return;
    }
    setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let finalValue = value;

    // Auto capitalize every word for regular text inputs
    if (type === "text" && !["whatsappNumber", "capacityTon", "tapiocaUsage", "compArang", "compTapioka", "compAir", "compLainnya"].includes(name)) {
      finalValue = finalValue.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    }

    // Force numbers only for number inputs
    if (type === "number" || ["capacityTon", "tapiocaUsage", "compArang", "compTapioka", "compAir", "compLainnya"].includes(name)) {
      finalValue = finalValue.replace(/[^0-9.]/g, "");
    }
    
    // For whatsapp, allow +, spaces and numbers
    if (name === "whatsappNumber") {
      finalValue = finalValue.replace(/[^0-9+\s-]/g, "");
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleCheckboxArray = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[name as keyof typeof prev] as string[];
      if (checked) {
        return { ...prev, [name]: [...currentArray, value] };
      } else {
        return { ...prev, [name]: currentArray.filter(v => v !== value) };
      }
    });
  };

  const handleSubmit = async () => {
    const errorMsg = validateStep(totalSteps);
    if (errorMsg) {
      alert(errorMsg);
      return;
    }
    
    setIsSubmitting(true);
    
    const payload = {
      ...formData,
      productType: formData.productType.join(", "),
      productionConstraints: formData.productionConstraints.join(", "),
      optimizationTargets: formData.optimizationTargets.join(", ")
    };

    try {
      const WEB_APP_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (!WEB_APP_URL) {
        console.error("No Google Script URL found. Please set NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env.local");
        alert("Google Script URL is missing. Please check .env configuration.");
        setIsSubmitting(false);
        return;
      }

      const formBody = new URLSearchParams(payload as Record<string, string>);

      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script to avoid CORS errors
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString()
      });
      
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan jaringan saat mengirim data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-surface pt-32 pb-24 px-8 overflow-hidden relative flex items-center justify-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-2xl text-center z-10 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-emerald-500/20">
            <span className="material-symbols-outlined text-5xl">check_circle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6 tracking-tight">
            Data Audit <span className="text-emerald-600">Berhasil Dikirim!</span>
          </h1>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
            Terima kasih telah meluangkan waktu untuk mengisi form audit. Tim teknis Cocogum akan segera menganalisa performa serta parameter produksi pabrik Anda, dan menghubungi Anda via WhatsApp untuk mendiskusikan rekomendasi solusi.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/" className="bg-primary/5 text-primary border border-primary/20 font-bold px-8 py-3 rounded-xl hover:bg-primary/10 transition-all">
              Kembali ke Beranda
            </a>
            <button 
              onClick={() => {
                setIsSuccess(false);
                setStep(1);
                setFormData({
                  companyName: "", contactName: "", factoryLocation: "", whatsappNumber: "",
                  rawMaterial: "", productType: [], capacityTon: "", tapiocaUsage: "",
                  mixerTool: "manual", printingSystem: "press", dryingMethod: "gas",
                  compArang: "", compTapioka: "", compAir: "", compLainnya: "",
                  productionConstraints: [], optimizationTargets: []
                });
              }}
              className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:shadow-xl transition-all"
            >
              Kirim Audit Baru
            </button>
          </div>
        </div>
      </main>
    );
  }

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
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6 tracking-tight">
            Optimasi Produksi & <span className="text-primary">Kualitas Briket</span>
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
                    step >= i ? "bg-primary text-white shadow-xl" : "bg-primary/5 text-primary/30 border border-primary/10"
                  }`}
                >
                  {i}
                </div>
                {i < 4 && (
                  <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${step > i ? "bg-primary" : "bg-primary/20"}`}></div>
                )}
                <span className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${step >= i ? "text-primary" : "text-primary/60"}`}>
                  {i === 1 ? "Identitas" : i === 2 ? "Material" : i === 3 ? "Proses" : "Analisa"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="organic-grain absolute inset-0 opacity-5 pointer-events-none rounded-3xl"></div>
          
          <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* STEP 1: IDENTITAS */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">01</span>
                  Informasi Kontak & Perusahaan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Nama Perusahaan</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="PT. Briket Jaya Utama" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium placeholder:text-primary/50 outline-none focus:border-primary transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Nama Lengkap & Jabatan</label>
                    <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Budi Santoso - Manager Produksi" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium placeholder:text-primary/50 outline-none focus:border-primary transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Lokasi Pabrik (Kota)</label>
                    <input type="text" name="factoryLocation" value={formData.factoryLocation} onChange={handleChange} placeholder="Semarang, Jawa Tengah" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium placeholder:text-primary/50 outline-none focus:border-primary transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest">Nomor WhatsApp</label>
                    <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} placeholder="+62 812..." className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium placeholder:text-primary/50 outline-none focus:border-primary transition-all shadow-sm" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: MATERIAL & KAPASITAS */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">02</span>
                  Jenis Bahan & Kapasitas Produksi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Jenis Bahan Baku Utama</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Tempurung Kelapa", "Kayu", "Batubara", "Campuran"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-primary/10 cursor-pointer hover:border-primary/40 transition-all shadow-sm">
                          <input type="radio" name="rawMaterial" value={item} checked={formData.rawMaterial === item} onChange={handleChange} className="accent-primary w-5 h-5" />
                          <span className="text-sm text-primary font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Jenis Produk</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Briket BBQ", "Briket Shisha", "Pakan", "Batubara"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-primary/10 cursor-pointer hover:border-primary/40 transition-all shadow-sm">
                          <input type="checkbox" name="productType" value={item} checked={formData.productType.includes(item)} onChange={(e) => handleCheckboxArray("productType", item, e.target.checked)} className="accent-primary w-5 h-5" />
                          <span className="text-sm text-primary font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Kapasitas (Ton / Bulan)</label>
                    <input type="text" inputMode="numeric" name="capacityTon" value={formData.capacityTon} onChange={handleChange} placeholder="50" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium placeholder:text-primary/50 outline-none focus:border-primary transition-all shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Pemakaian Tapioka per Bulan (kg)</label>
                    <input type="text" inputMode="numeric" name="tapiocaUsage" value={formData.tapiocaUsage} onChange={handleChange} placeholder="5000" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium placeholder:text-primary/50 outline-none focus:border-primary transition-all shadow-sm" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PROSES PRODUKSI */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">03</span>
                  Metode & Komposisi Produksi
                </h2>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-widest">Alat Mixing</label>
                      <select name="mixerTool" value={formData.mixerTool} onChange={handleChange} className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium outline-none appearance-none cursor-pointer focus:border-primary shadow-sm">
                        <option value="manual">Manual</option>
                        <option value="mixer">Mesin Mixer</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-widest">Sistem Cetak</label>
                      <select name="printingSystem" value={formData.printingSystem} onChange={handleChange} className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium outline-none appearance-none cursor-pointer focus:border-primary shadow-sm">
                        <option value="press">Press Manual</option>
                        <option value="hydraulic">Hydraulic</option>
                        <option value="screw">Screw Extruder</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary uppercase tracking-widest">Pengeringan</label>
                      <select name="dryingMethod" value={formData.dryingMethod} onChange={handleChange} className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3.5 text-primary font-medium outline-none appearance-none cursor-pointer focus:border-primary shadow-sm">
                        <option value="gas">Oven Gas</option>
                        <option value="kayu">Oven Kayu</option>
                        <option value="jemur">Jemur Matahari</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Komposisi Adonan (%)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 shadow-inner">
                        <span className="text-[10px] text-primary/60 font-bold block mb-1 uppercase tracking-tighter">Arang</span>
                        <input type="text" name="compArang" value={formData.compArang} onChange={handleChange} placeholder="85" className="w-full bg-transparent text-xl font-semibold text-primary outline-none" />
                      </div>
                      <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 shadow-inner">
                        <span className="text-[10px] text-primary/60 font-bold block mb-1 uppercase tracking-tighter">Tapioka</span>
                        <input type="text" name="compTapioka" value={formData.compTapioka} onChange={handleChange} placeholder="5" className="w-full bg-transparent text-xl font-semibold text-primary outline-none" />
                      </div>
                      <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 shadow-inner">
                        <span className="text-[10px] text-primary/60 font-bold block mb-1 uppercase tracking-tighter">Air</span>
                        <input type="text" name="compAir" value={formData.compAir} onChange={handleChange} placeholder="10" className="w-full bg-transparent text-xl font-semibold text-primary outline-none" />
                      </div>
                      <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 shadow-inner">
                        <span className="text-[10px] text-primary/60 font-bold block mb-1 uppercase tracking-tighter">Lainnya</span>
                        <input type="text" name="compLainnya" value={formData.compLainnya} onChange={handleChange} placeholder="0" className="w-full bg-transparent text-xl font-semibold text-primary outline-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: KENDALA & TARGET */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-sm">04</span>
                  Analisa Kendala & Target Optimasi
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Kendala Produksi Saat Ini</label>
                    <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                      {["Retak saat kering", "Mudah hancur", "Tidak padat", "Lama kering", "Boros binder", "Hasil tidak konsisten"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-primary/10 cursor-pointer hover:border-primary/40 transition-all shadow-sm">
                          <input type="checkbox" name="productionConstraints" value={item} checked={formData.productionConstraints.includes(item)} onChange={(e) => handleCheckboxArray("productionConstraints", item, e.target.checked)} className="accent-primary w-5 h-5" />
                          <span className="text-sm text-primary font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest block">Target Optimasi Anda</label>
                    <div className="grid grid-cols-1 gap-2">
                    {["Mengurangi biaya binder", "Meningkatkan kekuatan produk", "Mempercepat pengeringan", "Menstabilkan kualitas produksi", "Upgrade ke kualitas premium"].map((item) => (
                        <label key={item} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-primary/10 cursor-pointer hover:border-primary/40 transition-all shadow-sm">
                          <input type="checkbox" name="optimizationTargets" value={item} checked={formData.optimizationTargets.includes(item)} onChange={(e) => handleCheckboxArray("optimizationTargets", item, e.target.checked)} className="accent-primary w-5 h-5" />
                          <span className="text-sm text-primary font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-8 mt-8 border-t border-primary/10 flex justify-between items-center">
              <button 
                type="button"
                onClick={prevStep}
                disabled={step === 1 || isSubmitting}
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
                  disabled={isSubmitting}
                  className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2"
                >
                  Lanjutkan
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-emerald-500 text-white font-bold px-10 py-3 rounded-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 active:translate-y-0"
                  }`}
                >
                  {isSubmitting ? "Mengirim Data..." : "Kirim Data Audit"}
                  <span className="material-symbols-outlined text-sm">{isSubmitting ? "hourglass_empty" : "check_circle"}</span>
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
