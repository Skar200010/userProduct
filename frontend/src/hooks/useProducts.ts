// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../api/product.api";

// export const useProducts = () => {
//   return useQuery({
//     queryKey: ["products"],
//     queryFn: getProducts,
//   });
// };
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.api";

export const useProducts = (category?: string) =>
  useQuery({
    queryKey: ["products", category], // 👈 cache per category
    queryFn: () => getProducts(category),
    enabled: category !== "", // optional safety
  });

