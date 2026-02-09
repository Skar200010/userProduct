import { Product } from "../models/Product";

export const getAllProducts = (category?: string) => {
  return Product.findAll({
    where: category ? { category } : undefined,
  });
};
