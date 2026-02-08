import { sequelize } from "../db/sequelize";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { Product } from "../models/Product";

export const createOrderService = async (
  customerName: string,
  items: { productId: number; quantity: number }[]
) => {
  return sequelize.transaction(async (t) => {
    const order = await Order.create(
      { customerName },
      { transaction: t }
    );

    for (const item of items) {
      const product = await Product.findByPk(item.productId, {
        transaction: t,
      });

      if (!product || product.stock < item.quantity) {
        throw new Error("Insufficient stock");
      }

      product.stock -= item.quantity;
      await product.save({ transaction: t });

      await OrderItem.create(
        {
          orderId: order.id,
          productId: product.id,
          quantity: item.quantity,
          priceAtTime: product.price,
        },
        { transaction: t }
      );
    }

    return order;
  });
};
