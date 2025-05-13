import { Document, Types } from 'mongoose';

export interface IOrder extends Document {
  user: Types.ObjectId;
  totalPrice: number;
  discount: number;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  shipping_address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
  };
  orderItems: Types.ObjectId[];
  payment: Types.ObjectId;
  isDeleted?: boolean;
}
