import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { nav, ui } from "@/lib/content";
import logo from "@/assets/Logo.jpeg";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy/92 backdrop-blur-md border-b border-navy-3/80 shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-navy/80 via-navy/30 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]" onClick={() => setOpen(false)}>
          <img src={logo} alt={t(ui.companyName)} className="h-12 w-auto rounded-sm transition-transform duration-300 group-hover:scale-105 shadow-sm" width={48} height={48} />
          <div className="leading-tight">
            <div className="text-base font-extrabold text-on-dark transition-colors duration-300 group-hover:text-gold">{lang === "ar" ? "نجمة سيناء" : "NAJMAT SINAI"}</div>
            <div className="text-[0.65rem] font-semibold tracking-[0.15em] text-gold">
              {lang === "ar" ? "للمقاولات العامة" : "CONSTRUCTION & CONTRACTING"}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative px-3.5 py-2 text-sm font-semibold text-on-dark-muted transition-all duration-300 hover:text-gold data-[status=active]:text-gold after:content-[''] after:absolute after:bottom-0 after:inset-x-3.5 after:h-0.5 after:bg-gold after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
            >
              {t(n.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="glass-navy h-10 px-3.5 text-xs font-bold text-on-dark tracking-wider rounded-sm transition-all duration-300 hover:border-gold hover:text-gold hover:gold-glow-sm"
            aria-label="Switch language"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Link
            to="/contact"
            className="btn-shine hidden h-10 items-center bg-gold px-6 text-sm font-bold text-navy shadow-md transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(216,167,70,0.4)] hover:-translate-y-0.5 md:inline-flex rounded-sm"
          >
            {t(ui.consult)}
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center text-on-dark xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-3 bg-navy xl:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {[...nav, { to: "/contact", label: ui.contact }].map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-navy-3 py-3 font-semibold text-on-dark data-[status=active]:text-gold"
              >
                {t(n.label)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
