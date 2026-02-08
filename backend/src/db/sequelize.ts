import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Product } from "../models/Product";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";

dotenv.config();
console.log("DB URL:", process.env.DATABASE_URL);


export const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    
  dialect: "postgres",
  models: [Product, Order, OrderItem],

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
