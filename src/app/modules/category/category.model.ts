import { model, Schema } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema: Schema<ICategory> = new Schema<ICategory>(
  {
    title: {
      type: String,
      required: [true, 'Category title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Category slug is required'],
      unique: true,
    },
    subCategoryOf: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const Category = model<ICategory>('Category', categorySchema);
