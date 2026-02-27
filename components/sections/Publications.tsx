"use client";

import Link from "next/link";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, FilePdf, Article } from "@phosphor-icons/react";

type ArticlePreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  type: "article" | "pdf";
  tags: string[];
};

export function Publications({ articles }: { articles: ArticlePreview[] }) {
  const hasArticles = articles.length > 0;

  return (
    <section className="relative bg-surface-alt py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Publicaciones
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Artículos y{" "}
                <span className="text-burgundy">análisis jurídico</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-4 text-sm text-cream/55 leading-relaxed max-w-[50ch]">
                Contenido especializado en Derecho Administrativo, Contencioso
                Administrativo y temas de actualidad jurídica.
              </p>
            </AnimatedEntry>
          </div>

          {hasArticles && (
            <AnimatedEntry delay={0.3}>
              <MagneticButton href="/articulos" variant="outline">
                Ver todos
                <ArrowRight size={14} weight="bold" />
              </MagneticButton>
            </AnimatedEntry>
          )}
        </div>

        {hasArticles ? (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-4"
            stagger={0.08}
          >
            {articles.slice(0, 3).map((article, i) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/articulos/${article.slug}`}
                  className={`group block p-6 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 transition-all duration-400 ${
                    i === 0 ? "md:row-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`p-1.5 rounded-md ${
                        article.type === "pdf"
                          ? "bg-burgundy/[0.08] text-burgundy"
                          : "bg-gold/[0.15] text-gold"
                      }`}
                    >
                      {article.type === "pdf" ? (
                        <FilePdf size={14} weight="duotone" />
                      ) : (
                        <Article size={14} weight="duotone" />
                      )}
                    </div>
                    <span className="text-[10px] tracking-wider uppercase text-cream/45">
                      {article.type === "pdf" ? "PDF" : "Artículo"}
                    </span>
                    <span className="text-[10px] text-cream/30 ml-auto">
                      {new Date(article.date).toLocaleDateString("es-CR", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-semibold tracking-tight text-cream group-hover:text-burgundy transition-colors duration-300 ${
                      i === 0 ? "text-xl md:text-2xl" : "text-base"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs text-cream/55 leading-relaxed max-w-[55ch]">
                    {article.excerpt}
                  </p>

                  {article.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.08] text-cream/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <AnimatedEntry delay={0.3}>
            <div className="text-center py-16 px-6 rounded-2xl border border-dashed border-cream/[0.10] bg-cream/[0.03]">
              <Article
                size={40}
                weight="duotone"
                className="mx-auto text-cream/20 mb-4"
              />
              <p className="text-sm text-cream/45 mb-1">
                Próximamente
              </p>
              <p className="text-xs text-cream/35">
                Los artículos y publicaciones aparecerán aquí.
              </p>
            </div>
          </AnimatedEntry>
        )}
      </div>
    </section>
  );
}
