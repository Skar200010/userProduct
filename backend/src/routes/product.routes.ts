import { Router } from "express";
import { fetchProducts, seedProducts, updateProductStock, deleteProduct } from "../controllers/product.controller";


const router = Router();
router.get("/", fetchProducts);

router.post("/seed", seedProducts);

router.put("/:id/stock", updateProductStock);

router.delete("/:id", deleteProduct);


export default router;
