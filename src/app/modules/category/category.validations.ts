import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    slug: z.string({ required_error: 'Slug is required' }),
    subCategoryOf: z.union([z.string(), z.literal(null)]),
  }),
});

const updateCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    subCategoryOf: z.union([z.string(), z.literal(null)]).optional(),
  }),
});

export const CategoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
