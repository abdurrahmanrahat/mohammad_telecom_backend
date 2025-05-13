import { model, Schema } from 'mongoose';
import { IDiscount } from './discount.interface';

const discountSchema: Schema<IDiscount> = new Schema<IDiscount>(
  {
    title: {
      type: String,
      required: [true, 'Discount title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Discount description is required'],
    },
    code: {
      type: String,
      required: [true, 'Discount code is required'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    discountType: {
      type: String,
      enum: ['percentage', 'flat'],
      required: [true, 'Discount type must be either "percentage" or "flat"'],
    },
    discountValue: {
      type: Number,
      required: [true, 'Discount value is required'],
      trim: true,
    },
    usedCount: {
      type: Number,
      default: 0,
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

export const Discount = model<IDiscount>('Discount', discountSchema);
