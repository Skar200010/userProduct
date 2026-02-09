import { Request, Response } from "express";
import { getAllProducts } from "../services/product.service";

import { Product } from "../models/Product";

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    const products = await getAllProducts(
      category ? String(category) : undefined
    );

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};


export const seedProducts = async (_req: Request, res: Response) => {
  await Product.destroy({ where: {} });

  await Product.bulkCreate(
    [
      {
        name: "Laptop",
        price: 60000,
        stock: 2,
        category: "electronics",
        imageUrl:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      },
      {
        name: "Wireless Mouse",
        price: 800,
        stock: 10,
        category: "electronics",
        imageUrl:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      },
      {
        name: "Keyboard",
        price: 1500,
        stock: 5,
        category: "electronics",
        imageUrl:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      },

      {
        name: "T-Shirt",
        price: 799,
        stock: 20,
        category: "clothing",
        imageUrl:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      },
      {
        name: "Jeans",
        price: 1999,
        stock: 15,
        category: "clothing",
        imageUrl:
          "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      },

      {
        name: "Air Fryer",
        price: 4500,
        stock: 4,
        category: "lifestyle",
        imageUrl:
          "https://images.unsplash.com/photo-1616627985020-9e7f1f45b6d8",
      },
      {
        name: "Mixer Grinder",
        price: 3200,
        stock: 6,
        category: "lifestyle",
        imageUrl:
          "https://images.unsplash.com/photo-1590086782792-42dd2350140d",
      },
    ],
    { validate: true }
  );

  res.json({
    message: "Products seeded successfully",
  });
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
