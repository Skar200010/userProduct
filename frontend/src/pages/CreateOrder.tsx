import {
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "../hooks/useCreateOrder";
import { useCart } from "../context/CartContext";

const CreateOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const { cart, clearCart } = useCart();
  const createOrderMutation = useCreateOrder();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!customerName.trim()) {
      alert("Customer name is required");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const payload = {
      customerName,
      items: cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };

    const res = await createOrderMutation.mutateAsync(payload);

    clearCart(); 
    navigate(`/orders/${res.id}`);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Create Order
      </Typography>

      <TextField
        label="Customer Name"
        fullWidth
        sx={{ mb: 3 }}
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      <Stack spacing={2}>
        {cart.map((item) => (
          <Card key={item.productId}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>
                {item.name} × {item.quantity}
              </Typography>

              <Typography>
                ₹{item.price * item.quantity}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Total */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        Total: ₹
        {cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )}
      </Typography>

      {/* Submit */}
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        onClick={handleSubmit}
        disabled={createOrderMutation.isPending}
      >
        {createOrderMutation.isPending
          ? "Placing Order..."
          : "Place Order"}
      </Button>
    </Box>
  );
};

export default CreateOrder;
