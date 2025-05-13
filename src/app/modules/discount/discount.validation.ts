import { z } from 'zod';

const createDiscountValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Discount title is required'),
    description: z.string().min(1, 'Description is required'),
    code: z.string().min(1, 'Discount code is required'),
    discountType: z.enum(['percentage', 'flat'], {
      required_error: 'Discount type is required',
    }),
    discountValue: z
      .number({ required_error: 'Discount value is required' })
      .min(0, 'Discount value must be non-negative'),
  }),
});

const updateDiscountValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Discount title is required').optional(),
    description: z.string().min(1, 'Description is required').optional(),
    code: z.string().min(1, 'Discount code is required').optional(),
    discountType: z.enum(['percentage', 'flat']).optional(),
    discountValue: z
      .number()
      .min(0, 'Discount value must be non-negative')
      .optional(),
  }),
});

export const DiscountValidations = {
  createDiscountValidationSchema,
  updateDiscountValidationSchema,
};
