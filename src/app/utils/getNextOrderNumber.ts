import { Counter } from '../modules/counter/counter.model';

export const getNextOrderNumber = async (): Promise<string> => {
  const counter = await Counter.findOneAndUpdate(
    { name: 'order' },
    { $inc: { sequenceValue: 1 } },
    { upsert: true, new: true },
  );

  return `ORD-${counter.sequenceValue}`;
};
