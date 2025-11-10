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

const blocks = defineCollection({
  // Load JSON files for Are.na-style content blocks
  loader: glob({ base: './src/content/blocks', pattern: '**/*.json' }),
  schema: () =>
    z.object({
      type: z.enum(['image', 'video', 'link', 'text', 'audio', 'document']),
      title: z.string().optional(),
      description: z.string().optional(),
      content: z.string().optional(),
      url: z.string().optional(),
      thumbnail: z.string().optional(),
      color: z.enum(['default', 'blue', 'green', 'pink', 'orange', 'yellow', 'purple']).optional(),
      metadata: z
        .object({
          siteName: z.string().optional(),
          favicon: z.string().optional(),
          author: z.string().optional(),
          date: z.string().optional()
        })
        .optional(),
      tags: z.array(z.string()).optional(),
      createdAt: z.coerce.date(),
      width: z.number().optional(),
      height: z.number().optional()
    })
})

export const collections = { posts, about, work, projects, blocks }
