import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { WishlistServices } from './wishlist.service';

const createWishlist = catchAsync(async (req: Request, res: Response) => {
  const wishlistData = req.body;
  const result = await WishlistServices.createWishlistInDb(wishlistData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Wishlist item added successfully',
    data: result,
  });
});

const getAllWishlistItems = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const result = await WishlistServices.getAllWishlistFromDb(userId, req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist retrieved successfully',
    data: result,
  });
});

const getSingleWishlistItem = catchAsync(
  async (req: Request, res: Response) => {
    const { wishlistId } = req.params;
    const result = await WishlistServices.getSingleWishlistFromDb(wishlistId);

    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Wishlist item not found',
        data: null,
      });
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist item retrieved successfully',
      data: result,
    });
  },
);

const deleteWishlistItem = catchAsync(async (req: Request, res: Response) => {
  const { wishlistId } = req.params;
  const result = await WishlistServices.deleteWishlist(wishlistId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist item deleted successfully',
    data: result,
  });
});

export const WishlistControllers = {
  createWishlist,
  getAllWishlistItems,
  getSingleWishlistItem,
  deleteWishlistItem,
};
