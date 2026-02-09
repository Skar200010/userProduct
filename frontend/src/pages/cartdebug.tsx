// CartDebug.tsx
import { useCart } from "../context/CartContext";

const CartDebug = () => {
  const { cart } = useCart();
  console.log("🛒 CART STATE:", cart);
  return null;
};

export default CartDebug;
