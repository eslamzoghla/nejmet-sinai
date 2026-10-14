import type { L } from "./i18n";
import adminCapital from "@/assets/projects/admin-capital-road.jpg";
import naqab from "@/assets/projects/naqab-asphalt.jpg";
import badrHousing from "@/assets/projects/badr-housing.jpg";
import suez from "@/assets/projects/suez-canal.jpg";
import nakhl from "@/assets/projects/nakhl-roads.jpg";
import wadiTir from "@/assets/projects/wadi-tir-road.jpg";
import qantara from "@/assets/projects/qantara-road.jpg";
import interlock from "@/assets/projects/interlock-works.jpg";
import concrete from "@/assets/projects/badr-concrete-plant.jpg";

export const COMPANY_EMAIL = "info@nejmetsinai.com";

export const nav: { to: string; label: L }[] = [
  { to: "/", label: { ar: "الرئيسية", en: "Home" } },
  { to: "/about", label: { ar: "من نحن", en: "About" } },
  { to: "/services", label: { ar: "خدماتنا", en: "Services" } },
  { to: "/projects", label: { ar: "المشاريع", en: "Projects" } },
  { to: "/equipment", label: { ar: "المعدات والموارد", en: "Equipment" } },
  { to: "/qhse", label: { ar: "الجودة والسلامة", en: "QHSE" } },
  { to: "/careers", label: { ar: "الوظائف", en: "Careers" } },
  { to: "/news", label: { ar: "الأخبار", en: "News" } },
];

export const ui = {
  contact: { ar: "تواصل معنا", en: "Contact Us" },
  consult: { ar: "اطلب استشارة", en: "Request a Consultation" },
  explore: { ar: "استكشف مشاريعنا", en: "Explore Our Projects" },
  viewAll: { ar: "عرض كل المشاريع", en: "View All Projects" },
  details: { ar: "التفاصيل", en: "View Details" },
  home: { ar: "الرئيسية", en: "Home" },
  all: { ar: "الكل", en: "All" },
  search: { ar: "ابحث باسم المشروع", en: "Search by project name" },
  noResults: { ar: "لا توجد مشاريع مطابقة.", en: "No matching projects." },
  completed: { ar: "منجز", en: "Completed" },
  egypt: { ar: "مصر", en: "Egypt" },
  saudi: { ar: "السعودية", en: "Saudi Arabia" },
  privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
  rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  companyName: { ar: "شركة نجمة سيناء للمقاولات العامة", en: "Najmat Sinai Construction & Contracting" },
};

export const stats: { value: L; label: L }[] = [
  { value: { ar: "+10", en: "10+" }, label: { ar: "سنوات من الخبرة", en: "Years of experience" } },
  { value: { ar: "+10 مليار", en: "EGP 10B+" }, label: { ar: "جنيه قيمة المشروعات المنفذة", en: "Value of executed projects" } },
  { value: { ar: "الأولى", en: "First" }, label: { ar: "فئة التصنيف", en: "Class classification" } },
  { value: { ar: "3", en: "3" }, label: { ar: "3 دول: مصر، السعودية، الإمارات", en: "3 Countries: Egypt, KSA & UAE" } },
];

export type ServiceKey = "roads" | "infrastructure" | "housing" | "earthworks" | "materials" | "paving";

export const services: { key: ServiceKey; title: L; desc: L }[] = [
  { key: "roads", title: { ar: "الطرق والكباري", en: "Roads & Highways" }, desc: { ar: "إنشاء وتوسعة الطرق القومية والداخلية، من أعمال التمهيد والطبقات حتى الرصف النهائي.", en: "Construction and widening of national and internal roads, from subgrade preparation to final paving." } },
  { key: "infrastructure", title: { ar: "البنية التحتية", en: "Infrastructure" }, desc: { ar: "تنفيذ مشروعات البنية التحتية المرتبطة بخطط التنمية القومية في مصر والسعودية والإمارات.", en: "Delivery of infrastructure works linked to national development programmes in Egypt, Saudi Arabia and UAE." } },
  { key: "housing", title: { ar: "الإسكان والمباني", en: "Housing & Buildings" }, desc: { ar: "تنفيذ مشروعات الإسكان، بما فيها مشروعات الإسكان الاجتماعي.", en: "Execution of housing developments, including social housing projects." } },
  { key: "earthworks", title: { ar: "أعمال الحفر والتسوية", en: "Earthworks & Excavation" }, desc: { ar: "أعمال الحفر والردم والتسوية واسعة النطاق، ومنها المشاركة في حفر قناة السويس الجديدة.", en: "Large-scale excavation, backfilling and grading, including participation in the New Suez Canal." } },
  { key: "materials", title: { ar: "الأسفلت والخرسانة", en: "Asphalt & Concrete" }, desc: { ar: "تشغيل الكسارات وخلاطات الأسفلت ومحطات الخرسانة المركزية لدعم مواقع العمل.", en: "Operation of crushers, asphalt mixing and central concrete plants to supply our sites." } },
  { key: "paving", title: { ar: "البردورات والإنترلوك", en: "Curbs & Interlock" }, desc: { ar: "أعمال البردورات والأرصفة والإنترلوك وتنسيق الممرات.", en: "Curbstones, sidewalks, interlock paving and walkway finishing." } },
];

