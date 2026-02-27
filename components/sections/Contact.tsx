"use client";

import {
  Envelope,
  Phone,
  WhatsappLogo,
  LinkedinLogo,
  InstagramLogo,
  MapPin,
} from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CONTACT } from "@/lib/constants";

const contactItems = [
  {
    icon: Envelope,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Telefono",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneRaw}`,
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: "Khevin Sánchez",
    href: CONTACT.linkedin,
  },
  {
    icon: InstagramLogo,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      {/* Gold accent top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-burgundy/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20">
          {/* Left — Info */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Contacto
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Hablemos sobre
                <br />
                <span className="text-gold">su caso</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-5 text-sm text-cream/55 leading-relaxed max-w-[50ch]">
                Atiendo consultas juridicas en diversas ramas del Derecho
                Publico. Cuenteme su situacion y buscaremos juntos la
                mejor estrategia legal. Coordinemos una reunion.
              </p>
            </AnimatedEntry>

            <StaggerContainer className="mt-10 space-y-4" stagger={0.06}>
              {contactItems.map((item, i) => (
                <StaggerItem key={i}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 p-4 rounded-xl border border-cream/[0.08] hover:border-gold/20 transition-all duration-400"
                  >
                    <div className="p-2.5 rounded-lg bg-cream/[0.06] text-cream/60 group-hover:text-gold group-hover:bg-gold/[0.08] transition-all duration-300">
                      <item.icon size={20} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-wider uppercase text-cream/40">
                        {item.label}
                      </div>
                      <div className="text-sm text-cream/75 group-hover:text-cream transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right — CTA card */}
          <div className="flex items-center">
            <AnimatedEntry delay={0.3} direction="right" className="w-full">
              <div className="p-8 md:p-10 rounded-2xl bg-cream/[0.04] border border-cream/[0.10] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={16} weight="duotone" className="text-gold" />
                  <span className="text-xs text-cream/50">
                    {CONTACT.location}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-cream tracking-tight mb-3">
                  Consulta directa via WhatsApp
                </h3>
                <p className="text-xs text-cream/45 leading-relaxed mb-8">
                  Envie un mensaje con los detalles de su consulta
                  juridica y le respondere a la brevedad.
                </p>

                <MagneticButton
                  href={`https://wa.me/${CONTACT.phoneRaw}?text=Hola%20Lic.%20S%C3%A1nchez%2C%20me%20gustar%C3%ADa%20coordinar%20una%20consulta%20jur%C3%ADdica.`}
                  variant="primary"
                  className="w-full justify-center"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Enviar mensaje
                </MagneticButton>

                {/* GC mention */}
                <div className="mt-8 pt-6 border-t border-cream/[0.08] flex items-center gap-3">
                  <img
                    src="/images/logo-gc.png"
                    alt="Corporacion GC"
                    className="h-8 w-auto opacity-60 dark:opacity-90 dark:brightness-0 dark:invert"
                  />
                  <div>
                    <div className="text-[10px] text-cream/40 tracking-wide">
                      Abogado asociado de
                    </div>
                    <div className="text-xs text-cream/60 font-medium">
                      Corporacion GC
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
