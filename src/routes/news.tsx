import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/news")({
  head: () => seo("الأخبار — News & Updates", "آخر أخبار ومستجدات مشروعات نجمة سيناء للمقاولات العامة. Company news and project updates.", "/news"),
  component: News,
});

function News() {
  const { t } = useI18n();
  return (
    <>
      <PageHero crumb={{ ar: "الأخبار", en: "News" }} title={{ ar: "الأخبار والمستجدات", en: "News & Updates" }} />
      <section className="py-24">
        <div className="container-x flex flex-col items-center text-center">
          <Newspaper className="h-12 w-12 text-gold" strokeWidth={1.5} />
          <h2 className="mt-6 text-2xl font-bold text-navy">{t({ ar: "قريبًا", en: "Coming soon" })}</h2>
          <p className="mt-3 max-w-md text-muted-foreground">{t({ ar: "سننشر هنا أخبار الشركة ومستجدات المشروعات.", en: "Company announcements and project updates will be published here." })}</p>
        </div>
      </section>
    </>
  );
}
