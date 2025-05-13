import { Schema, model } from 'mongoose';
import { ICart } from './cart.interface';

const cartSchema: Schema<ICart> = new Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Cart must be associated with a user'],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Cart must contain a product'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Minimum quantity is 1'],
    },
  },
  {
    timestamps: true,
  },
);

export const Cart = model<ICart>('Cart', cartSchema);
