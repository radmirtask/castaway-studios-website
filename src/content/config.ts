import { z, defineCollection } from 'astro:content';

// Define collections for site content
export const collections = {
  // Games collection schema
  games: defineCollection({
    schema: z.object({
      title:       z.string(),
      releaseDate: z.string(),
      description: z.string(),
      coverImage:  z.string(),
    }),
  }),

  // Team collection schema
  team: defineCollection({
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
};
