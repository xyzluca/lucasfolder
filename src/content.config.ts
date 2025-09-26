import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      image: z.string().optional()
    })
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

const work = defineCollection({
  // Load Markdown files for work experience to show on main page
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      company: z.string(),
      role: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      current: z.boolean().default(false),
      logo: z.string().optional()
    })
})

const projects = defineCollection({
  // Load project files that will show alongside blog posts
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      url: z.string().url().optional(),
      github: z.string().url().optional(),
      status: z.enum(['live', 'private', 'archived']).optional(),
      tech: z.array(z.string()).optional(),
      image: z.string().optional()
    })
})

export const collections = { posts, about, work, projects }
