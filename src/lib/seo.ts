export const seo = (title: string, description: string, path: string) => ({
  meta: [
    { title: `${title} | Najmat Sinai نجمة سيناء` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Najmat Sinai` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});
