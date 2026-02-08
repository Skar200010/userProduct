import { Product } from "../models/Product";

export const getAllProducts = () => {
  return Product.findAll();
};
