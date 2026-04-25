import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cocogum | Supplier Perekat Organik Briket, Pakan & Tambang Indonesia",
    template: "%s | Cocogum",
  },
  icons: {
    icon: "/logo-cocogum.webp",
    shortcut: "/logo-cocogum.webp",
    apple: "/logo-cocogum.webp",
  },
  description:
    "Cocogum adalah produsen perekat organik (organic binder) kelas ekspor untuk pabrik briket arang batok kelapa, pakan ikan & udang, serta penanganan coal fines tambang. Berbasis di Bandung, Jawa Barat.",
  keywords: [
    "perekat briket arang",
    "binder briket ekspor",
    "perekat organik industri",
    "perekat pelet pakan ikan",
    "binder pakan udang",
    "coal fines binder",
    "organic binder shisha charcoal",
    "perekat tanpa formaldehida",
    "supplier binder Bandung",
    "binder biomassa ekspor",
  ],
  authors: [{ name: "Cocogum" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cocogum.com",
    siteName: "Cocogum Industrial",
    title: "Cocogum | Perekat Organik untuk Briket, Pakan Ternak & Tambang",
    description:
      "Supplier perekat organik kelas ekspor untuk pabrik briket arang, pakan ikan/udang, dan coal fines tambang. 100% bebas formaldehida. Pabrik di Bandung, Jawa Barat.",
    images: [
      {
        url: "/logo-cocogum.webp",
        width: 800,
        height: 600,
        alt: "Logo Cocogum - Supplier Perekat Organik Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocogum | Perekat Organik Briket & Pakan Ekspor",
    description: "Binder organik kelas ekspor untuk briket arang, pakan ikan, dan tambang. Pabrik di Bandung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://cocogum.com/#organization",
        "name": "Cocogum",
        "url": "https://cocogum.com",
        "logo": "https://cocogum.com/logo-cocogum.webp",
        "description": "Produsen perekat organik (organic binder) untuk industri briket arang batok kelapa, pakan ternak & akuakultur, serta penanganan coal fines tambang batubara.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Jaksanaranata No. 27, Baleendah",
          "addressLocality": "Kabupaten Bandung",
          "addressRegion": "Jawa Barat",
          "postalCode": "40375",
          "addressCountry": "ID"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+6285933885",
            "contactType": "customer service",
            "name": "Novy Larasati — Secretary Manager"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+6285117261988",
            "contactType": "sales",
            "name": "Krisna Jembawan — Business Development Manager"
          }
        ],
        "email": "pelanginalfaabadi@gmail.com"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://cocogum.com/#localbusiness",
        "name": "Cocogum",
        "image": "https://cocogum.com/logo-cocogum.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Jaksanaranata No. 27, Baleendah",
          "addressLocality": "Kabupaten Bandung",
          "addressRegion": "Jawa Barat",
          "postalCode": "40375",
          "addressCountry": "ID"
        },
        "telephone": "+6285117261988",
        "email": "pelanginalfaabadi@gmail.com",
        "url": "https://cocogum.com"
      }
    ]
  };

  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased font-body tracking-normal bg-surface text-on-surface`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
