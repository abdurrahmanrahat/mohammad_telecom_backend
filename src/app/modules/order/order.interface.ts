import { Document, Types } from 'mongoose';
import { ORDER_STATUS } from './order.constants';

export interface IOrder extends Document {
  fullName: string;
  fullAddress: string;
  phoneNo: string;
  email: string;
  country: string;
  orderNotes: string;
  insideDhaka: boolean;
  orderItems: TOrderItem[];
  totalPrice: number;
  status?: keyof typeof ORDER_STATUS;
  isDeleted?: boolean;
}

type TOrderItem = {
  product: Types.ObjectId;
  quantity: number;
};

// after creating order, then update each product stock
