import QueryBuilder from '../../builder/QueryBuilder';
import { IWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';

const createWishlistInDb = async (payload: IWishlist) => {
  const wishlistItem = await Wishlist.create(payload);
  return wishlistItem;
};

const getAllWishlistFromDb = async (
  userId: string,
  query: Record<string, unknown>,
) => {
  const wishlistQuery = new QueryBuilder(
    Wishlist.find({ user: userId, isDeleted: false }),
    query,
  )
    .filter()
    .paginate();

  const data = await wishlistQuery.modelQuery
    .sort({ createdAt: -1 })
    .populate('product')
    .populate('user', '-password');

  const wishlistQueryWithoutPagination = new QueryBuilder(
    Wishlist.find({ user: userId, isDeleted: false }),
    query,
  ).filter();

  const document = await wishlistQueryWithoutPagination.modelQuery;
  const totalCount = document?.length;

  return { data, totalCount };
};

const getSingleWishlistFromDb = async (wishlistId: string) => {
  const wishlistItem = await Wishlist.findOne({
    _id: wishlistId,
    isDeleted: false,
  })
    .populate('product')
    .populate('user', '-password');

  return wishlistItem;
};

const deleteWishlist = async (wishlistId: string) => {
  const result = await Wishlist.findByIdAndUpdate(
    wishlistId,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const WishlistServices = {
  createWishlistInDb,
  getAllWishlistFromDb,
  getSingleWishlistFromDb,
  deleteWishlist,
};
