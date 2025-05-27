import { Document, Types } from 'mongoose';

export interface IWishlist extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  isDeleted?: boolean;
}

//  don't need if login is not required for purchase products
