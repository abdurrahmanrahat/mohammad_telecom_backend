import { model, Schema } from 'mongoose';
import { IProductReview } from './product-review.interface';

const productReviewSchema: Schema<IProductReview> = new Schema<IProductReview>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must be associated with a user'],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Review must be associated with a product'],
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Minimum rating is 1'],
      max: [5, 'Maximum rating is 5'],
    },
    review: {
      type: String,
      required: [true, 'Review text is required'],
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductReview = model<IProductReview>(
  'ProductReview',
  productReviewSchema,
);
