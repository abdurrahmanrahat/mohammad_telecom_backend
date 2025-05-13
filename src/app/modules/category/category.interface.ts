import { Document, ObjectId, Types } from 'mongoose';

export interface ICategory extends Document {
  title: string;
  subCategoryOf: Types.ObjectId | null;
}

export interface IPromiseResponseCategory {
  _id: ObjectId;
  title: string;
  subCategories: IPromiseResponseCategory[];
}
