import { Order, OrderStatus, CartItem, Address, PaymentMethod } from '../../types';

export interface CreateOrderPayload {
  userId?: string;
  items: CartItem[];
  shippingAddress: Address;
  paymentMethod: PaymentMethod;
  couponCode?: string;
  notes?: string;
}

export interface IOrderService {
  createOrder(payload: CreateOrderPayload): Promise<Order>;
  getOrders(userId?: string): Promise<Order[]>;
  getOrderById(id: string): Promise<Order | null>;
  updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order>;
  cancelOrder(orderId: string, reason?: string): Promise<Order>;
  getAllOrdersForAdmin(): Promise<Order[]>;
}
