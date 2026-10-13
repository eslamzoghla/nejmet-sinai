import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HardHat, Leaf, GraduationCap, AlertTriangle, FileCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/qhse")({
  head: () => seo("الجودة والسلامة والصحة والبيئة — QHSE", "نهج نجمة سيناء في إدارة الجودة وسلامة العاملين والمسؤولية البيئية. Quality, health, safety and environment.", "/qhse"),
  component: Qhse,
});

function Qhse() {
  const { t } = useI18n();
  const items = [
    { i: ShieldCheck, h: { ar: "ضمان الجودة", en: "Quality assurance" }, p: { ar: "متابعة الأعمال واختبار المواد في كل مرحلة لضمان مطابقتها للمواصفات.", en: "Monitoring works and testing materials at every stage to meet specifications." } },
    { i: HardHat, h: { ar: "السلامة في المواقع", en: "Site safety" }, p: { ar: "إجراءات واضحة ومعدات وقاية شخصية لحماية العاملين في كل موقع.", en: "Clear procedures and PPE to protect workers on every site." } },
    { i: Leaf, h: { ar: "الإدارة البيئية", en: "Environmental management" }, p: { ar: "الحد من الأثر البيئي للأعمال وإدارة المخلفات بمسؤولية.", en: "Reducing environmental impact and handling waste responsibly." } },
    { i: GraduationCap, h: { ar: "تدريب العاملين", en: "Workforce training" }, p: { ar: "تأهيل مستمر للفرق الفنية والمشغلين.", en: "Continuous training for technical teams and operators." } },
    { i: AlertTriangle, h: { ar: "تقييم المخاطر", en: "Risk assessment" }, p: { ar: "تحديد المخاطر قبل بدء الأعمال ووضع خطط للحد منها.", en: "Identifying risks before work starts and planning mitigation." } },
    { i: FileCheck, h: { ar: "الالتزام بالمعايير", en: "Standards & compliance" }, p: { ar: "الالتزام باشتراطات الجهات المالكة واللوائح المعمول بها.", en: "Compliance with client requirements and applicable regulations." } },
  ];
  return (
    <>
      <PageHero crumb={{ ar: "الجودة والسلامة", en: "QHSE" }} title={{ ar: "الجودة والصحة والسلامة والبيئة", en: "Quality, Health, Safety & Environment" }} subtitle={{ ar: "نعمل بمعايير تحمي العاملين والمجتمع وتضمن جودة التنفيذ.", en: "Standards that protect our people and communities and assure delivery quality." }} />
      <section className="py-24">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ i: Icon, h, p }, k) => (
            <div key={k} className="border border-border p-8 transition-colors hover:border-gold">
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-bold text-navy">{t(h)}</h3>
              <p className="mt-2 text-muted-foreground">{t(p)}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
