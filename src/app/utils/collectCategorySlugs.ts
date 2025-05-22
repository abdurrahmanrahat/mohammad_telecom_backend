import { IPromiseResponseCategory } from '../modules/category/category.interface';

export const collectCategorySlugs = (
  selectedSlug: string,
  allCategories: IPromiseResponseCategory[],
): string[] => {
  const result: string[] = [];

  const findCategoryAndCollect = (
    slug: string,
    categories: IPromiseResponseCategory[],
  ) => {
    for (const category of categories) {
      if (category.slug === slug) {
        result.push(category.slug);
        collectSubSlugs(category);
        return;
      }
      if (category.subCategories?.length > 0) {
        findCategoryAndCollect(slug, category.subCategories);
      }
    }
  };

  const collectSubSlugs = (category: IPromiseResponseCategory) => {
    for (const sub of category.subCategories || []) {
      result.push(sub.slug);
      collectSubSlugs(sub);
    }
  };

  findCategoryAndCollect(selectedSlug, allCategories);

  return result;
};
