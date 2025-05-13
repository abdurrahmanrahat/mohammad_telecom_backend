import { Document, Types } from 'mongoose';

export interface IProductReview extends Document {
  user: Types.ObjectId;
  product: Types.ObjectId;
  rating: number;
  review: string;
  isDeleted?: boolean;
}

// make routes in product route like: /products/:productId/create-review , then comes rest in same
