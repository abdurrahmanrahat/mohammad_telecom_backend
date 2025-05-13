import express from 'express';
import ValidateRequest from '../../middlewares/ValidateRequest';
import { DiscountControllers } from './discount.controller';
import { DiscountValidations } from './discount.validation';

const router = express.Router();

// Route to create a discount
router.post(
  '/create-discount',
  ValidateRequest(DiscountValidations.createDiscountValidationSchema),
  DiscountControllers.createDiscount,
);

// Route to get all discounts
router.get('/', DiscountControllers.getAllDiscounts);

// Route to get a single discount
router.get('/:discountId', DiscountControllers.getSingleDiscount);

// Route to update a discount by ID
router.patch(
  '/:discountId',
  ValidateRequest(DiscountValidations.updateDiscountValidationSchema),
  DiscountControllers.updateDiscount,
);

// Route to delete a discount by ID
router.delete('/:discountId', DiscountControllers.deleteDiscount);

export const DiscountRoutes = router;
