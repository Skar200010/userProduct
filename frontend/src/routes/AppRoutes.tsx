import { Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList";
import CreateOrder from "../pages/CreateOrder";
import OrderDetails from "../pages/OrderDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/create-order" element={<CreateOrder />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
    </Routes>
  );
};

export default AppRoutes;
