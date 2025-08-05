import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const general = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/general" }),
    schema: z.object({
        updatedDate: z.string().optional(),
    }),
});

export const collections = { general };
