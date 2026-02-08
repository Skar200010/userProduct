import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../api/order.api";
import type { CreateOrderPayload, Order } from "../types/order";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation<Order, Error, CreateOrderPayload>({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
