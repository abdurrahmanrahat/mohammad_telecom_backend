import { Schema, model } from 'mongoose';
import { ICounter } from './counter.interface';

const counterSchema = new Schema<ICounter>({
  name: { type: String, required: true, unique: true },
  sequenceValue: { type: Number, required: true, default: 0 },
});

export const Counter = model<ICounter>('Counter', counterSchema);
