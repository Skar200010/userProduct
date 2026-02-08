import api from "./axios";

export const createOrder = async (payload: any) => {
  const res = await api.post("/orders", payload);
  return res.data;
};

export const getOrderById = async (id: string) => {
  const res = await api.get(`/orders/${id}`);
  return res.data;
};
// import type { Order } from "../types/order";
// import type { CreateOrderPayload } from "../types/order";
// import { mockProducts } from "../mock/products.mock";
// import { mockOrders } from "../mock/orders.mock";

// export const createOrder = async (
//   payload: CreateOrderPayload
// ): Promise<Order> => {
//   const { customerName, items } = payload;

//   const orderItems = items.map((item) => {
//     const product = mockProducts.find((p) => p.id === item.productId)!;

//     if (product.stock < item.quantity) {
//       throw new Error("Insufficient stock");
//     }

//     product.stock -= item.quantity;

//     return {
//       productId: product.id,
//       name: product.name,
//       quantity: item.quantity,
//       priceAtTime: product.price,
//     };
//   });

//   const order: Order = {
//     id: Date.now(),
//     customerName,
//     items: orderItems,
//   };

//   mockOrders.push(order);
//   return order;
// };
// export const getOrderById = async (id: number): Promise<Order> => {
//   const order = mockOrders.find((o) => o.id === id);

//   if (!order) {
//     throw new Error("Order not found");
//   }

//   return order;
// };