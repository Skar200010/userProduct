import {
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../api/order.api";
import type { Order } from "../types/order";
import { useMemo } from "react";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<Order>({
    queryKey: ["order", id],
    queryFn: () => getOrderById(Number(id)),
    enabled: !!id,
  });

  const totalAmount = useMemo(() => {
    if (!data) return 0;
    return data.items.reduce(
      (sum, item) => sum + item.priceAtTime * item.quantity,
      0
    );
  }, [data]);

  if (isLoading) {
    return <Typography>Loading order details...</Typography>;
  }

  if (isError) {
    return (
      <Typography color="error">
        {(error as Error).message || "Failed to load order"}
      </Typography>
    );
  }

  if (!data) {
    return <Typography>No order found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>

      <Card>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="subtitle2" color="text.secondary">
              Order ID: {data.id}
            </Typography>

            <Typography variant="h6">
              Customer: {data.customerName}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" gutterBottom>
              Items
            </Typography>

            <Stack spacing={1}>
              {data.items.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>
                    {item.product.name} × {item.quantity}
                  </Typography>
                  <Typography fontWeight={500}>
                    ₹{item.priceAtTime * item.quantity}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" justifyContent="space-between">
              <Typography fontWeight="bold">Total Amount</Typography>
              <Typography fontWeight="bold">₹{totalAmount}</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetails;
