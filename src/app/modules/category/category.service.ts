import httpStatus from 'http-status';
import { ObjectId } from 'mongoose';
import AppError from '../../errors/AppError';
import { ICategory, IPromiseResponseCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (categoryData: ICategory) => {
  if (categoryData.subCategoryOf) {
    const parent = await Category.findById(categoryData.subCategoryOf);

    if (!parent) {
      throw new AppError(httpStatus.NOT_FOUND, 'Parent category not found');
    }
  }

  const result = await Category.create(categoryData);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const categories = await Category.find({ subCategoryOf: null }).lean();

  const buildTree = async (
    parent: ICategory,
  ): Promise<IPromiseResponseCategory> => {
    const children = await Category.find({ subCategoryOf: parent._id }).lean();
    const subCategories = await Promise.all(children.map(buildTree));

    return {
      _id: parent._id as ObjectId,
      title: parent.title,
      slug: parent.slug,
      subCategories: subCategories,
    };
  };

  const result = await Promise.all(categories.map(buildTree));
  return result;
};

const updateCategoryIntoDB = async (
  categoryId: string,
  payload: Partial<ICategory>,
) => {
  const result = await Category.findByIdAndUpdate(
    categoryId,
    payload,
    { new: true }, // returns the updated document
  );

  return result;
};

const deleteCategoryFromDB = async (categoryId: string) => {
  // find direct all children
  const subCategories = await Category.find({
    subCategoryOf: categoryId,
  }).lean();

  // recursively delete sub categories
  for (const subCategory of subCategories) {
    await deleteCategoryFromDB(subCategory._id.toString());
  }

  // Delete the parent category
  const result = await Category.findByIdAndDelete(categoryId);
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};
