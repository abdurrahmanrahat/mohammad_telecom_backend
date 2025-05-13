import { Document, Types } from 'mongoose';

export interface IWishlist extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  isDeleted?: boolean;
}

// make route in users route like: /users/:userId/create-wishlist , then comes rest in same
