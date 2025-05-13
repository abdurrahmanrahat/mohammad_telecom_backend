import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CartServices } from './cart.service';

const addToCart = catchAsync(async (req: Request, res: Response) => {
  const result = await CartServices.addToCart(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Item added to cart successfully',
    data: result,
  });
});

const getUserCartItems = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await CartServices.getCartItems(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart items retrieved successfully',
    data: result,
  });
});

const updateCartItem = catchAsync(async (req: Request, res: Response) => {
  const { cartId } = req.params;
  const result = await CartServices.updateCartItem(cartId, req.body.quantity);

  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Cart item not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart item updated successfully',
    data: result,
  });
});

const deleteCartItem = catchAsync(async (req: Request, res: Response) => {
  const { cartId } = req.params;
  const result = await CartServices.deleteCartItem(cartId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart item deleted successfully',
    data: result,
  });
});

export const CartControllers = {
  addToCart,
  getUserCartItems,
  updateCartItem,
  deleteCartItem,
};
