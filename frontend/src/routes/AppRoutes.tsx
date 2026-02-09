import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProductList from "../pages/ProductList";
import CreateOrder from "../pages/CreateOrder";
import OrderDetails from "../pages/OrderDetails";
import Cart from "../pages/Cart"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category/:category" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/create-order" element={<CreateOrder />} />
      <Route path="/orders/:id" element={<OrderDetails />} />


    </Routes>
  );
};

export default AppRoutes;
