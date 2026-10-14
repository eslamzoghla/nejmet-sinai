import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects, services, stats, ui } from "@/lib/content";
import { Arrow, CtaBand, ProjectCard, SectionHead } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import hero from "@/assets/hero.jpg";
import concrete from "@/assets/projects/badr-concrete-plant.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "نجمة سيناء للمقاولات العامة — Construction & Contracting",
      "شركة مقاولات مصنفة فئة أولى بخبرة تتجاوز 10 سنوات في الطرق والبنية التحتية والإسكان في مصر والسعودية والإمارات. First-class contractor in Egypt, Saudi Arabia & UAE.",
      "/",
    ),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <>
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy">
        <img src={hero} alt={t({ ar: "موقع إنشاء طريق في سيناء", en: "Road construction site in Sinai" })} className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-1000 scale-100 hover:scale-105" width={1920} height={1088} />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="absolute top-1/4 -start-24 h-[450px] w-[450px] rounded-full bg-gold/15 blur-[130px] pointer-events-none" />
        <div className="container-x pb-20 pt-32 md:pb-28">
          <div className="inline-flex">
            <span className="glass-navy inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold text-gold tracking-widest uppercase animate-rise animate-float border border-gold/40 shadow-lg mb-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse-subtle" />
              {t({ ar: "مصنفة فئة أولى · مصر، السعودية، الإمارات", en: "First-class contractor · Egypt, KSA & UAE" })}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-on-dark md:text-7xl animate-rise">
            {t({ ar: "نبني اليوم ", en: "Building Today. " })}
            <span className="text-gold-gradient">{t({ ar: "بنية الغد", en: "Engineering Tomorrow." })}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-dark-muted md:text-xl">
            {t({ ar: "شركة نجمة سيناء للمقاولات العامة — خبرات هندسية وإمكانات تنفيذية متكاملة لتنفيذ وإدارة مشاريع الإنشاءات والبنية التحتية.", en: "Najmat Sinai Construction & Contracting delivers construction and infrastructure projects supported by experienced teams and integrated execution resources." })}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="btn-shine inline-flex h-12 items-center gap-3 bg-gold px-8 font-bold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_25px_rgba(216,167,70,0.5)] hover:-translate-y-0.5 rounded-sm">
              {t(ui.explore)} <Arrow className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="glass-navy inline-flex h-12 items-center px-8 font-bold text-on-dark transition-all duration-300 hover:border-gold hover:text-gold hover:gold-glow-sm hover:-translate-y-0.5 rounded-sm">
              {t(ui.contact)}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="group border-border px-4 py-10 text-center md:border-e last:border-e-0 transition-all duration-300 hover:bg-offwhite/80 cursor-default">
              <div className="text-3xl font-extrabold text-navy md:text-4xl transition-transform duration-300 group-hover:scale-105 group-hover:text-gold">{t(s.value)}</div>
              <div className="mx-auto my-3 h-0.5 w-8 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-16" />
              <div className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-navy">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-offwhite py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow={{ ar: "من نحن", en: "Who we are" }} title={{ ar: "خبرة تمتد لأكثر من عشر سنوات في المشروعات الكبرى", en: "A decade of delivering major projects" }}>
              {t({ ar: "شركة متخصصة في المقاولات والإنشاءات، مصنفة تصنيفًا أول، شاركت في مشروعات قومية كبرى مثل قناة السويس الجديدة وشبكة الطرق القومية والإسكان الاجتماعي.", en: "A first-class classified contracting company that has taken part in major national projects including the New Suez Canal, the national road network and social housing." })}
            </SectionHead>
            <ul className="space-y-3">
              {[
                { ar: "خبرات فنية وإدارية متخصصة", en: "Specialised technical and administrative expertise" },
                { ar: "أسطول متكامل من المعدات والآليات", en: "An integrated fleet of machinery and equipment" },
                { ar: "مهندسون ومشرفون ومنفذون وإداريون", en: "Engineers, supervisors, site and admin teams" },
                { ar: "خبرة في مصر والمملكة العربية السعودية والإمارات", en: "Experience in Egypt, Saudi Arabia & UAE" },
              ].map((x, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-navy transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold shadow-sm"><Check className="h-4 w-4" /></span>
                  {t(x)}
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors duration-300 group">
              {t({ ar: "اكتشف نجمة سيناء", en: "Discover Najmat Sinai" })} <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
          <div className="relative group overflow-hidden shadow-card card-hover-luxury rounded-sm">
            <img src={concrete} alt={t({ ar: "محطة الخرسانة المركزية في بدر", en: "Badr central concrete plant" })} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="container-x">
          <SectionHead light eyebrow={{ ar: "خدماتنا", en: "Core services" }} title={{ ar: "قدرات تنفيذية متكاملة", en: "Integrated execution capabilities" }} />
          <div className="grid gap-px bg-navy-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.key} className="group relative bg-navy p-8 transition-all duration-500 hover:bg-navy-2 hover:-translate-y-1 hover:shadow-2xl overflow-hidden border border-navy-3/60 hover:border-gold/50">
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-gold/70 transition-all duration-300 group-hover:text-gold group-hover:scale-110">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-gold/30 transition-all duration-300 group-hover:bg-gold group-hover:scale-125" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-on-dark transition-colors duration-300 group-hover:text-gold">{t(s.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{t(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={{ ar: "أعمالنا", en: "Featured projects" }} title={{ ar: "مشروعات نفخر بتنفيذها", en: "Projects we are proud of" }} />
            <Link to="/projects" className="mb-12 inline-flex items-center gap-2 font-bold text-navy hover:text-gold">
              {t(ui.viewAll)} <Arrow className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => <ProjectCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
