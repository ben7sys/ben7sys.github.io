import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const publicMetadata = z.object({
  description: z.string().min(20),
  doctype: z
    .enum([
      'index',
      'doc',
      'article',
      'runbook',
      'adr',
      'report',
      'tool',
    ])
    .default('doc'),
  status: z
    .enum(['stable', 'draft', 'deprecated', 'archived'])
    .default('stable'),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: publicMetadata,
    }),
  }),
};
