import { ObjectId } from 'mongoose';

export interface ICart extends Document {
  product: ObjectId;
  user: ObjectId;
  quantity: number;
}
// remove directly, do not need isDeleted here

// /carts/create-cart
// /carts/:userId

//  don't need if login is not required for purchase products
