import { Logo } from "@/components/ui/Logo";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import {
  Envelope,
  Phone,
  LinkedinLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-dark-bg text-cream/65">
      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo size={40} primary="currentColor" accent="#C4A265" className="text-cream" />
              <div>
                <div className="font-display text-sm font-semibold tracking-[0.15em] text-cream leading-none">
                  LIC. KHEVIN SÁNCHEZ ZAMORA
                </div>
                <div className="text-[10px] tracking-[0.25em] text-cream/40 mt-1">
                  ABOGADO ASOCIADO · CORPORACION GC
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-[38ch] text-cream/50">
              Litigio estrategico en Derecho Administrativo, Contencioso
              Administrativo y Derecho Constitucional.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-cream/12 hover:border-gold/40 hover:text-gold transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} weight="regular" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-cream/12 hover:border-gold/40 hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="regular" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="p-2 rounded-lg border border-cream/12 hover:border-gold/40 hover:text-gold transition-all duration-300"
                aria-label="Email"
              >
                <Envelope size={18} weight="regular" />
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="p-2 rounded-lg border border-cream/12 hover:border-gold/40 hover:text-gold transition-all duration-300"
                aria-label="Telefono"
              >
                <Phone size={18} weight="regular" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-5">
              Navegacion
            </div>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/55 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* GC */}
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-5">
              Firma
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/images/logo-gc.png"
                alt="Corporacion GC"
                className="h-10 w-auto opacity-60 dark:opacity-90 dark:brightness-0 dark:invert"
              />
            </div>
            <p className="text-sm text-cream/50 leading-relaxed">
              Corporacion GC, fundada por el Dr. Oscar Gonzalez Camacho,
              coredactor del Codigo Procesal Contencioso Administrativo.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-cream/35">
            {new Date().getFullYear()} Lic. Khevin Sánchez Zamora. Todos los
            derechos reservados.
          </div>
          <div className="text-xs text-cream/30">
            Cartago, Costa Rica
          </div>
        </div>
      </div>
    </footer>
  );
}
