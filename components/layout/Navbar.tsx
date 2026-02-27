"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-surface backdrop-blur-xl shadow-[0_1px_0_rgba(196,162,101,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo
              size={36}
              primary="currentColor"
              accent="#C4A265"
              className="text-cream"
            />
            <div className="hidden sm:block">
              <div className="font-display text-sm font-semibold tracking-[0.15em] text-cream leading-none">
                LIC. SÁNCHEZ ZAMORA
              </div>
              <div className="text-[10px] tracking-[0.25em] text-cream/40 mt-0.5">
                ABOGADO
              </div>
            </div>
          </Link>

          {/* Desktop links + toggle */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.12em] uppercase text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.12em] uppercase text-cream/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-cream/70 hover:text-gold transition-colors"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-surface"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <Logo size={32} primary="currentColor" accent="#C4A265" className="text-cream" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-cream/70"
                aria-label="Cerrar menú"
              >
                <X size={22} weight="light" />
              </button>
            </div>
            <div className="flex flex-col items-start gap-1 px-6 pt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl font-light tracking-wide text-cream py-3 border-b border-cream/5 w-full"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-12 left-6 right-6">
              <div className="text-xs tracking-[0.2em] text-cream/30 uppercase">
                Corporación GC
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
