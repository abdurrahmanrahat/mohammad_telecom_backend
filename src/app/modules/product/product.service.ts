import QueryBuilder from '../../builder/QueryBuilder';
import { productSearchableFields } from './product.constants';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDb = async (payload: IProduct) => {
  return await Product.create(payload);
};

const getProductsFromDb = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(
    Product.find({ isDeleted: false }),
    query,
  )
    .search(productSearchableFields)
    .filter()
    .paginate();

  const data = await productQuery.modelQuery.sort({ createdAt: -1 });

  const countQuery = new QueryBuilder(Product.find({ isDeleted: false }), query)
    .search(productSearchableFields)
    .filter();

  const totalCount = (await countQuery.modelQuery).length;

  return { data, totalCount };
};

const getSingleProductFromDb = async (productId: string) => {
  return await Product.findOne({ _id: productId, isDeleted: false });
};

const updateProductIntoDb = async (
  productId: string,
  payload: Partial<IProduct>,
) => {
  return await Product.findByIdAndUpdate(productId, payload, { new: true });
};

const deleteProductIntoDb = async (productId: string) => {
  return await Product.findByIdAndUpdate(
    productId,
    { isDeleted: true },
    { new: true },
  );
};

export const ProductServices = {
  createProductIntoDb,
  getProductsFromDb,
  getSingleProductFromDb,
  updateProductIntoDb,
  deleteProductIntoDb,
};
