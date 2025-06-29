import { TUploadedFile } from './file.interface';

const getImageUrl = (file: TUploadedFile): string => {
  return `uploads/${file.filename}`;
};

export default {
  getImageUrl,
};
