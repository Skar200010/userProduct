import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { OrderItem } from "./OrderItem";

@Table
export class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageUrl!: string; // ✅ FIXED

  @HasMany(() => OrderItem)
  orderItems!: OrderItem[];
}
