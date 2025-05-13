import express from 'express';
import ValidateRequest from '../../middlewares/ValidateRequest';
import { WishlistControllers } from './wishlist.controller';
import { WishlistValidations } from './wishlist.validation';

const router = express.Router();

// Route to create
router.post(
  '/create-wishlist',
  ValidateRequest(WishlistValidations.createWishlistValidationSchema),
  WishlistControllers.createWishlist,
);

// Route to get all
router.get('/user/:userId', WishlistControllers.getAllWishlistItems);

// Route to get a single wishlist
router.get('/:wishlistId', WishlistControllers.getSingleWishlistItem);

// Route to delete a wishlist by ID
router.delete('/:wishlistId', WishlistControllers.deleteWishlistItem);

export const WishlistRoutes = router;
