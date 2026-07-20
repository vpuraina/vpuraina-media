import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "vpuraina-media",
  title: "Vpuraina Media CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool(),
    visionTool(),
    // This adds the split-screen visual editor pointing to your live site
    presentationTool({
      previewUrl: "https://media.vpuraina.com", 
    }),
  ],
  schema: { types: schemaTypes },
  basePath: "/studio",
});