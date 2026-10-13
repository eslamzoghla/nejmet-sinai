import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useI18n, type L } from "@/lib/i18n";
import { serviceTitle, ui, type Project } from "@/lib/content";
import hero from "@/assets/hero.jpg";

export function PageHero({ title, subtitle, crumb, image = hero }: { title: L; subtitle?: L; crumb: L; image?: string }) {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-20">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" width={1920} height={1088} />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="container-x py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-on-dark-muted">
          <Link to="/" className="hover:text-gold">{t(ui.home)}</Link>
          <span className="text-gold">/</span>
          <span className="text-on-dark">{t(crumb)}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold text-on-dark md:text-6xl animate-rise">{t(title)}</h1>
        <div className="gold-rule mt-6" />
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-on-dark-muted">{t(subtitle)}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children, light }: { eyebrow: L; title: L; children?: ReactNode; light?: boolean }) {
  const { t } = useI18n();
  return (
    <div className="mb-12 max-w-2xl">
      <span className="eyebrow">{t(eyebrow)}</span>
      <h2 className={`mt-4 text-3xl font-extrabold md:text-4xl ${light ? "text-on-dark" : "text-navy"}`}>{t(title)}</h2>
      {children && <p className={`mt-4 text-lg ${light ? "text-on-dark-muted" : "text-muted-foreground"}`}>{children}</p>}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  const { dir } = useI18n();
  return dir === "rtl" ? <ArrowLeft className={className} /> : <ArrowRight className={className} />;
}

export function ProjectCard({ p }: { p: Project }) {
  const { t } = useI18n();
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: p.slug }}
      className="group block overflow-hidden border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={p.image} alt={t(p.title)} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-gold">{t(serviceTitle(p.service))}</div>
        <h3 className="mt-2 text-lg font-bold text-navy">{t(p.title)}</h3>
        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> {t(p.location)} · {t(ui[p.country])}
        </div>
      </div>
    </Link>
  );
}

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="bg-navy-2">
      <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-on-dark md:text-4xl">{t({ ar: "لنتعاون في تنفيذ مشاريع المستقبل", en: "Let's Build What's Next" })}</h2>
          <p className="mt-4 max-w-xl text-on-dark-muted">
            {t({ ar: "نرحب بالشراكات مع الشركات والمؤسسات المحلية والدولية لتنفيذ المشروعات الكبرى داخل مصر وخارجها.", en: "We welcome partnerships with local and international companies to deliver major projects in Egypt and beyond." })}
          </p>
        </div>
        <Link to="/contact" className="inline-flex h-12 items-center gap-3 bg-gold px-7 font-bold text-navy transition-colors hover:bg-gold-light">
          {t(ui.consult)} <Arrow className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
