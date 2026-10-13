import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { stats } from "@/lib/content";
import { CtaBand, PageHero, SectionHead } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import housing from "@/assets/projects/badr-housing.jpg";

export const Route = createFileRoute("/about")({
  head: () => seo("من نحن — About Us", "تعرف على شركة نجمة سيناء للمقاولات العامة: خبرة 10 سنوات، تصنيف أول، ومشروعات بقيمة تتجاوز 10 مليارات جنيه.", "/about"),
  component: About,
});

function About() {
  const { t } = useI18n();
  const blocks = [
    { h: { ar: "رسالتنا", en: "Mission" }, p: { ar: "تنفيذ وإدارة مشروعات الإنشاءات والبنية التحتية بكفاءة عالية وفقًا لمتطلبات كل مشروع، اعتمادًا على خبراتنا الفنية وإمكاناتنا التنفيذية المتكاملة.", en: "To execute and manage construction and infrastructure projects efficiently and to each project's requirements, backed by our technical expertise and integrated resources." } },
    { h: { ar: "رؤيتنا", en: "Vision" }, p: { ar: "أن نكون شريكًا موثوقًا في تنفيذ المشروعات الكبرى داخل مصر وخارجها، وأن نوسع شراكاتنا مع الشركات والمؤسسات الدولية.", en: "To be a trusted partner for major projects in Egypt and abroad, expanding our partnerships with international companies and institutions." } },
    { h: { ar: "قيمنا", en: "Values" }, p: { ar: "الالتزام، الجودة، السلامة، والشراكات طويلة الأمد التي تحقق قيمة مضافة لعملائنا.", en: "Commitment, quality, safety and long-term partnerships that create added value for our clients." } },
  ];
  return (
    <>
      <PageHero crumb={{ ar: "من نحن", en: "About" }} title={{ ar: "عن نجمة سيناء", en: "About Najmat Sinai" }} subtitle={{ ar: "شركة مقاولات عامة مصنفة تصنيفًا أول، بخبرة تمتد لأكثر من عشر سنوات.", en: "A first-class general contracting company with more than ten years of experience." }} image={housing} />
      <section className="py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <SectionHead eyebrow={{ ar: "نبذة تعريفية", en: "Company profile" }} title={{ ar: "خبرة في المشروعات القومية", en: "Experience in national projects" }} />
            <p>{t({ ar: "شركة نجمة سيناء للمقاولات العامة شركة متخصصة في مجال المقاولات والإنشاءات، ومصنفة تصنيفًا أول، وتمتلك خبرة تمتد لأكثر من عشر سنوات في تنفيذ وإدارة المشاريع الإنشائية ومشروعات البنية التحتية.", en: "Najmat Sinai General Contracting is a first-class classified construction company with over ten years of experience executing and managing construction and infrastructure projects." })}</p>
            <p>{t({ ar: "شاركت الشركة في تنفيذ عدد من المشاريع الكبرى داخل جمهورية مصر العربية، بما في ذلك البنية التحتية والطرق القومية والإسكان، ومن بينها مشروعات قناة السويس الجديدة وشبكة الطرق القومية والإسكان الاجتماعي.", en: "The company has taken part in major projects across Egypt in infrastructure, national roads and housing — including the New Suez Canal, the national road network and social housing." })}</p>
            <p>{t({ ar: "كما تمتلك الشركة خبرات في تنفيذ وإدارة المشاريع في المملكة العربية السعودية بما يتوافق مع مستهدفات رؤية المملكة 2030، ونفذت مشروعات بإجمالي قيم تتجاوز 10 مليارات جنيه مصري خلال السنوات العشر الماضية.", en: "It also has project experience in the Kingdom of Saudi Arabia, aligned with Vision 2030, and has delivered projects worth over EGP 10 billion over the past decade." })}</p>
            <p>{t({ ar: "يقع المقر الرئيسي في جمهورية مصر العربية، وللشركة فروع ومكاتب في القاهرة والمملكة العربية السعودية.", en: "Headquartered in Egypt, the company has branches and offices in Cairo and Saudi Arabia." })}</p>
          </div>
          <div className="grid grid-cols-2 content-start gap-px bg-border">
            {stats.map((s, i) => (
              <div key={i} className="bg-offwhite p-8">
                <div className="text-3xl font-extrabold text-navy">{t(s.value)}</div>
                <div className="mt-2 text-sm text-muted-foreground">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-offwhite py-24">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {blocks.map((b, i) => (
            <div key={i} className="border-t-2 border-gold bg-card p-8 shadow-card">
              <h3 className="text-2xl font-bold text-navy">{t(b.h)}</h3>
              <p className="mt-4 text-muted-foreground">{t(b.p)}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
