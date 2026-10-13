import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { projects, services, ui, type ServiceKey } from "@/lib/content";
import { CtaBand, PageHero, ProjectCard } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import suez from "@/assets/projects/suez-canal.jpg";

export const Route = createFileRoute("/projects/")({
  head: () => seo("المشاريع — Projects", "معرض مشروعات نجمة سيناء: طريق العاصمة الإدارية، قناة السويس الجديدة، الإسكان الاجتماعي، طرق سيناء والمزيد.", "/projects"),
  component: Projects,
});

function Projects() {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<ServiceKey | "all">("all");
  const list = useMemo(
    () =>
      projects.filter(
        (p) =>
          (cat === "all" || p.service === cat) &&
          (!q || (p.title.ar + p.title.en + p.location.ar + p.location.en).toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );
  const chip = (active: boolean) =>
    `h-10 px-4 text-sm font-semibold border transition-colors ${active ? "bg-navy text-on-dark border-navy" : "border-border text-navy hover:border-gold"}`;

  return (
    <>
      <PageHero crumb={{ ar: "المشاريع", en: "Projects" }} title={{ ar: "المشاريع التي نفذتها الشركة", en: "Our Project Portfolio" }} subtitle={{ ar: "مجموعة مختارة من المشروعات المنفذة في البنية التحتية والطرق والإسكان.", en: "A selection of delivered infrastructure, road and housing projects." }} image={suez} />
      <section className="py-16">
        <div className="container-x">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <button className={chip(cat === "all")} onClick={() => setCat("all")}>{t(ui.all)}</button>
              {services.map((s) => (
                <button key={s.key} className={chip(cat === s.key)} onClick={() => setCat(s.key)}>{t(s.title)}</button>
              ))}
            </div>
            <label className="relative block lg:w-72">
              <span className="sr-only">{t(ui.search)}</span>
              <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search)} className="h-10 w-full border border-input bg-background ps-10 pe-3 text-sm outline-none focus:border-gold" />
            </label>
          </div>
          {list.length ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
          ) : (
            <p className="py-20 text-center text-muted-foreground">{t(ui.noResults)}</p>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
