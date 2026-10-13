import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { nav, ui } from "@/lib/content";
import logo from "@/assets/logo-emblem.jpg";

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy/95 backdrop-blur border-b border-navy-3" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt={t(ui.companyName)} className="h-12 w-auto rounded-sm" width={48} height={48} />
          <div className="leading-tight">
            <div className="text-base font-extrabold text-on-dark">{lang === "ar" ? "نجمة سيناء" : "NAJMAT SINAI"}</div>
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
              className="px-3 py-2 text-sm font-semibold text-on-dark-muted transition-colors hover:text-gold-light data-[status=active]:text-gold"
            >
              {t(n.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="h-10 border border-navy-3 px-3 text-sm font-bold text-on-dark transition-colors hover:border-gold hover:text-gold"
            aria-label="Switch language"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Link
            to="/contact"
            className="hidden h-10 items-center bg-gold px-5 text-sm font-bold text-navy transition-colors hover:bg-gold-light md:inline-flex"
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
