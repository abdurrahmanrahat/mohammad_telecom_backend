import QueryBuilder from '../../builder/QueryBuilder';
import { discountSearchableFields } from './discount.constants';
import { IDiscount } from './discount.interface';
import { Discount } from './discount.model';

const createDiscountInDb = async (discountInfo: IDiscount) => {
  const result = await Discount.create(discountInfo);
  return result;
};

const getDiscountsFromDb = async (query: Record<string, unknown>) => {
  const discountQuery = new QueryBuilder(
    Discount.find({ isDeleted: false }),
    query,
  )
    .search(discountSearchableFields)
    .filter()
    .paginate();

  const data = await discountQuery.modelQuery.sort({ createdAt: -1 });

  const discountQueryWithoutPagination = new QueryBuilder(
    Discount.find({ isDeleted: false }),
    query,
  )
    .search(discountSearchableFields)
    .filter();

  const document = await discountQueryWithoutPagination.modelQuery;
  const totalCount = document?.length;

  return { data, totalCount };
};

const getSingleDiscountFromDb = async (discountId: string) => {
  const result = await Discount.findOne({ _id: discountId, isDeleted: false });
  return result;
};

const updateDiscountInDb = async (
  discountId: string,
  body: Partial<IDiscount>,
) => {
  const result = await Discount.findOneAndUpdate({ _id: discountId }, body, {
    new: true,
  });
  return result;
};

const deleteDiscountFromDb = async (discountId: string) => {
  const result = await Discount.findByIdAndUpdate(
    discountId,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const DiscountServices = {
  createDiscountInDb,
  getDiscountsFromDb,
  getSingleDiscountFromDb,
  updateDiscountInDb,
  deleteDiscountFromDb,
};
