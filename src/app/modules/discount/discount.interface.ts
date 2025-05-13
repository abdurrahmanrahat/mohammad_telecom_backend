import { Document } from 'mongoose';

export interface IDiscount extends Document {
  title: string;
  description: string;
  code: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  usedCount?: number;
  isDeleted?: boolean;
}

// it just add in product, so that when user put cupon code in cart, it will check if the product is eligible for discount or not.
