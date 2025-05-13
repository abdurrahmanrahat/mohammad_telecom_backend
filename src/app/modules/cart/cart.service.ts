import { ICart } from './cart.interface';
import { Cart } from './cart.model';

const addToCart = async (payload: ICart) => {
  const result = await Cart.create(payload);
  return result;
};

const getCartItems = async (userId: string) => {
  const result = await Cart.find({ user: userId }).populate('product');
  return result;
};

const updateCartItem = async (cartId: string, quantity: number) => {
  const result = await Cart.findByIdAndUpdate(
    cartId,
    { quantity },
    { new: true },
  );
  return result;
};

const deleteCartItem = async (cartId: string) => {
  const result = await Cart.findByIdAndDelete(cartId);
  return result;
};

export const CartServices = {
  addToCart,
  getCartItems,
  updateCartItem,
  deleteCartItem,
};
