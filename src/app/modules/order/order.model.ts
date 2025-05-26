import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema: Schema<IOrder> = new Schema<IOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Order must be associated with a user'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price cannot be negative'],
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'delivered', 'cancelled'],
      default: 'pending',
      required: [true, 'Order status is required'],
    },
    shipping_address: {
      street: {
        type: String,
        required: [true, 'Shipping street is required'],
      },
      city: {
        type: String,
        required: [true, 'Shipping city is required'],
      },
      state: {
        type: String,
        required: [true, 'Shipping state is required'],
      },
      country: {
        type: String,
        required: [true, 'Shipping country is required'],
      },
      zip_code: {
        type: String,
        required: [true, 'Shipping ZIP code is required'],
      },
    },
    orderItems: [
      {
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: [true, 'Order must include at least one item'],
      },
    ],
    payment: {
      type: Schema.Types.ObjectId,
      ref: 'Payment',
      required: [true, 'Payment reference is required'],
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

export const Order = model<IOrder>('Order', orderSchema);
