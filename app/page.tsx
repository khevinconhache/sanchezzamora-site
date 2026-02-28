import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FirmHero } from "@/components/sections/FirmHero";
import { Credentials } from "@/components/sections/Credentials";
import { FirmAbout } from "@/components/sections/FirmAbout";
import { TeamSection } from "@/components/sections/TeamSection";
import { FirmPracticeAreas } from "@/components/sections/FirmPracticeAreas";
import { Publications } from "@/components/sections/Publications";
import { FirmContact } from "@/components/sections/FirmContact";
import { getAllArticles } from "@/lib/articles";
import { FIRM_CREDENTIALS } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Corporación GC",
  description:
    "Bufete de abogados especializado en Derecho Público. Fundado por el Dr. Óscar González Camacho, ex-Magistrado de la Corte Suprema de Justicia.",
  url: "https://corporaciongc.com",
  telephone: "+506 8317-9564",
  email: "info@corporaciongc.com",
  image: "https://corporaciongc.com/images/logo-gc.png",
  priceRange: "Consultar",
  areaServed: {
    "@type": "Country",
    name: "Costa Rica",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "OFIDENT, Barrio Dent",
    addressLocality: "San José",
    addressRegion: "San José",
    addressCountry: "CR",
  },
  founder: {
    "@type": "Person",
    name: "Dr. Óscar González Camacho",
    jobTitle: "Fundador y Director",
  },
  knowsAbout: [
    "Derecho Administrativo",
    "Contencioso Administrativo",
    "Derecho Constitucional",
    "Contratación Pública",
    "Derecho Público",
  ],
  openingHours: "Mo-Fr 09:00-18:00",
  sameAs: [],
};

export default function Home() {
  const articles = getAllArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <FirmHero />
        <Credentials credentials={FIRM_CREDENTIALS} />
        <FirmAbout />
        <TeamSection />
        <FirmPracticeAreas />
        <Publications articles={articles} />
        <FirmContact />
      </main>
      <Footer />
    </>
  );
}
