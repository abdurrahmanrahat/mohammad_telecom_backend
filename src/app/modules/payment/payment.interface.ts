import { Document, ObjectId } from 'mongoose';

export interface IPayment extends Document {
  paymentId: string;
  amount: number;
  payment_method: 'stripe' | 'paypal' | 'ssl';
  user: ObjectId;
  status: 'pending' | 'completed' | 'failed';
  isDeleted?: boolean;
}
