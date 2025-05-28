import { z, defineCollection } from 'astro:content';

// Define collections for site content
export const collections = {
  // Games collection schema
  games: defineCollection({
    type: 'content',
    schema: z.object({
      title:       z.string(),
      releaseDate: z.string(),
      description: z.string(),
      coverImage:  z.string(),
      trailer:     z.string().optional(),
    }),
  }),

  // Team collection schema
  team: defineCollection({
    type: 'content',
    schema: z.object({
      name:   z.string(),
      role:   z.string(),
      photo:  z.string(),
      social: z
        .object({
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
  }),

  // Careers collection schema
  careers: defineCollection({
    type: 'content',
    schema: z.object({
      title:            z.string(),                       // Job title
      location:         z.string(),                       // Job location
      shortDescription: z.string(),                       // Brief summary
      responsibilities: z.array(z.string()),              // List of responsibilities
      requirements:     z.array(z.string()),              // List of requirements
      applyLink:        z.string().url().optional(),      // External apply link (URL)
      applyEmail:       z.string().email().optional(),    // Application email
    }),
  }),


  // Press collection
  press: defineCollection({
    type: 'content',
    schema: z.object({
      title:      z.string(),           // Post title
      date:       z.string(),           // ISO date e.g. "2025-05-24"
      excerpt:    z.string(),           // Short summary
      coverImage: z.string().optional(),// Optional path to header image
      tags:       z.array(z.string()).optional(), // Optional tags
    }),
  }),
};
