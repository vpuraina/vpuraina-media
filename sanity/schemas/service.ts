export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Service Title", type: "string" },
    { name: "icon", title: "Emoji Icon", type: "string" },
    { name: "description", title: "Short Description", type: "text" },
    { name: "features", title: "Features", type: "array", of: [{ type: "string" }] },
    { name: "order", title: "Display Order", type: "number" },
  ],
};