export type Project = {
  slug: string;
  title: L;
  location: L;
  country: "egypt" | "saudi";
  service: ServiceKey;
  image: string;
  desc: L;
};

export const projects: Project[] = [
  { slug: "new-administrative-capital-road", title: { ar: "طريق العاصمة الإدارية الجديدة", en: "New Administrative Capital Road" }, location: { ar: "العاصمة الإدارية الجديدة", en: "New Administrative Capital" }, country: "egypt", service: "roads", image: adminCapital, desc: { ar: "تنفيذ أعمال الطريق المسند إلى الشركة من الهيئة الهندسية للقوات المسلحة، بدءًا من أعمال الحفر والتسوية والتمهيد.", en: "Road works assigned to the company by the Armed Forces Engineering Authority, starting with excavation, grading and subgrade preparation." } },
  { slug: "new-suez-canal-excavation", title: { ar: "حفر قناة السويس الجديدة", en: "New Suez Canal Excavation" }, location: { ar: "قناة السويس", en: "Suez Canal" }, country: "egypt", service: "earthworks", image: suez, desc: { ar: "المشاركة في أعمال حفر قناة السويس الجديدة ضمن مشروعات التنمية القومية.", en: "Participation in the excavation works of the New Suez Canal, one of Egypt's national development projects." } },
  { slug: "badr-social-housing", title: { ar: "الإسكان الاجتماعي - بدر", en: "Badr Social Housing" }, location: { ar: "مدينة بدر", en: "Badr City" }, country: "egypt", service: "housing", image: badrHousing, desc: { ar: "تنفيذ عمارات سكنية ضمن مشروع الإسكان الاجتماعي بمدينة بدر.", en: "Construction of residential buildings within the social housing programme in Badr City." } },
  { slug: "nakhl-internal-roads", title: { ar: "الطرق الداخلية لمدينة نخل", en: "Nakhl City Internal Roads" }, location: { ar: "نخل - شمال سيناء", en: "Nakhl, North Sinai" }, country: "egypt", service: "roads", image: nakhl, desc: { ar: "تنفيذ ورصف الطرق الداخلية لمدينة نخل بمحافظة شمال سيناء.", en: "Construction and asphalt paving of the internal road network of Nakhl, North Sinai." } },
  { slug: "wadi-tir-road", title: { ar: "إنشاء وتوسعة طريق وادي وتير", en: "Wadi Watir Road Construction & Widening" }, location: { ar: "جنوب سيناء", en: "South Sinai" }, country: "egypt", service: "roads", image: wadiTir, desc: { ar: "أعمال إنشاء وتوسعة طريق وادي وتير في التضاريس الجبلية بمحافظة جنوب سيناء.", en: "Construction and widening of Wadi Watir road through mountainous terrain in South Sinai." } },
  { slug: "qantara-ismailia-road", title: { ar: "طريق القنطرة - الإسماعيلية", en: "Qantara – Ismailia Road" }, location: { ar: "الإسماعيلية", en: "Ismailia" }, country: "egypt", service: "roads", image: qantara, desc: { ar: "أعمال الطبقات والتسوية والرصف لطريق القنطرة الإسماعيلية.", en: "Base layers, grading and paving works on the Qantara – Ismailia road." } },
  { slug: "naqab-crusher-asphalt-plant", title: { ar: "الكسارة وخلاطة الأسفلت - النقب", en: "Naqab Crusher & Asphalt Plant" }, location: { ar: "مدينة النقب", en: "Naqab City" }, country: "egypt", service: "materials", image: naqab, desc: { ar: "تشغيل الكسارة وخلاطة الأسفلت في مدينة النقب لخدمة مشروعات المحافظة.", en: "Operation of a crusher and asphalt mixing plant in Naqab City serving the governorate's projects." } },
  { slug: "badr-central-concrete-plant", title: { ar: "المحطة المركزية للخرسانة - بدر", en: "Badr Central Concrete Plant" }, location: { ar: "مدينة بدر", en: "Badr City" }, country: "egypt", service: "materials", image: concrete, desc: { ar: "محطة الخرسانة المركزية بمدينة بدر لتوريد الخرسانة لمواقع المشروعات.", en: "Central concrete batching plant in Badr City supplying concrete to project sites." } },
  { slug: "curbs-and-interlock-works", title: { ar: "أعمال البردورات والإنترلوك", en: "Curbs & Interlock Works" }, location: { ar: "مشروعات متعددة", en: "Multiple sites" }, country: "egypt", service: "paving", image: interlock, desc: { ar: "أعمال البردورات والإنترلوك والأرصفة ضمن عدد من مشروعات الشركة.", en: "Curbstone, interlock and sidewalk works delivered across several company projects." } },
];

export const serviceTitle = (k: ServiceKey) => services.find((s) => s.key === k)!.title;
