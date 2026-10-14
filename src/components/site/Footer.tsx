import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { COMPANY_EMAIL, nav, ui } from "@/lib/content";
import logo from "@/assets/Logo.jpeg";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy text-on-dark-muted">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <img src={logo} alt={t(ui.companyName)} className="h-56 w-auto rounded-sm" loading="lazy" width={1434} height={1920} />
        </div>
        <div>
          <h3 className="mb-5 font-bold text-on-dark">{t({ ar: "روابط سريعة", en: "Quick Links" })}</h3>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {[...nav, { to: "/contact", label: ui.contact }, { to: "/privacy", label: ui.privacy }].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-all duration-300 hover:text-gold hover:translate-x-1 rtl:hover:-translate-x-1 inline-block">{t(n.label)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-bold text-on-dark">{t(ui.contact)}</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${COMPANY_EMAIL}`} dir="ltr" className="transition-colors duration-300 hover:text-gold">{COMPANY_EMAIL}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <div className="space-y-2.5 text-xs leading-relaxed">
                <div>
                  <span className="font-bold text-gold block uppercase tracking-wider">{t({ ar: "المقر الرئيسي:", en: "Headquarters:" })}</span>
                  <span className="text-on-dark-muted font-medium">{t({ ar: "جنوب سيناء — جمهورية مصر العربية", en: "South Sinai — Egypt" })}</span>
                </div>
                <div>
                  <span className="font-bold text-gold block uppercase tracking-wider mb-1">{t({ ar: "الفروع والمكاتب الإقليمية:", en: "Regional Offices & Branches:" })}</span>
                  <div className="text-on-dark-muted space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{t({ ar: "جمهورية مصر العربية: فرع القاهرة", en: "Egypt: Cairo Office" })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{t({ ar: "دولة الإمارات: مكتب دبي", en: "UAE: Dubai Office" })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{t({ ar: "المملكة العربية السعودية", en: "Kingdom of Saudi Arabia" })}</span>
                    </div>
                  </div>
                </div>
              </div>
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
