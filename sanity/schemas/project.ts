export default {
  name: "project",
  title: "Portfolio Project",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string", validation: (R: any) => R.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "category", title: "Category", type: "string", options: { list: ["Social Media", "Paid Ads", "Branding", "Web", "SEO", "Influencer"] } },
    { name: "client", title: "Client Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "results", title: "Key Result", type: "string" },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "image", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "order", title: "Order", type: "number" },
    { name: "body", title: "Case Study Body", type: "array", of: [{ type: "block" }] },
  ],
};
