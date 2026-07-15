import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, excerpt, publishedAt, category,
  "imageUrl": mainImage.asset->url,
  "author": author->name
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, body, publishedAt, category,
  "imageUrl": mainImage.asset->url,
  "author": author->name
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id, title, category, description, results, tags,
  "imageUrl": image.asset->url
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id, name, role, company, quote, rating
}`;
