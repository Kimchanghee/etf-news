import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const guides = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/guides'}),schema:z.object({title:z.string().min(50).max(60),description:z.string().min(150).max(160),question:z.string(),answer:z.string(),data_asof:z.string(),updated:z.string(),sources:z.array(z.object({title:z.string(),url:z.string().url()})).min(1),faq:z.array(z.object({question:z.string(),answer:z.string()})).min(2)})});
export const collections={guides};