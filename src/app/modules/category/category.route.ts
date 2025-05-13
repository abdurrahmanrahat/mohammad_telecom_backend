import express from 'express';
import ValidateRequest from '../../middlewares/ValidateRequest';
import { CategoryControllers } from './category.controller';
import { CategoryValidations } from './category.validations';

const router = express.Router();

// create category
router.post(
  '/create-category',
  ValidateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory,
);

// get all categories
router.get('/', CategoryControllers.getAllCategories);

// update category
router.patch(
  '/:categoryId',
  ValidateRequest(CategoryValidations.updateCategoryValidationSchema),
  CategoryControllers.updateCategory,
);

// delete category
router.delete('/:categoryId', CategoryControllers.deleteCategory);

export const CategoryRoutes = router;
