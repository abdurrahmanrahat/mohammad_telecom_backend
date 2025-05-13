import express from 'express';
import ValidateRequest from '../../middlewares/ValidateRequest';
import { CartControllers } from './cart.controller';
import { CartValidations } from './cart.validation';

const router = express.Router();

router.post(
  '/add-to-cart',
  ValidateRequest(CartValidations.createCartValidationSchema),
  CartControllers.addToCart,
);

router.get('/user/:userId', CartControllers.getUserCartItems);

router.patch(
  '/:cartId',
  ValidateRequest(CartValidations.updateCartValidationSchema),
  CartControllers.updateCartItem,
);

// delete
router.delete('/:cartId', CartControllers.deleteCartItem);

export const CartRoutes = router;
