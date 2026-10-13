import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { projects, serviceTitle, ui } from "@/lib/content";
import { CtaBand, ProjectCard } from "@/components/site/blocks";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData, params }) => {
    const p = projects.find((x) => x.slug === loaderData?.slug);
    const title = p ? `${p.title.ar} — ${p.title.en} | Najmat Sinai` : "Unavailable | Najmat Sinai";
    const desc = p ? `${p.desc.ar} ${p.desc.en}` : "Project not found.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: Detail,
});

function Detail() {
  const { slug } = Route.useLoaderData();
  const { t } = useI18n();
  const p = projects.find((x) => x.slug === slug)!;
  const related = projects.filter((x) => x.slug !== slug && x.service === p.service).concat(projects.filter((x) => x.service !== p.service)).slice(0, 3);
  const rows = [
    [{ ar: "التصنيف", en: "Category" }, serviceTitle(p.service)],
    [{ ar: "الموقع", en: "Location" }, p.location],
    [{ ar: "الدولة", en: "Country" }, ui[p.country]],
    [{ ar: "الحالة", en: "Status" }, ui.completed],
  ] as const;
  return (
    <>
      <section className="bg-navy pt-20">
        <div className="container-x py-14">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-on-dark-muted">
            <Link to="/" className="hover:text-gold">{t(ui.home)}</Link><span className="text-gold">/</span>
            <Link to="/projects" className="hover:text-gold">{t({ ar: "المشاريع", en: "Projects" })}</Link><span className="text-gold">/</span>
            <span className="text-on-dark">{t(p.title)}</span>
          </nav>
          <h1 className="max-w-3xl text-4xl font-extrabold text-on-dark md:text-5xl">{t(p.title)}</h1>
          <div className="gold-rule mt-6" />
        </div>
      </section>
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <img src={p.image} alt={t(p.title)} className="w-full object-cover shadow-card" />
            <h2 className="mt-10 text-2xl font-bold text-navy">{t({ ar: "نبذة عن المشروع", en: "Project overview" })}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t(p.desc)}</p>
          </div>
          <aside className="h-fit border-t-2 border-gold bg-offwhite p-8">
            <dl className="space-y-5">
              {rows.map(([k, v], i) => (
                <div key={i} className="border-b border-border pb-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-gold">{t(k)}</dt>
                  <dd className="mt-1 font-semibold text-navy">{t(v)}</dd>
                </div>
              ))}
            </dl>
            <Link to="/contact" className="mt-6 inline-flex h-11 w-full items-center justify-center bg-navy font-bold text-on-dark hover:bg-navy-3">{t(ui.consult)}</Link>
          </aside>
        </div>
      </section>
      <section className="bg-offwhite py-20">
        <div className="container-x">
          <h2 className="mb-10 text-2xl font-bold text-navy">{t({ ar: "مشروعات ذات صلة", en: "Related projects" })}</h2>
          <div className="grid gap-8 md:grid-cols-3">{related.map((r) => <ProjectCard key={r.slug} p={r} />)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
