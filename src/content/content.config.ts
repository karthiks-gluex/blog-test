import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      description: z.string().optional(),

      // Images
      image: image().optional(),
      coverImage: image().optional(),

      // Author info
      author: z.string().default("GlueX Team"),

      // Dates
      publishDate: z.coerce.date(),
      updateDate: z.coerce.date().optional(),

      // Content metadata
      readingTime: z.number().optional(),

      // Taxonomy
      category: z
        .object({
          name: z.string(),
          slug: z.string(),
        })
        .optional(),

      tags: z
        .array(
          z.object({
            name: z.string(),
            slug: z.string(),
          })
        )
        .optional(),

      // Publishing
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),

      // SEO
      canonical: z.string().optional(),
      noindex: z.boolean().default(false),

      // Social
      socialImage: image().optional(),
    }),
})

export const collections = {
  blog,
}
