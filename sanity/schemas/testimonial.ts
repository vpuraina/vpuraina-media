export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Client Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "quote", title: "Quote", type: "text" },
    { name: "rating", title: "Rating", type: "number", validation: (R: any) => R.min(1).max(5) },
    { name: "avatar", title: "Avatar", type: "image" },
    { name: "order", title: "Order", type: "number" },
  ],
};
