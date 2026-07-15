export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", title: "Full Name", type: "string" },
    { name: "role", title: "Role / Title", type: "string" },
    { name: "bio", title: "Bio", type: "text" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "linkedin", title: "LinkedIn URL", type: "url" },
    { name: "twitter", title: "Twitter / X URL", type: "url" },
    { name: "order", title: "Display Order", type: "number" },
  ],
};
