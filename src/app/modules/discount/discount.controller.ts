import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { DiscountServices } from './discount.service';

const createDiscount = catchAsync(async (req: Request, res: Response) => {
  const discountData = req.body;

  const result = await DiscountServices.createDiscountInDb(discountData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Discount created successfully',
    data: result,
  });
});

const getAllDiscounts = catchAsync(async (req: Request, res: Response) => {
  const result = await DiscountServices.getDiscountsFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All discounts retrieved successfully',
    data: result,
  });
});

const getSingleDiscount = catchAsync(async (req: Request, res: Response) => {
  const { discountId } = req.params;

  const result = await DiscountServices.getSingleDiscountFromDb(discountId);

  if (result) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single discount retrieved successfully',
      data: result,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Discount not found!',
      data: result,
    });
  }
});

const updateDiscount = catchAsync(async (req: Request, res: Response) => {
  const { discountId } = req.params;
  const result = await DiscountServices.updateDiscountInDb(
    discountId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Discount updated successfully',
    data: result,
  });
});

const deleteDiscount = catchAsync(async (req: Request, res: Response) => {
  const { discountId } = req.params;
  const result = await DiscountServices.deleteDiscountFromDb(discountId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Discount deleted successfully',
    data: result,
  });
});

export const DiscountControllers = {
  createDiscount,
  getAllDiscounts,
  getSingleDiscount,
  updateDiscount,
  deleteDiscount,
};
