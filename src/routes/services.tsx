import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { projects, services } from "@/lib/content";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => seo("خدماتنا — Services", "الطرق والبنية التحتية والإسكان وأعمال الحفر والأسفلت والخرسانة والإنترلوك. Roads, infrastructure, housing and earthworks.", "/services"),
  component: Services,
});

function Services() {
  const { t } = useI18n();
  return (
    <>
      <PageHero crumb={{ ar: "خدماتنا", en: "Services" }} title={{ ar: "خدماتنا", en: "Our Services" }} subtitle={{ ar: "قدرات تنفيذية متكاملة تغطي دورة المشروع من الحفر حتى التشطيب.", en: "Integrated capabilities covering the project cycle from earthworks to finishing." }} />
      <section className="py-24">
        <div className="container-x space-y-20">
          {services.map((s, i) => {
            const img = projects.find((p) => p.service === s.key)?.image;
            return (
              <div key={s.key} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {img && <img src={img} alt={t(s.title)} loading="lazy" className="aspect-[16/10] w-full object-cover shadow-card" />}
                <div>
                  <div className="text-sm font-bold text-gold">0{i + 1}</div>
                  <h2 className="mt-3 text-3xl font-extrabold text-navy">{t(s.title)}</h2>
                  <div className="gold-rule mt-5" />
                  <p className="mt-5 text-lg text-muted-foreground">{t(s.desc)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
