import { Request, Response } from "express";
import { getAllProducts } from "../services/product.service";

import { Product } from "../models/Product";

export const fetchProducts = async (_: Request, res: Response) => {
  const products = await getAllProducts();
  res.json(products);
};


export const seedProducts = async (_req: Request, res: Response) => {
  await Product.bulkCreate([
    { name: "Laptop", price: 60000, stock: 2 },

  ]);

  res.json({ message: "Products seeded" });
};


export const updateProductStock = async (req: Request, res: Response) => {
  const productId = Number(req.params.id);
  const { stock } = req.body;

  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product id" });
  }

  if (typeof stock !== "number" || stock < 0) {
    return res.status(400).json({ message: "Invalid stock value" });
  }

  const product = await Product.findByPk(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.stock = stock;
  await product.save();

  res.json({
    message: "Stock updated successfully",
    product,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = Number(req.params.id);

  const product = await Product.findByPk(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  await product.destroy();

  res.json({ message: "Product deleted successfully" });
};
