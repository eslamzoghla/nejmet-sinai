import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { COMPANY_EMAIL } from "@/lib/content";
import { PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => seo("الوظائف — Careers", "انضم إلى فريق نجمة سيناء للمقاولات العامة من مهندسين ومشرفين وفنيين. Join our engineering and site teams.", "/careers"),
  component: Careers,
});

function Careers() {
  const { t } = useI18n();
  return (
    <>
      <PageHero crumb={{ ar: "الوظائف", en: "Careers" }} title={{ ar: "انضم إلى فريقنا", en: "Build Your Career With Us" }} subtitle={{ ar: "نبحث دائمًا عن المهندسين والمشرفين والفنيين والإداريين المتميزين.", en: "We are always looking for talented engineers, supervisors, technicians and administrators." }} />
      <section className="py-24">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-navy">{t({ ar: "لا توجد وظائف معلنة حاليًا", en: "No open positions right now" })}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t({ ar: "يمكنك إرسال سيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة.", en: "Send us your CV and we will contact you when a suitable role opens." })}</p>
          <a href={`mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent("Job application / طلب توظيف")}`} className="mt-8 inline-flex h-12 items-center bg-gold px-8 font-bold text-navy hover:bg-gold-light">
            {t({ ar: "أرسل سيرتك الذاتية", en: "Send your CV" })}
          </a>
        </div>
      </section>
    </>
  );
}
