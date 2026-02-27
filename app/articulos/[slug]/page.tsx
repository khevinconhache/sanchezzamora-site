import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllArticles, getArticleBySlug, formatDate } from "@/lib/articles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PDFViewer } from "@/components/article/PDFViewer";
import {
  ArrowLeft,
  CalendarBlank,
  Tag,
} from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Lic. Khevin Sánchez Zamora`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            {/* Back */}
            <Link
              href="/articulos"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} weight="regular" />
              Todos los artículos
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 text-xs text-cream/35">
                <CalendarBlank size={13} weight="regular" />
                {formatDate(article.date)}
              </div>
              {article.tags.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Tag size={13} weight="regular" className="text-cream/35" />
                  <div className="flex gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.06] text-cream/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl md:text-4xl font-semibold tracking-tighter leading-[1.1] text-cream mb-4">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-base text-cream/50 leading-relaxed max-w-[60ch] mb-10">
                {article.excerpt}
              </p>
            )}

            <div className="h-px bg-cream/[0.06] mb-10" />

            {/* Content */}
            {article.type === "pdf" && article.pdfFile ? (
              <PDFViewer pdfFile={article.pdfFile} />
            ) : (
              <div className="prose-article">
                <MDXRemote
                  source={article.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            )}

            {/* Bottom nav */}
            <div className="mt-16 pt-8 border-t border-cream/[0.06]">
              <Link
                href="/articulos"
                className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300"
              >
                <ArrowLeft size={14} weight="regular" />
                Volver a artículos
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
