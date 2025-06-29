import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import fileService from './file.service';

const uploadFile = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }

  const imageUrl = fileService.getImageUrl(req.file);

  // res.status(200).json({ message: 'Upload successful', imageUrl });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'File upload successfully',
    data: imageUrl,
  });
});

export default {
  uploadFile,
};
