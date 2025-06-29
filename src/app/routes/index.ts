import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CartRoutes } from '../modules/cart/cart.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { DiscountRoutes } from '../modules/discount/discount.route';
import { fileRoutes } from '../modules/file/file.route';
import { OrderRoutes } from '../modules/order/order.route';
import { ProductRoutes } from '../modules/product/product.route';
import { UserRoutes } from '../modules/user/user.route';
import { WishlistRoutes } from '../modules/wishlist/wishlist.route';

const router = express.Router();

// router.use('/users', UserRoutes);

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/discounts',
    route: DiscountRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/wishlists',
    route: WishlistRoutes,
  },
  {
    path: '/carts',
    route: CartRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/files',
    route: fileRoutes,
  },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
