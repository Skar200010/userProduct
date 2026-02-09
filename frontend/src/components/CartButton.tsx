import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Tooltip title="View Cart">
      <span>
        <IconButton
          color="inherit"
          disabled={totalQuantity === 0}
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={totalQuantity} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default CartButton;
