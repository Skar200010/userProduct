import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";
import { OrderItem } from "./OrderItem";

@Table
export class Order extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  customerName!: string;

  @HasMany(() => OrderItem)
  items!: OrderItem[];
}
