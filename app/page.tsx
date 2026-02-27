import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";
import { getAllArticles } from "@/lib/articles";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Lic. Khevin Sánchez Zamora",
  jobTitle: "Abogado Asociado",
  url: "https://sanchezzamora.cr",
  telephone: "+506 8451-4002",
  email: "ksanchez@corporaciongc.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cartago",
    addressCountry: "CR",
  },
  worksFor: {
    "@type": "LegalService",
    name: "Corporación GC",
  },
  knowsAbout: [
    "Derecho Administrativo",
    "Contencioso Administrativo",
    "Derecho Constitucional",
    "Contratación Pública",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Costa Rica",
  },
  sameAs: [
    "https://www.linkedin.com/in/khevin-s%C3%A1nchez-16b047205/",
    "https://www.instagram.com/lic.sanchezzamora",
  ],
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
        <Hero />
        <Credentials />
        <About />
        <Experience />
        <Publications articles={articles} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
