import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    venue: z.string().optional(),
    citation: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).optional()
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int()
  })
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date().optional(),
    topic: z.string().optional(),
    url: z.string().url().optional()
  })
});

export const collections = {
  publications,
  projects,
  writing
};
