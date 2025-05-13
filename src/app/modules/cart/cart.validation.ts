import { z } from 'zod';

const createCartValidationSchema = z.object({
  body: z.object({
    product: z.string().min(1, 'Product ID is required'),
    user: z.string().min(1, 'User ID is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
  }),
});

const updateCartValidationSchema = z.object({
  body: z.object({
    quantity: z.number().min(1, 'Quantity must be at least 1'),
  }),
});

export const CartValidations = {
  createCartValidationSchema,
  updateCartValidationSchema,
};
