import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { COMPANY_EMAIL } from "@/lib/content";
import { PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo("سياسة الخصوصية — Privacy Policy", "كيف تتعامل نجمة سيناء مع البيانات الشخصية المرسلة عبر الموقع. How we handle personal data.", "/privacy"),
  component: Privacy,
});

function Privacy() {
  const { t } = useI18n();
  const parts = [
    { ar: "نجمع فقط المعلومات التي ترسلها إلينا طوعًا عبر نموذج التواصل أو البريد الإلكتروني، مثل الاسم والبريد ورقم الهاتف.", en: "We only collect information you voluntarily send us through the contact form or email, such as your name, email and phone number." },
    { ar: "نستخدم هذه المعلومات للرد على استفسارك فقط، ولا نبيعها أو نشاركها مع أطراف ثالثة.", en: "We use it solely to respond to your inquiry and never sell or share it with third parties." },
    { ar: "يحفظ الموقع تفضيل اللغة على جهازك لتحسين تجربتك.", en: "The site stores your language preference on your device to improve your experience." },
    { ar: `لأي استفسار بخصوص بياناتك، راسلنا على ${COMPANY_EMAIL}.`, en: `For any question about your data, contact ${COMPANY_EMAIL}.` },
  ];
  return (
    <>
      <PageHero crumb={{ ar: "سياسة الخصوصية", en: "Privacy" }} title={{ ar: "سياسة الخصوصية", en: "Privacy Policy" }} />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          {parts.map((p, i) => <p key={i}>{t(p)}</p>)}
        </div>
      </section>
    </>
  );
}
