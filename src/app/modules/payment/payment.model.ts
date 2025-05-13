import { model, Schema } from 'mongoose';
import { IPayment } from './payment.interface';

const paymentSchema: Schema<IPayment> = new Schema<IPayment>(
  {
    paymentId: {
      type: String,
      required: [true, 'Payment ID is required'],
      unique: true,
    },
    amount: {
      type: Number,
      required: [true, 'Payment amount is required'],
      min: [0, 'Payment amount cannot be negative'],
    },
    payment_method: {
      type: String,
      enum: ['stripe', 'paypal', 'ssl'],
      required: [true, 'Payment method must be stripe, paypal, or ssl'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Payment must be associated with a user'],
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
      required: [true, 'Payment status is required'],
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

export const Payment = model<IPayment>('Payment', paymentSchema);
