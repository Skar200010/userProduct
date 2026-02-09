import api from "./axios";
//import type { Product } from "../types/product";

export const getProducts = async (category?: string) => {
  const res = await api.get("/products", {
    params: category ? { category } : {},
  });
  return res.data;
};
// import type { Product } from "../types/product";
// import { mockProducts } from "../mock/products.mock";

// // TEMP: mock API (until backend is ready)
// export const getProducts = async (): Promise<Product[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockProducts);
//     }, 300); // simulate API delay
//   });
// };
