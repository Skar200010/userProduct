import { Request, Response } from "express";
import { createOrderService } from "../services/order.service";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { Product } from "../models/Product";

export const createOrder = async (req: Request, res: Response) => {
  const { customerName, items } = req.body;
  const order = await createOrderService(customerName, items);
  res.status(201).json(order);
};

export const getOrderById = async (req: Request, res: Response) => {
  const orderId = Number(req.params.id);

  if (isNaN(orderId)) {
    return res.status(400).json({ message: "Invalid order id" });
  }

  const order = await Order.findByPk(orderId, {
    include: [{ model: OrderItem, include: [Product] }],
  });

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
};

