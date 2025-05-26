import { Document, Types } from 'mongoose';

export interface IOrder extends Document {
  user: Types.ObjectId;
  orderItems: Types.ObjectId[]; // array of product IDs
  totalPrice: number;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  shipping_address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
  payment: Types.ObjectId;
  isDeleted?: boolean;
}
