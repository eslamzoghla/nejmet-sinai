import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY_EMAIL } from "@/lib/content";
import { PageHero } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("تواصل معنا — Contact Us", "تواصل مع نجمة سيناء للمقاولات العامة لطلب استشارة أو عرض سعر أو شراكة. info@nejmetsinai.com", "/contact"),
  component: Contact,
});

const field = "w-full border border-input bg-background px-4 py-3 outline-none focus:border-gold";

function Contact() {
  const { t } = useI18n();
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim().slice(0, 100);
    const email = String(f.get("email") || "").trim().slice(0, 255);
    const msg = String(f.get("message") || "").trim().slice(0, 2000);
    if (!name || !msg || !/^\S+@\S+\.\S+$/.test(email)) {
      setErr(t({ ar: "يرجى إدخال الاسم وبريد إلكتروني صحيح والرسالة.", en: "Please enter your name, a valid email and a message." }));
      return;
    }
    setErr("");
    const body = `${name}\n${email}\n${f.get("phone") || ""}\n${f.get("company") || ""}\n\n${msg}`;
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(`${f.get("type")} — ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const types = [
    { ar: "استفسار عام", en: "General inquiry" }, { ar: "طلب عرض سعر", en: "Request a quotation" },
    { ar: "شراكة", en: "Partnership" }, { ar: "مورد / مقاول باطن", en: "Supplier / subcontractor" },
  ];

  return (
    <>
      <PageHero crumb={{ ar: "تواصل معنا", en: "Contact" }} title={{ ar: "تواصل معنا", en: "Contact Us" }} subtitle={{ ar: "يسعدنا مناقشة مشروعك القادم أو فرص الشراكة.", en: "We'd be glad to discuss your next project or partnership opportunity." }} />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <div>
                <div className="font-bold text-navy">{t({ ar: "البريد الإلكتروني", en: "Email" })}</div>
                <a href={`mailto:${COMPANY_EMAIL}`} dir="ltr" className="mt-1 block text-muted-foreground hover:text-gold transition-colors">{COMPANY_EMAIL}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-gold" />
              <div className="space-y-4">
                <div className="font-bold text-navy text-lg">{t({ ar: "مواقعنا ومكاتبنا", en: "Our Locations & Offices" })}</div>
                <div className="space-y-3 text-sm">
                  <div className="rounded border-s-2 border-gold ps-4 py-2 bg-card/80 shadow-sm">
                    <span className="font-bold text-navy block text-xs uppercase tracking-wider text-gold">{t({ ar: "المقر الرئيسي", en: "Headquarters" })}</span>
                    <span className="text-navy font-semibold mt-0.5 block">{t({ ar: "جنوب سيناء — جمهورية مصر العربية", en: "South Sinai — Egypt" })}</span>
                  </div>
                  <div className="rounded border-s-2 border-gold/60 ps-4 py-2 bg-card/80 shadow-sm">
                    <span className="font-bold text-navy block text-xs uppercase tracking-wider text-gold">{t({ ar: "الفروع والمكاتب الإقليمية", en: "Regional Offices & Branches" })}</span>
                    <div className="mt-1.5 space-y-1.5 text-muted-foreground font-medium">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span>{t({ ar: "جمهورية مصر العربية: فرع القاهرة", en: "Egypt: Cairo Branch" })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span>{t({ ar: "دولة الإمارات: مكتب دبي", en: "United Arab Emirates: Dubai Office" })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        <span>{t({ ar: "المملكة العربية السعودية", en: "Kingdom of Saudi Arabia" })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={submit} noValidate className="grid gap-5 border-t-2 border-gold bg-offwhite p-8 md:grid-cols-2 shadow-card rounded-sm">
            <label className="grid gap-2 text-sm font-semibold text-navy">{t({ ar: "الاسم *", en: "Name *" })}<input name="name" maxLength={100} className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold text-navy">{t({ ar: "البريد الإلكتروني *", en: "Email *" })}<input name="email" type="email" maxLength={255} dir="ltr" className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold text-navy">{t({ ar: "الهاتف", en: "Phone" })}<input name="phone" maxLength={30} dir="ltr" className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold text-navy">{t({ ar: "الشركة", en: "Company" })}<input name="company" maxLength={100} className={field} /></label>
            <label className="grid gap-2 text-sm font-semibold text-navy md:col-span-2">{t({ ar: "نوع الطلب", en: "Inquiry type" })}
              <select name="type" className={field}>{types.map((x, i) => <option key={i} value={x.en}>{t(x)}</option>)}</select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-navy md:col-span-2">{t({ ar: "الرسالة *", en: "Message *" })}<textarea name="message" rows={5} maxLength={2000} className={field} /></label>
            {err && <p role="alert" className="text-sm text-destructive md:col-span-2">{err}</p>}
            {sent && <p className="text-sm text-navy md:col-span-2">{t({ ar: "تم فتح برنامج البريد لإرسال رسالتك.", en: "Your email app has opened to send the message." })}</p>}
            <button className="btn-shine h-12 bg-navy font-bold text-on-dark shadow-md transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_rgba(216,167,70,0.4)] md:col-span-2 rounded-sm">{t({ ar: "إرسال الرسالة", en: "Send message" })}</button>
          </form>
        </div>
      </section>
    </>
  );
}
