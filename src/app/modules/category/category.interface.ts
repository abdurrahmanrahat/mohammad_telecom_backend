import { Document, ObjectId, Types } from 'mongoose';

export interface ICategory extends Document {
  title: string;
  slug: string;
  subCategoryOf: Types.ObjectId | null;
}

export interface IPromiseResponseCategory {
  _id: ObjectId;
  title: string;
  slug: string;
  subCategories: IPromiseResponseCategory[];
}
