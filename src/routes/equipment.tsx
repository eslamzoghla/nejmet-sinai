import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { CtaBand, PageHero, SectionHead } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import qantara from "@/assets/projects/qantara-road.jpg";
import naqab from "@/assets/projects/naqab-asphalt.jpg";
import concrete from "@/assets/projects/badr-concrete-plant.jpg";
import nakhl from "@/assets/projects/nakhl-roads.jpg";

export const Route = createFileRoute("/equipment")({
  head: () => seo("المعدات والموارد — Equipment & Resources", "أسطول متكامل من المعدات والآليات وفريق عمل من المهندسين والمشرفين والمنفذين. Integrated fleet and multidisciplinary teams.", "/equipment"),
  component: Equipment,
});

function Equipment() {
  const { t } = useI18n();
  const cats = [
    { img: qantara, h: { ar: "معدات الحفر والتسوية", en: "Earthmoving & grading" }, p: { ar: "معدات الحفر والتحميل والتسوية والدمك لأعمال الطرق والمواقع.", en: "Excavation, loading, grading and compaction equipment for roads and sites." } },
    { img: nakhl, h: { ar: "معدات الرصف", en: "Paving equipment" }, p: { ar: "فرادات الأسفلت والهراسات ومعدات الرصف.", en: "Asphalt pavers, rollers and paving equipment." } },
    { img: naqab, h: { ar: "الكسارات وخلاطات الأسفلت", en: "Crushers & asphalt plants" }, p: { ar: "إنتاج الركام وخلطات الأسفلت بالقرب من مواقع العمل.", en: "Aggregate and asphalt mix production close to project sites." } },
    { img: concrete, h: { ar: "محطات الخرسانة والنقل", en: "Concrete plants & haulage" }, p: { ar: "محطات خرسانة مركزية وأسطول نقل لتوريد المواد.", en: "Central concrete plants and a haulage fleet for material supply." } },
  ];
  const team = [
    { ar: "المهندسون", en: "Engineers" }, { ar: "المشرفون", en: "Supervisors" }, { ar: "المنفذون", en: "Site execution" },
    { ar: "الإداريون", en: "Administration" }, { ar: "السائقون", en: "Drivers & operators" }, { ar: "المحاسبون", en: "Accountants" },
  ];
  return (
    <>
      <PageHero crumb={{ ar: "المعدات والموارد", en: "Equipment" }} title={{ ar: "المعدات والموارد", en: "Equipment & Resources" }} subtitle={{ ar: "أسطول متكامل من المعدات والآليات اللازمة لتنفيذ مختلف الأعمال.", en: "An integrated fleet of machinery and equipment for every type of work." }} image={qantara} />
      <section className="py-24">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {cats.map((c, i) => (
            <div key={i} className="card-hover-luxury group overflow-hidden border border-border bg-card shadow-card rounded-sm">
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img src={c.img} alt={t(c.h)} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-navy transition-colors duration-300 group-hover:text-gold">{t(c.h)}</h3>
                <p className="mt-2 text-muted-foreground">{t(c.p)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-navy py-24">
        <div className="container-x">
          <SectionHead light eyebrow={{ ar: "فريق العمل", en: "Our people" }} title={{ ar: "فريق متكامل لإدارة وتنفيذ المشروعات", en: "Multidisciplinary teams for every project" }} />
          <div className="grid grid-cols-2 gap-px bg-navy-3 md:grid-cols-3">
            {team.map((x, i) => (
              <div key={i} className="group bg-navy p-8 text-lg font-bold text-on-dark transition-all duration-300 hover:bg-navy-2 hover:text-gold cursor-default border border-transparent hover:border-gold/30">
                {t(x)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
