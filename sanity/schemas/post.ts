export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (R: any) => R.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "category", title: "Category", type: "string", options: { list: ["Meta Ads", "Content", "SEO", "Strategy", "Branding", "Social Media"] } },
    { name: "mainImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "teamMember" }] },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 2 },
  ],
  preview: { select: { title: "title", subtitle: "category" } },
};
