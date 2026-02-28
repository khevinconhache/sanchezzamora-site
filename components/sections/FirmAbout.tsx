"use client";

import { BookOpen, GraduationCap, Briefcase } from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { OSCAR_PROFILE } from "@/lib/constants";

export function FirmAbout() {
  return (
    <section id="la-firma" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top — Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 mb-20">
          {/* Left — About the firm */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  La Firma
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Excelencia jurídica
                <br />
                con{" "}
                <span className="text-gold">tradición</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Corporación GC es un bufete de abogados fundado por el Dr. Óscar
                González Camacho, uno de los juristas administrativistas más
                reconocidos de Costa Rica. Con raíces en más de tres décadas de
                servicio en la judicatura — desde los juzgados de primera instancia
                hasta la Sala Primera de la Corte Suprema de Justicia — el bufete
                nace del compromiso con un litigio de la más alta calidad técnica.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Desde 2015, el Dr. González Camacho se ha consolidado como uno de
                los litigantes de mayor calado en la jurisdicción
                contencioso-administrativa costarricense, aplicando al ejercicio
                privado el conocimiento profundo adquirido durante 28 años en la
                carrera judicial. Nuestro equipo trabaja bajo la dirección de quien
                contribuyó directamente a forjar el marco procesal de esta
                jurisdicción.
              </p>
            </AnimatedEntry>

            {/* Education card */}
            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-gold/15 transition-colors duration-400">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Formación académica
                </div>
                <div className="space-y-2">
                  {OSCAR_PROFILE.education.map((edu, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <div className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${i === 0 ? "bg-gold" : "bg-burgundy-light"}`} />
                      <div>
                        <span className="text-sm text-cream/75">
                          {edu.degree}
                        </span>
                        <br />
                        <span className="text-[11px] text-cream/50">
                          {edu.institution}
                        </span>
                        <span className="ml-1.5 text-[9px] text-cream/35">
                          {edu.period}
                        </span>
                        {"distinction" in edu && edu.distinction && (
                          <span className="ml-1.5 text-[9px] tracking-wider uppercase text-gold/70 font-medium">
                            {edu.distinction}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-[10px] text-cream/40">
                  Idiomas: {OSCAR_PROFILE.languages.join(", ")}
                </div>
              </div>
            </AnimatedEntry>
          </div>

          {/* Right — Career timeline */}
          <div className="lg:pt-16">
            <AnimatedEntry delay={0.15}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-burgundy/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Trayectoria del Director
                </span>
              </div>
            </AnimatedEntry>

            <StaggerContainer className="relative" stagger={0.1}>
              {/* Timeline line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-cream/[0.10]" />

              <div className="space-y-1">
                {OSCAR_PROFILE.career.map((item, i) => (
                  <StaggerItem key={i}>
                    <div
                      className={`relative pl-10 py-5 rounded-xl transition-colors duration-300 ${
                        item.highlight
                          ? "bg-gold/[0.06] border border-gold/[0.15]"
                          : ""
                      }`}
                    >
                      {/* Dot */}
                      <div
                        className={`absolute left-[7px] top-7 w-[9px] h-[9px] rounded-full border-2 ${
                          item.highlight
                            ? "border-gold bg-gold"
                            : "border-cream/25 bg-surface-alt"
                        }`}
                      />

                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                        <h3 className="text-sm font-semibold text-cream/90 tracking-tight">
                          {item.role}
                        </h3>
                        <span className="text-[10px] tracking-wider text-cream/35 uppercase shrink-0">
                          {item.period}
                        </span>
                      </div>

                      <div className="text-xs text-gold font-medium mb-2">
                        {item.org}
                      </div>

                      <p className="text-xs text-cream/50 leading-relaxed max-w-[60ch]">
                        {item.description}
                      </p>

                      {item.highlight && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gold/[0.1] text-gold text-[10px] tracking-wide font-medium">
                          Posición actual
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>

        {/* Bottom — Publications + Teaching/Conferences (asymmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6">
          {/* Publications — wider left column */}
          <AnimatedEntry delay={0.1}>
            <div className="p-6 md:p-8 rounded-xl border border-cream/[0.08] bg-cream/[0.03] h-full">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-burgundy/[0.15] text-burgundy-light">
                  <BookOpen size={18} weight="duotone" />
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/45 font-medium">
                  Publicaciones y obra
                </div>
              </div>
              <div className="space-y-5">
                {OSCAR_PROFILE.publications.map((pub, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] tracking-wider uppercase font-medium ${
                        pub.type === "law"
                          ? "bg-gold/15 text-gold"
                          : "bg-cream/[0.08] text-cream/50"
                      }`}>
                        {pub.type === "law" ? "Ley" : "Libro"}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-cream/80 leading-snug">
                      {pub.title}
                    </h4>
                    <p className="mt-1 text-xs text-cream/45 leading-relaxed">
                      {pub.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedEntry>

          {/* Right column — Teaching + Conferences stacked */}
          <div className="space-y-6">
            {/* Teaching */}
            <AnimatedEntry delay={0.2}>
              <div className="p-6 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-2 rounded-lg bg-burgundy/[0.15] text-burgundy-light">
                    <GraduationCap size={18} weight="duotone" />
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-cream/45 font-medium">
                    Docencia universitaria
                  </div>
                </div>
                <div className="space-y-3">
                  {OSCAR_PROFILE.teaching.map((item, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold/60 mt-1.5 shrink-0" />
                      <span className="text-xs text-cream/60 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-cream/[0.06]">
                  <p className="text-[10px] text-cream/40 leading-relaxed">
                    Director y lector de múltiples tesis doctorales, de maestría
                    y de licenciatura en Derecho Público.
                  </p>
                </div>
              </div>
            </AnimatedEntry>

            {/* Conferences + Intl */}
            <AnimatedEntry delay={0.3}>
              <div className="p-6 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-2 rounded-lg bg-burgundy/[0.15] text-burgundy-light">
                    <Briefcase size={18} weight="duotone" />
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-cream/45 font-medium">
                    Proyección internacional
                  </div>
                </div>
                <p className="text-xs text-cream/60 leading-relaxed mb-4">
                  {OSCAR_PROFILE.conferences}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Colombia", "Bolivia", "Ecuador", "Argentina", "Alemania", "Portugal", "España", "EE.UU."].map((country) => (
                    <span
                      key={country}
                      className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.06] text-cream/45"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
