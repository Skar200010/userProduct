import express from "express";
const cors = require('cors');
import dotenv from "dotenv";
import { sequelize } from "./db/sequelize";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
