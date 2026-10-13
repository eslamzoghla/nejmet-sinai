import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY_EMAIL, nav, ui } from "@/lib/content";
import logo from "@/assets/logo-full.jpg";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy text-on-dark-muted">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <img src={logo} alt={t(ui.companyName)} className="h-56 w-auto rounded-sm" loading="lazy" width={458} height={719} />
        </div>
        <div>
          <h3 className="mb-5 font-bold text-on-dark">{t({ ar: "روابط", en: "Links" })}</h3>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {[...nav, { to: "/contact", label: ui.contact }, { to: "/privacy", label: ui.privacy }].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">{t(n.label)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-bold text-on-dark">{t(ui.contact)}</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${COMPANY_EMAIL}`} dir="ltr" className="hover:text-gold">{COMPANY_EMAIL}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{t({ ar: "المقر الرئيسي: جمهورية مصر العربية — فروع في القاهرة والمملكة العربية السعودية", en: "HQ: Egypt — offices in Cairo and the Kingdom of Saudi Arabia" })}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-3">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs md:flex-row">
          <span>© {new Date().getFullYear()} {t(ui.companyName)}. {t(ui.rights)}.</span>
          <span className="text-gold">{t({ ar: "نبني اليوم بنية الغد", en: "Building Today. Engineering Tomorrow." })}</span>
        </div>
      </div>
    </footer>
  );
}
