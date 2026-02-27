import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";
import { getAllArticles } from "@/lib/articles";

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
