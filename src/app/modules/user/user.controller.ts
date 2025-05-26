import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;

  const result = await UserServices.createUserInfoDb(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User register successfully',
    data: result,
  });
});

const getCurrentUser = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization as string;

  const result = await UserServices.getUserInfoFromDb(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getUsersFromDb(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All users retrieved successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const result = await UserServices.updateUserIntoDb(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const result = await UserServices.deleteUserIntoDb(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getCurrentUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
