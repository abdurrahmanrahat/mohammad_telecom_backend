import { Request } from 'express';
import multer, { FileFilterCallback, StorageEngine } from 'multer';
import path from 'path';
import { TUploadedFile } from './file.interface';

// Define the disk storage engine with proper typing
const storage: StorageEngine = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads'));
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(/\s/g, '')}`;
    cb(null, uniqueName);
  },
});

// Define the file filter function
const fileFilter = (
  _req: Request,
  file: TUploadedFile,
  cb: FileFilterCallback,
): void => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

// Export multer instance with config
const upload = multer({
  storage,
  fileFilter,
});

export default upload;
