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
            <div className="flex gap-4"><Mail className="h-6 w-6 text-gold" /><div><div className="font-bold text-navy">{t({ ar: "البريد الإلكتروني", en: "Email" })}</div><a href={`mailto:${COMPANY_EMAIL}`} dir="ltr" className="text-muted-foreground hover:text-gold">{COMPANY_EMAIL}</a></div></div>
            <div className="flex gap-4"><MapPin className="h-6 w-6 text-gold" /><div><div className="font-bold text-navy">{t({ ar: "مكاتبنا", en: "Offices" })}</div><p className="text-muted-foreground">{t({ ar: "المقر الرئيسي: جمهورية مصر العربية", en: "Headquarters: Egypt" })}<br />{t({ ar: "فروع: القاهرة — المملكة العربية السعودية", en: "Branches: Cairo — Saudi Arabia" })}</p></div></div>
          </div>
          <form onSubmit={submit} noValidate className="grid gap-5 border-t-2 border-gold bg-offwhite p-8 md:grid-cols-2">
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
            <button className="h-12 bg-navy font-bold text-on-dark hover:bg-navy-3 md:col-span-2">{t({ ar: "إرسال", en: "Send message" })}</button>
          </form>
        </div>
      </section>
    </>
  );
}
