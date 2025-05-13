import { model, Schema } from 'mongoose';
import { IWishlist } from './wishlist.interface';

const wishlistSchema: Schema<IWishlist> = new Schema<IWishlist>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Wishlist must be associated with a user'],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Wishlist must contain a product'],
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

export const Wishlist = model<IWishlist>('Wishlist', wishlistSchema);
