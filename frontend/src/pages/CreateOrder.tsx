import {
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCreateOrder } from "../hooks/useCreateOrder";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const { data: products } = useProducts();
  const createOrderMutation = useCreateOrder();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!customerName.trim()) {
      alert("Customer name is required");
      return;
    }

    const items =
      products
        ?.filter((p) => p.stock > 0)
        .map((p) => ({
          productId: p.id,
          quantity: 1,
        })) ?? [];

    if (items.length === 0) {
      alert("No products available to order");
      return;
    }

    const payload = {
      customerName,
      items,
    };

    const res = await createOrderMutation.mutateAsync(payload);
    navigate(`/orders/${res.id}`);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Create Order
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={createOrderMutation.isPending}
        >
          {createOrderMutation.isPending ? "Placing Order..." : "Place Order"}
        </Button>
      </Stack>
    </>
  );
};

export default CreateOrder;
