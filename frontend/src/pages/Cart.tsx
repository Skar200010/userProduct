import {
    Typography,
    Card,
    CardContent,
    IconButton,
    Stack,
    Button,
    TextField,
    Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();
    

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (cart.length === 0) {
        return <Typography>Your cart is empty</Typography>;
    }

    return (
        <Box sx={{ px: 4, py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Cart
            </Typography>

            <Stack spacing={2}>
                {cart.map((item) => (
                    <Card key={item.productId}>
                        <CardContent
                            sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <Box>
                                <Typography fontWeight="bold">{item.name}</Typography>
                                <Typography>₹{item.price}</Typography>

                                <TextField
                                    type="number"
                                    size="small"
                                    value={item.quantity}
                                    inputProps={{
                                        min: 1,
                                        max: item.stock,
                                    }}
                                    sx={{ width: 80, mt: 1 }}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);

                                        if (value < 1) return;

                                        if (value > item.stock) {
                                            alert(`Only ${item.stock} items available in stock`);
                                            return;
                                        } 

                                        updateQuantity(item.productId, value);
                                    }}
                                />

                            </Box>

                            <IconButton
                                color="error"
                                onClick={() => removeFromCart(item.productId)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Typography variant="h6" sx={{ mt: 3 }}>
                Total: ₹{total}
            </Typography>

            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate("/create-order")}
            >
                Proceed to Order
            </Button>
        </Box>
    );
};

export default Cart;
