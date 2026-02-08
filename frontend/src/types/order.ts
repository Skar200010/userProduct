export interface OrderItem {
  id: number;
  quantity: number;
  priceAtTime: number;
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
  };
}


export interface Order {
  id: number;
  customerName: string;
  items: OrderItem[];
}
export interface CreateOrderPayload {
  customerName: string;
  items: {
    productId: number;
    quantity: number;
  }[];
}

